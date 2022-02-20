'use strict'

import 'reflect-metadata';
import Container from 'typedi';
import WeatherController from './Controller/weather.controller';
import LoginController from './Controller/Login/Login.controller';
import UsuarioController from './Controller/Usuario/Usuario.controller';
import ServerIO from './Socket/socket.server';
import { BrowserWindow } from 'electron';

export class Preload{

    private readonly _weatherController: WeatherController;
    private readonly _loginController: LoginController;
    private readonly _usuarioController: UsuarioController;

    private _ServerIO : ServerIO;

    constructor(){
        this._weatherController = Container.get( WeatherController );
        this._loginController = Container.get( LoginController );
        this._ServerIO = Container.get( ServerIO );
        this._usuarioController = Container.get( UsuarioController );
    }

    public InitEvents ():void{
        this._weatherController.InitController();
        this._loginController.InitController();
        this._usuarioController.InitController();
    }

    public InitSocket( win : BrowserWindow ):void{
        //this._ServerIO.InitServer( win );
    }

}
