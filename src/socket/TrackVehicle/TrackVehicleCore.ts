import { Socket } from "../helper";
import { TrackVehicle } from "./TrackVehicle";

export class TrackVehicleCore {

    private sender: Socket.Sender;
    private receiver: Socket.Receiver;
    private trackVehicle: TrackVehicle;

    constructor(sender: Socket.Sender, receiver: Socket.Receiver) {
        this.sender = sender;
        this.receiver = receiver;
        this.init();
    }

    init() {
        this.trackVehicle = new TrackVehicle(this.sender, this.receiver);
    }
}