
import { logger } from '../app';
import * as grpc from 'grpc';
import { IGreeterServer} from './src/greeter_grpc_pb';
import { HelloRequest, HelloReply, NameList, Name } from './src/greeter_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

export default class GreeterServer implements IGreeterServer {

  sayHello(call: grpc.ServerUnaryCall<HelloRequest>, callback: grpc.sendUnaryData<HelloReply>) {
    logger.info('sayHello has been called');
    callback(null, this.sayHelloCallback(call.request));
  }

  private sayHelloCallback(request: HelloRequest) {
    const name = request.getName();
    const reply = new HelloReply();
    reply.setMessage(`Hello ${name}`);
    return reply;
  }

  listNames(call: grpc.ServerUnaryCall<Empty>, callback: grpc.sendUnaryData<NameList>) {
    logger.info('listNames has been called');
    callback(null, this.listNamesCallback())
  }

  private listNamesCallback() : NameList {
    const namelist = new NameList();
    namelist.setNamesList(['Doe', 'Jessie']);
    namelist.addNames('John');
    return namelist;
  }

  streamListNames(call: grpc.ServerWritableStream<Empty>) {
    logger.info('streamListNames has been called');
    const listOfNames = this.getListOfNames();
    for (const name of listOfNames) {
      call.write(name);
    }
    call.end();
  }

  private getListOfNames() {
    const john = new Name();
    john.setName('John');
    const doe = new Name();
    doe.setName('doe');
    return [john, doe];
  }
}