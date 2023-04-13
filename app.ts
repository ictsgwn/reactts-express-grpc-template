
import * as grpc from 'grpc';
import { GrpcHealthCheck, HealthCheckRequest, HealthCheckResponse, HealthClient, HealthService } from 'grpc-ts-health-check';
import logger from './config/logger';
import { GreeterService, IGreeterServer} from './grpcService/src/greeter_grpc_pb';
import GreeterServer from './grpcService/greeterServer';

const port = process.env.PORT || 5544;

const serviceName = 'transcriber.Transcriber';
const healthCheckStatusMap = {
  serviceName: HealthCheckResponse.ServingStatus.SERVING
};

const serve = () => {
  const server = new grpc.Server();

  // Register the health service
  const grpcHealthCheck = new GrpcHealthCheck(healthCheckStatusMap);
  server.addService(HealthService, grpcHealthCheck);

  // Create the health client
  const healthClient = new HealthClient(`localhost:${port}`, grpc.credentials.createInsecure());
  const request = new HealthCheckRequest();
  request.setService(serviceName);

  // Watch health status - streaming request
  // This will set the initial health status and continue to watch the service for changes.
  const healthStream = healthClient.watch(request);
  healthStream.on('data', (response: HealthCheckResponse) => {
    logger.info(`Transcriber Service: Health Status: ${response.getStatus()}`);
  });

  // server.addService<ITranscriberServer>(TranscriberService, new TranscriberServer());
  server.addService<IGreeterServer>(GreeterService, new GreeterServer());

  const success = server.bind(`[::]:${port}`, grpc.ServerCredentials.createInsecure());
  logger.info(`listening on port ${port}`);
  console.log(success);
  server.start();

}

serve();

export { port, serve, logger }

