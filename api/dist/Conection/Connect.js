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
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const sqlite = require("sqlite3").verbose();
//import sqlite from 'sqlite3';
const path = require("path");
//import * as fs from 'fs';
const Connection_error_1 = require("../Error/Connection/Connection.error");
let ConnectDB = class ConnectDB {
    constructor() {
        this._instace = null;
        this._dirPath = path.join(__dirname, '../baseDB/base.db');
    }
    getConection() {
        try {
            console.log(this._dirPath);
            //if( fs.existsSync( this._dirPath )){
            if (true) {
                this._instace = new sqlite.Database(this._dirPath, sqlite.OPEN_READWRITE, (error) => {
                    if (error) {
                        console.log(`Conexion Error : ${error}`);
                        return null;
                    }
                    else {
                        console.log("Conexion Success!!!");
                    }
                });
            }
        }
        catch (exc) {
            console.log(exc);
            throw new Connection_error_1.default('Error Conexion', `Error al realizar conexion con db : ${exc}`);
        }
        return this._instace;
    }
    closeConection() {
        if (this._instace != null) {
            this._instace.close();
        }
    }
};
ConnectDB = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [])
], ConnectDB);
exports.default = ConnectDB;
//# sourceMappingURL=Connect.js.map