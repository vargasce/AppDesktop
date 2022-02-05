'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const typedi_1 = require("typedi");
const weather_service_1 = require("../Services/weather.service");
let WeatherController = class WeatherController {
    constructor(_weatherService) {
        this._weatherService = _weatherService;
    }
    InitController() {
        this.initEvents();
    }
    initEvents() {
        electron_1.ipcMain.on('get-status-weather', (event) => __awaiter(this, void 0, void 0, function* () {
            try {
                event.returnValue = yield this._weatherService.getWeatherTime();
            }
            catch (err) {
                event.returnValue = err;
            }
        }));
    }
};
WeatherController = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [weather_service_1.default])
], WeatherController);
exports.default = WeatherController;
//# sourceMappingURL=weather.controller.js.map