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
const sqlite3_1 = require("sqlite3");
const path = require("path");
const fs = require("fs");
const Connection_error_1 = require("../Error/Connection/Connection.error");
let ConnectDB = class ConnectDB {
    constructor() {
        this._instace = null;
        this._dirPath = path.join(__dirname, '../baseDB/base.db');
    }
    getConection() {
        try {
            if (fs.existsSync(this._dirPath)) {
                this._instace = new sqlite3_1.default.Database(this._dirPath, sqlite3_1.default.OPEN_READWRITE, (error) => {
                    if (!error)
                        return null;
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