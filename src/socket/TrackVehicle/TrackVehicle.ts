import * as SocketIo from "socket.io";
import { Socket } from "../helper";

export class TrackVehicle {

    private sender: Socket.Sender;
    private receiver: Socket.Receiver;
    
    constructor(sender: Socket.Sender, receiver: Socket.Receiver) {
        this.sender = sender;
        this.receiver = receiver;
    }

    vehicleTracking() {
        this.receiver.onReceive("message", (m: any) => {
            this.sender.sendAllClientExcSender("message", m);
        });
    }
}
