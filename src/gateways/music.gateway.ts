import {
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway,
    WsResponse
} from "@nestjs/websockets";

@WebSocketGateway(2078)
export class MusicGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    constructor () {
        console.log('okay');
    }

    afterInit () {
        console.log('inited');
    }

    handleConnection (client) {
        console.log(client);
    }

    handleDisconnect () {
        console.log('disconnect');
    }

    @SubscribeMessage('events')
    onEvent(client, data: any): WsResponse<any> {
        const event = 'events';
        return { event, data };
    }
}
