import * as grpc from 'grpc';
import { GreeterClient } from './src/greeter_grpc_pb';
import { HelloRequest, HelloReply, NameList, Name } from './src/greeter_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { port } from '../app';

describe('GreeterServer', () => {

  let client;
  beforeEach(() => {
    client = new GreeterClient(`localhost:${port}`, grpc.credentials.createInsecure());
  });
  afterEach(() => {
    client.close();
  })

  it('sayHello should return Hello + name', (done) => {
    const request = new HelloRequest();
    request.setName('John');
    expect.assertions(1);
    client.sayHello(request, (error: grpc.ServiceError|null, response: HelloReply) => {
      expect(response.getMessage()).toBe('Hello John');
      done();
    })
  });

  it('listNames should return list of names', (done) => {
    expect.assertions(1);
    client.listNames(new Empty(), (error: grpc.ServiceError|null, response: NameList) => {
      expect(response.getNamesList()).toStrictEqual(['Doe', 'Jessie', 'John']);
      done();
    })
  });

  it('streamListNames should return names one by one', (done) => {
    expect.assertions(1);
    const streamCall = client.streamListNames(new Empty());
    streamCall.on('data', (name: Name) => {
      expect(name.getName()).toBe('John');
      done();
      return;
    });
  });

});