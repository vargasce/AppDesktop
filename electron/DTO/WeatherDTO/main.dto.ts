'use strict'

class MainDTO{

    constructor(
        public temp: number,
        public feels_like: number,
        public temp_min: number,
        public temp_max: number,
        public pressure: number,
        public humidity: number
    ){}
}

export default MainDTO;