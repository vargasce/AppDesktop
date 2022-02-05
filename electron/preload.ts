'use strict'

import 'reflect-metadata';
import Container from 'typedi';
import WeatherController from './Controller/weather.controller';

export class Preload{

    private _weatherController : WeatherController;

    constructor(){
        this._weatherController = Container.get( WeatherController );
    }

    public InitEvents (){
        this._weatherController.InitController();
    }

}
