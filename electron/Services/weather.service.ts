'use strict'

import { Service } from "typedi";
import WeatherRepository from "../DAO/weather.dao";
import WeatherResponseApiDTO from "DTO/WeatherDTO/weatherResponseApi.dto";

@Service()
class WeatherService {

    constructor( 
        private readonly _weatherRepository: WeatherRepository 
    ){

    }

    async getWeatherTime():Promise<WeatherResponseApiDTO>{
        let result = await this._weatherRepository.getStatusTime();
        return Promise.resolve( result );
    }


}

export default WeatherService;