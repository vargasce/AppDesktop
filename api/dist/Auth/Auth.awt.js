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
const jwt = require("jsonwebtoken");
const moment = require("moment");
const UsuarioSession_dto_1 = require("../DTO//Usuario/UsuarioSession.dto");
const config = require('../config');
let AuthJWT = class AuthJWT {
    constructor() {
    }
    CreatedToken(usuario) {
        let payload = {
            check: true,
            obj: { 'usuario': usuario.usuario, 'nom_ape': usuario.nombre + ' ' + usuario.apellido, 'email': usuario.email },
            iat: moment().unix(),
            expiresIn: moment().add(1, 'year').unix()
        };
        const token = jwt.sign(payload, config.TOKEN_SECRET);
        const user_aux = new UsuarioSession_dto_1.default(payload.obj, token);
        return user_aux;
    }
    VerifyToken(token) {
        let next = false;
        jwt.verify(token, config.TOKEN_SECRET, (error, decode) => {
            if (!error) {
                next = true;
            }
        });
        return next;
    }
    DecodeUserSession(token) {
        const usr_aux = jwt.decode(token, { complete: true });
        const usr = usr_aux.payload.obj;
        return usr;
    }
};
AuthJWT = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [])
], AuthJWT);
exports.default = AuthJWT;
//# sourceMappingURL=Auth.awt.js.map