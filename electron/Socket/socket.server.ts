'use strict'

import { Service } from "typedi";
const server = require('http').createServer();
const io = require('socket.io')(server);

@Service()
class SocketIO {

    constructor(){

    }

    public InitServer ():void{

        io.on('connection', (client) => {

            io.emit('welcome');

            client.on("test", () => {
                console.log("received test"); // not displayed
                io.emit("ok");
            });

        });

        io.listen(process.env.SOCKET_PORT);
    }
}

export default SocketIO;