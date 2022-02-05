'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preload = void 0;
require("reflect-metadata");
const typedi_1 = require("typedi");
const weather_controller_1 = require("./Controller/weather.controller");
class Preload {
    constructor() {
        this._weatherController = typedi_1.default.get(weather_controller_1.default);
    }
    InitEvents() {
        this._weatherController.InitController();
    }
}
exports.Preload = Preload;
//# sourceMappingURL=preload.js.map