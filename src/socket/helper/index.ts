import { Receiver as _Receiver } from "./Receiver";
import { Sender as _Sender } from "./Sender";
import { SocketConnection as _SocketConnection } from "./SocketConnection";

export namespace Socket {
    export class Receiver extends _Receiver {
    }

    export class Sender extends _Sender {
    }

    export class SocketConnection extends _SocketConnection {
    }
}