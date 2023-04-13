#!/bin/bash -xe
#This script will build a local docker image running on your local machine

clear

if [ -z "$1" ]; then
    DOCKERFILE=Dockerfile
    DEBUG=""
else
    DOCKERFILE=$1
    DEBUG="-debug"
fi

# main settings. 
VERSION=0.1.0
LATEST=latest 
PACKAGE=node-grpc-boiler$DEBUG

if ! docker images -q $PACKAGE:$VERSION; then
    docker image rm $PACKAGE:$VERSION #remove old image         
fi   

docker build -t $PACKAGE:$VERSION -f $DOCKERFILE .    
docker tag $PACKAGE:$VERSION $PACKAGE:$LATEST
docker image ls $PACKAGE

echo "RUN: docker run -it -p 5544:5544 $PACKAGE:$LATEST"

