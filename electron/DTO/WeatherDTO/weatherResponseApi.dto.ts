'use strict'

import CoordenadasDTO from "./coordenadas.dto";
import WeatherDTO from "./weather.dto";
import MainDTO from "./main.dto";
import WindDTO from "./wind.dto";
import CloudsDTO from "./clouds.dto";
import SysDTO from "./sys.dto";

class WeatherResponseApiDTO{
    constructor(
        public id: number,
        public timezone: string,
        public name: string,
        public cod: number,
        public dt: number,
        public visibility: number,
        public base: string,
        public coord: CoordenadasDTO,
        public weather: WeatherDTO[],
        public main: MainDTO,
        public wind: WindDTO,
        public clouds: CloudsDTO,
        public sys: SysDTO
    ){}
}

export default WeatherResponseApiDTO;