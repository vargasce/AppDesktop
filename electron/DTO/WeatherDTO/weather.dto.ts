'use strict'

class WeatherDTO{

    constructor(
        public id: number,
        public main: string,
        public description: string,
        public icon: string
    ){}
}

export default WeatherDTO;