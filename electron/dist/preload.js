'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preload = void 0;
require("reflect-metadata");
const typedi_1 = require("typedi");
const weather_controller_1 = require("./Controller/weather.controller");
const Login_controller_1 = require("./Controller/Login/Login.controller");
const Usuario_controller_1 = require("./Controller/Usuario/Usuario.controller");
const socket_server_1 = require("./Socket/socket.server");
class Preload {
    constructor() {
        this._weatherController = typedi_1.default.get(weather_controller_1.default);
        this._loginController = typedi_1.default.get(Login_controller_1.default);
        this._ServerIO = typedi_1.default.get(socket_server_1.default);
        this._usuarioController = typedi_1.default.get(Usuario_controller_1.default);
    }
    InitEvents() {
        this._weatherController.InitController();
        this._loginController.InitController();
        this._usuarioController.InitController();
    }
    InitSocket(win) {
        //this._ServerIO.InitServer( win );
    }
}
exports.Preload = Preload;
//# sourceMappingURL=preload.js.map