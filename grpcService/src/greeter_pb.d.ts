// package: greeter
// file: greeter.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class HelloRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): HelloRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloRequest;
    static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
    export type AsObject = {
        name: string,
    }
}

export class HelloReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): HelloReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloReply.AsObject;
    static toObject(includeInstance: boolean, msg: HelloReply): HelloReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloReply;
    static deserializeBinaryFromReader(message: HelloReply, reader: jspb.BinaryReader): HelloReply;
}

export namespace HelloReply {
    export type AsObject = {
        message: string,
    }
}

export class NameList extends jspb.Message { 
    clearNamesList(): void;
    getNamesList(): Array<string>;
    setNamesList(value: Array<string>): NameList;
    addNames(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NameList.AsObject;
    static toObject(includeInstance: boolean, msg: NameList): NameList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NameList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NameList;
    static deserializeBinaryFromReader(message: NameList, reader: jspb.BinaryReader): NameList;
}

export namespace NameList {
    export type AsObject = {
        namesList: Array<string>,
    }
}

export class Name extends jspb.Message { 
    getName(): string;
    setName(value: string): Name;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Name.AsObject;
    static toObject(includeInstance: boolean, msg: Name): Name.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Name, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Name;
    static deserializeBinaryFromReader(message: Name, reader: jspb.BinaryReader): Name;
}

export namespace Name {
    export type AsObject = {
        name: string,
    }
}
