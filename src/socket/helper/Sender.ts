import * as SocketIo from "socket.io";

export class Sender {

    private socket: any;
    private io: SocketIo;
    private namespace: string;

    constructor(socket: any, io: SocketIo, namespace: string) {
        this.socket = socket;
        this.io = io;
        this.namespace = namespace;
    }

    sendAllClientIncSenderIo(key: string = "mesage", data: any): void {
        this.io.emit(key, data);
    }

    sendAllClientIncSenderRoomIo(room: string = "room", key: string = "mesage", data: any): void {
        this.io.in(room).emit(key, data);
    }

    sendToAllClientInNamespaceIo(room: string = "room", key: string = "mesage", data: any): void {
        this.io.of(this.namespace).emit(key, data);
    }

    sendSenderClient(key: string = "mesage", data: any): void {
        this.socket.emit(key, data);
    }

    sendAllClientExcSender(key: string = "mesage", data: any): void {
        this.socket.broadcast.emit(key, data);
    }

    sendAllClientExcSenderRoom(room: string = "room", key: string = "mesage", data: any): void {
        this.socket.broadcast.to(room).emit(key, data);
    }

    sendSenderClientInRoom(room: string = "room", key: string = "mesage", data: any): void {
        this.socket.to(room).emit(key, data);
    }

    sendToIndividual(socketId: string, room: string = "room", key: string = "mesage", data: any): void {
        this.socket.broadcast.to(socketId).emit(key, data);
    }
}
