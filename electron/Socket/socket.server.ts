'use strict'

import { Service } from "typedi";
const server = require('http').createServer();
const io = require('socket.io')(server);
import { Socket, Transport, Event, InboundRequest } from 'electron-ipc-socket';
import { BrowserWindow, ipcMain } from 'electron';

@Service()
class SocketIO {

    socket: Socket;

    constructor(){

    }

    public InitServer ( win: BrowserWindow ):void{
        console.log('Server socket Method!!!');
        /*
        this.socket = new Socket( new Transport( ipcMain ));

        this.socket.open('main-win');

        this.socket.onEvent('ready', ( evt : Event ) => {
            console.log('Renderer process is ready');
        });
        */
        /*
        io.on('connection', (client) => {

            console.log("Inicio Socket");

            io.emit('welcome');

            client.on("test", () => {
                console.log("received test"); // not displayed
                io.emit("ok");
            });

        });
        io.listen(process.env.SOCKET_PORT);
        */
    }
}

export default SocketIO;