'use strict'

class SysDTO{

    constructor(
        public type: number,
        public id: number,
        public message: number,
        public country: string,
        public sunrise: number,
        public sunset: number
    ){}

}

export default SysDTO;