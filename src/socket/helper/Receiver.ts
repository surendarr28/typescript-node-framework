import * as SocketIo from "socket.io";
import { Sender } from "./Sender";

export class Receiver {

    private socket: any;
    private io: SocketIo;
    private sender: Sender;
    private namespace: string;

    constructor(socket: any, io: SocketIo, namespace: string) {
        this.socket = socket;
        this.io = io;
        this.namespace = namespace;
        this.sender = new Sender(this.socket, this.io, this.namespace);
    }

    onReceive(key: string = "mesage", calback: any) {
        this.socket.on(key, calback);
    }
}
