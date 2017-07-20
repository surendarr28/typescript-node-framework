import * as SocketIo from "socket.io";
import { Sender } from "./Sender";
import { Receiver } from "./Receiver";

export class SocketConnection {

    private io: SocketIo;
    private sender: Sender;
    private receiver: Receiver;
    private namespace: string = "main";
    private callBack: any;

    constructor(io: SocketIo, namespace: string, callBack: any) {
        this.io = io;
        this.namespace = namespace;
        this.callBack = callBack;

        this.io.of(this.namespace).on('connect', (socket: any) => {
            this.sender = new Sender(socket, this.io, this.namespace);
            this.receiver = new Receiver(socket, this.io, this.namespace);
            this.callBack(this.io, this.sender, this.receiver);
        });
    }
}
