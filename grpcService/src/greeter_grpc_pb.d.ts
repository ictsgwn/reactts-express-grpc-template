// package: greeter
// file: greeter.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as greeter_pb from "./greeter_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
    listNames: IGreeterService_IListNames;
    streamListNames: IGreeterService_IStreamListNames;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<greeter_pb.HelloRequest, greeter_pb.HelloReply> {
    path: "/greeter.Greeter/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<greeter_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<greeter_pb.HelloRequest>;
    responseSerialize: grpc.serialize<greeter_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<greeter_pb.HelloReply>;
}
interface IGreeterService_IListNames extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, greeter_pb.NameList> {
    path: "/greeter.Greeter/ListNames";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<greeter_pb.NameList>;
    responseDeserialize: grpc.deserialize<greeter_pb.NameList>;
}
interface IGreeterService_IStreamListNames extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, greeter_pb.Name> {
    path: "/greeter.Greeter/StreamListNames";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<greeter_pb.Name>;
    responseDeserialize: grpc.deserialize<greeter_pb.Name>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleUnaryCall<greeter_pb.HelloRequest, greeter_pb.HelloReply>;
    listNames: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, greeter_pb.NameList>;
    streamListNames: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, greeter_pb.Name>;
}

export interface IGreeterClient {
    sayHello(request: greeter_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    listNames(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: greeter_pb.NameList) => void): grpc.ClientUnaryCall;
    listNames(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_pb.NameList) => void): grpc.ClientUnaryCall;
    listNames(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.NameList) => void): grpc.ClientUnaryCall;
    streamListNames(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greeter_pb.Name>;
    streamListNames(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greeter_pb.Name>;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: greeter_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public listNames(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: greeter_pb.NameList) => void): grpc.ClientUnaryCall;
    public listNames(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_pb.NameList) => void): grpc.ClientUnaryCall;
    public listNames(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.NameList) => void): grpc.ClientUnaryCall;
    public streamListNames(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greeter_pb.Name>;
    public streamListNames(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greeter_pb.Name>;
}
