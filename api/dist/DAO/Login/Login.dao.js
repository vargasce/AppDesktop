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
const ConexionSqlite_1 = require("../../Conection/ConexionSqlite");
const Auth_awt_1 = require("../../Auth/Auth.awt");
const typedi_1 = require("typedi");
const Usuario_error_1 = require("../../Error/Usuario/Usuario.error");
const md5 = require("md5");
let LoginDao = class LoginDao {
    constructor(_authjwt) {
        this._authjwt = _authjwt;
        this._conection = null;
        this._conection = ConexionSqlite_1.default.instance;
    }
    SignIn(data) {
        return new Promise((resolve, reject) => {
            try {
                let sql = `SELECT * FROM Usuario WHERE usuario= '${data.usuario}' AND pass= '${md5(data.pass)}';`;
                this._conection.all(sql, (error, result) => {
                    if (!error) {
                        if (result.length == 1) {
                            resolve(this._authjwt.CreatedToken(result[0]));
                        }
                        else {
                            resolve(null);
                        }
                    }
                    else {
                        reject(new Usuario_error_1.default('Error Login', `Error SignIn DAO => ${error}`));
                    }
                });
            }
            catch (_error) {
                throw new Usuario_error_1.default('Error Login', `Error SignIn DAO => ${_error}`);
            }
        });
    }
};
LoginDao = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [Auth_awt_1.default])
], LoginDao);
exports.default = LoginDao;
//# sourceMappingURL=Login.dao.js.map