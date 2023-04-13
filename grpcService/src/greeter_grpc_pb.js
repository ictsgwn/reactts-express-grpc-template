// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var greeter_pb = require('./greeter_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_HelloReply(arg) {
  if (!(arg instanceof greeter_pb.HelloReply)) {
    throw new Error('Expected argument of type greeter.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_HelloReply(buffer_arg) {
  return greeter_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_HelloRequest(arg) {
  if (!(arg instanceof greeter_pb.HelloRequest)) {
    throw new Error('Expected argument of type greeter.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_HelloRequest(buffer_arg) {
  return greeter_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_Name(arg) {
  if (!(arg instanceof greeter_pb.Name)) {
    throw new Error('Expected argument of type greeter.Name');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_Name(buffer_arg) {
  return greeter_pb.Name.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_NameList(arg) {
  if (!(arg instanceof greeter_pb.NameList)) {
    throw new Error('Expected argument of type greeter.NameList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_NameList(buffer_arg) {
  return greeter_pb.NameList.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  // Sends a greeting
sayHello: {
    path: '/greeter.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: greeter_pb.HelloRequest,
    responseType: greeter_pb.HelloReply,
    requestSerialize: serialize_greeter_HelloRequest,
    requestDeserialize: deserialize_greeter_HelloRequest,
    responseSerialize: serialize_greeter_HelloReply,
    responseDeserialize: deserialize_greeter_HelloReply,
  },
  listNames: {
    path: '/greeter.Greeter/ListNames',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: greeter_pb.NameList,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_greeter_NameList,
    responseDeserialize: deserialize_greeter_NameList,
  },
  streamListNames: {
    path: '/greeter.Greeter/StreamListNames',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: greeter_pb.Name,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_greeter_Name,
    responseDeserialize: deserialize_greeter_Name,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
