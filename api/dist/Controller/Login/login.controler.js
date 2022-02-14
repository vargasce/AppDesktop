'use strict';
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
require("reflect-metadata");
const typedi_1 = require("typedi");
const Login_service_1 = require("../../Services/Login/Login.service");
const Usuario_error_1 = require("../../Error/Usuario/Usuario.error");
class LoginController {
    constructor() {
        this._loginService = typedi_1.default.get(Login_service_1.default);
    }
    SignIn(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._loginService.SignUser(data);
                return Promise.resolve(result);
            }
            catch (_error) {
                throw new Usuario_error_1.default('Error SignIn controller', `${_error}`);
            }
        });
    }
}
const login = new LoginController();
const AuthLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body;
        let result = yield login.SignIn(data);
        return res.status(200).send({ 'error': '', 'ResultSet': result });
    }
    catch (_error) {
        return res.status(200).send({ 'error': `Error Controller => ${_error}`, 'ResultSet': '' });
    }
});
exports.default = { AuthLogin };
//# sourceMappingURL=login.controler.js.map