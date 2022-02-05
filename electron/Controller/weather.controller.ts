'use strict';

import { ipcMain } from 'electron';
import { Service } from 'typedi';
import WeatherService from '../Services/weather.service';
import WeatherResponseApiDTO from 'DTO/WeatherDTO/weatherResponseApi.dto';

@Service()
class WeatherController {

    constructor(
        private _weatherService : WeatherService
    ){
    }

    public InitController (){
        this.initEvents();
    }

    private initEvents(){

        ipcMain.on('get-status-weather', async ( event: any ) => {

            try{
                event.returnValue = await this._weatherService.getWeatherTime();
            }catch( err ){
                event.returnValue = err;
            }
            
        });

    }

}

export default WeatherController;
