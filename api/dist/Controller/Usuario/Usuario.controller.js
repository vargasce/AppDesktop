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
const Usuario_service_1 = require("../../Services/Usuario/Usuario.service");
class UsuarioController {
    constructor() {
        this._userService = typedi_1.default.get(Usuario_service_1.default);
    }
    AddUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._userService.AddUser(data);
                return Promise.resolve(result);
            }
            catch (_error) {
                throw _error;
            }
        });
    }
}
const userController = new UsuarioController();
const NewUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body;
        let result = yield userController.AddUser(data);
        return res.status(200).send(result);
    }
    catch (_error) {
        return res.status(500).send({ 'error': `Error New User => ${_error}` });
    }
});
exports.default = { NewUser };
//# sourceMappingURL=Usuario.controller.js.map