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
const typedi_1 = require("typedi");
const Login_dao_1 = require("../../DAO/Login/Login.dao");
const Usuario_error_1 = require("../../Error/Usuario/Usuario.error");
let LoginService = class LoginService {
    constructor(_login) {
        this._login = _login;
    }
    /** LOGIN
     * @Observations => Acceso al sistema.
     * @param { LoginDTO } data => Datos del usuario.
     * @returns { Promise<UsuarioSession>}
     */
    SignUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this._login.SignIn(data);
                return result;
            }
            catch (_error) {
                throw new Usuario_error_1.default('Error login serivice', `SignUser => ${_error}`);
            }
        });
    }
};
LoginService = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [Login_dao_1.default])
], LoginService);
exports.default = LoginService;
//# sourceMappingURL=Login.service.js.map