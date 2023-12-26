import { OnModuleInit } from "@nestjs/common";
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io'


@WebSocketGateway()
export class GateWay implements OnModuleInit {
    @WebSocketServer()
    server: Server;

    onModuleInit() {
        this.server.on('connection', (socket) => {
            socket.broadcast.emit('join', 'a user joined chat')
            socket.emit('all', 'welcome to chat!!')

            socket.on('disconnect', () => {
                socket.broadcast.emit('leave', 'a user leave the chat')
            })
        })
    }

    // users = 0
    // onModuleInit() {
    //     this.server.on('connection', (socket: Socket) => {
    //         console.log('user connected')
    //         // console.log('room', socket.rooms)
    //         // console.log('id', socket.id)

    //         this.users = this.users + 1
    //         socket.broadcast.emit('broadcast', `${this.users} users are connected`)
    // to display all except new user
    //         socket.emit('broadcast', 'Welcome to the chat!') //display all
    //         this.server.emit('all', 'Good morning!') // display all

    //         socket.on('disconnect', () => {
    //             // this.users--
    //             this.users = this.users - 1
    //             // this.server.emit('broadcast', `${this.users} are connected`)
    //             console.log('user disconnected')
    //             this.server.emit('all', 'Good morning!')
    //             socket.broadcast.emit('broadcast', `${this.users} users are connected`)
    //         })
    //     })
    // }


    @SubscribeMessage('chatmessage')
    newMessage(@MessageBody() body) {
        // console.log(body)
        this.server.emit('chatmessage', body);
        return body;
    }
}