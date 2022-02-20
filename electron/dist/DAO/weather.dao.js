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
let WeatherRepository = class WeatherRepository {
    constructor() {
    }
    getStatusTime() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const request = electron_1.net.request('http://api.openweathermap.org/data/2.5/weather?q=lujan&appid=c6d13d47482d8a41459027050fcaae06');
                    request.on('response', (response) => {
                        //console.log(`STATUS: ${response.statusCode}`)
                        //console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
                        response.on('data', (chunk) => {
                            //console.log(`BODY: ${chunk}`)
                            resolve(JSON.parse(chunk.toString()));
                        });
                        response.on('end', () => {
                            //console.log('No more data in response.');
                        });
                    });
                    request.on('finish', () => {
                    });
                    request.on('error', (error) => {
                        reject(error);
                    });
                    request.end();
                }
                catch (error) {
                    reject(`Error al obtener datos : ${error}`);
                }
            }));
        });
    }
};
WeatherRepository = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], WeatherRepository);
exports.default = WeatherRepository;
//# sourceMappingURL=weather.dao.js.map