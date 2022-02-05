'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class WeatherResponseApiDTO {
    constructor(id, timezone, name, cod, dt, visibility, base, coord, weather, main, wind, clouds, sys) {
        this.id = id;
        this.timezone = timezone;
        this.name = name;
        this.cod = cod;
        this.dt = dt;
        this.visibility = visibility;
        this.base = base;
        this.coord = coord;
        this.weather = weather;
        this.main = main;
        this.wind = wind;
        this.clouds = clouds;
        this.sys = sys;
    }
}
exports.default = WeatherResponseApiDTO;
//# sourceMappingURL=weatherResponseApi.dto.js.map