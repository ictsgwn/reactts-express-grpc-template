# Introduction 
Boilerplate for Node gRPC (TypeScript) to speed up new project development. The proto file describes the client-facing contract of what this server does. 

There are 4 types of methods:
- unary: single request, single response
- client-streaming: streaming requests, single response
- server-streaming: single request, streaming response
- bidirectional-streaming: streaming request, streaming response

This repo demonstrates how to create unary and server-streaming calls.

For more information regarding gRPC and how it works, refer to [gRPC documentation](https://grpc.io/docs/).


## Getting Started
### Local Setup
1. `npm install`
1. Generate gRPC codes: `bash ./scripts/build-protos.sh`
1. Start the server: `bash ./scripts/startserver.sh`

## Test and Build
1. `npm run test`
1. `npm run build`
1. `npm start`

## Defined Environment Variables
Env variables can be defined and imported using the config files under the `config` folder. For Kubernetes deployment, the values are injected using the CD pipeline and yaml config.

## Project Structure
```
/
|__ app.ts (main start)
|__ config/ (contains the config settings for various environments e.g. dev, prod, test)
|__ grpcService/ (transcribing service)
    |__ src/ (generated code from protoc)
    |__ test/ (test files)
|__ proto/ (contract for gRPC communication, defines functions that will be used and data structures for requests and responses)
|__ scripts/ (helper scripts)
|__ templates/ (kubernetes deployment config)
```

## Unit and Integation Tests
Unit tests are targeted at logic code without dependencies while integration tests are tested with the necessary dependencies, such as external databases and web services. Take note of the code coverage.

## Manual Deployment
### Run Test Suites
`npm run test`

### Local Docker Build
1. For Windows 10 Professional, MacOS and Linux, install [Docker Desktop](https://www.docker.com/products/docker-desktop)
1. For Windows Home, [follow this link](https://docs.docker.com/docker-for-windows/install-windows-home/)
1. Edit the params in script `scripts/build-docker.sh` and build the image using Bash shell 

### Local Docker Test with Env Variables
With file for environment variables:
```
docker run -it --env-file ./scripts/env.list -p 5544:5544 node-grpc-boiler:0.0.1 
```
If there are no files with environment variables, run: `docker run -it -e <VAR_NAME>='<var_value>' -p 5544:5544 node-grpc-boiler:0.0.1`

### Debug build
A build that allow you to debug on Openshift Terminal, installed with additional tools (e.g. vim). Refer to `Dockerfile-tools`.
- `scripts/build-docker.sh Dockerfile-tools`
To deploy the image, tag and push using the same methods by appending with `-debug` e.g. `docker push test.azurecr.io/node-grpc-boiler-debug:latest`

### Login to Azure Kubernetes
1. `az login`
1. `az aks get-credentials --resource-group <resource_group> --name <cluster_name>` e.g. `az aks get-credentials --resource-group tf-test-k8s --name test-staging-cluster`

### Manual Docker Push
1. Login to container registry: `az acr login --name <acrName>` e.g. `az acr login --name test.azurecr.io`
1. Tag image: `docker tag <local_image_name> <remote_image_name>` e.g. `docker tag node-grpc-boiler:latest test.azurecr.io/node-grpc-boiler:latest`
1. Push image: `docker push <docker_image_name>:<tag>` e.g. `docker push test.azurecr.io/node-grpc-boiler:latest`

### Manual Azure Kubernetes Deployment 
Refer to `README.md` in `templates/manual/aks`

### Manual Azure Openshift Deployment 
Refer to `README.md` in `templates/manual/aro`

## Continous Integration / Continous Deployment with Azure Pipeline
We are using Azure Pipeline for CI/CD. The Azure pipeline template is kept under `templates/azure-pipelines/`. There are two pipelines configured: CI, and Staging.

For CI, the following stages are defined:
1. Trigger: Detect code change in deploy branch and trigger pipeline.
1. Test: Run all the test suites using `npm run coverage`. Test results and coverage will be published.

For staging, the following stages are defined:
1. Trigger: Detect code change in deploy branch and trigger pipeline.
1. Test: Run all the test suites using `npm run coverage`. Test results and coverage will be published.
1. Build: Build and push Docker image into Azure Container Registry (ACR)
1. Deploy_to_AKS: Deploy image to Azure Kubernetes cluster.
1. Deploy_to_ARO: Deploy image to Azure Openshift cluster

### Variable Groups
We are using *variable groups* to manage the env vars in this app. For more info, refer to [Add & use variable groups](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=yaml).

## Azure Application Insights
The Logger class will send the winston logs to Azure Application Insights if the variable `APPINSIGHTS_INSTRUMENTATIONKEY` is present in the system environment. The `Instrumentation Key` value can be obtained from the overview page of the Azure Application Insights console.