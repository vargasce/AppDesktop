'use strict'

import 'reflect-metadata';
import Container from 'typedi';
import WeatherController from './Controller/weather.controller';
import ServerIO from './Socket/socket.server';

export class Preload{

    private _weatherController : WeatherController;
    private _ServerIO : ServerIO;

    constructor(){
        this._weatherController = Container.get( WeatherController );
        this._ServerIO = Container.get( ServerIO );
    }

    public InitEvents ():void{
        this._weatherController.InitController();
    }

    public InitSocket():void{
        this._ServerIO.InitServer();
    }

}
