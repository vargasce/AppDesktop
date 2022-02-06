'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preload = void 0;
require("reflect-metadata");
const typedi_1 = require("typedi");
const weather_controller_1 = require("./Controller/weather.controller");
const socket_server_1 = require("./Socket/socket.server");
class Preload {
    constructor() {
        this._weatherController = typedi_1.default.get(weather_controller_1.default);
        this._ServerIO = typedi_1.default.get(socket_server_1.default);
    }
    InitEvents() {
        this._weatherController.InitController();
    }
    InitSocket() {
        this._ServerIO.InitServer();
    }
}
exports.Preload = Preload;
//# sourceMappingURL=preload.js.map