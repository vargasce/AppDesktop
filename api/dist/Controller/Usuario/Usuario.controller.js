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
const typedi_1 = require("typedi");
const Usuario_service_1 = require("Services/Usuario/Usuario.service");
const userService = typedi_1.Container.get(Usuario_service_1.default);
const NewUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let data = req.body.data;
    let result = yield userService.AddUser(data);
    return res.status(200).send(result);
});
exports.default = { NewUser };
//# sourceMappingURL=Usuario.controller.js.map