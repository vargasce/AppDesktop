'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
//import { Container, Service } from 'typedi';
const express = require("express");
const Usuario_controller_1 = require("../../Controller/Usuario/Usuario.controller");
const router = express.Router();
router.get('/newUser', Usuario_controller_1.default.NewUser);
exports.default = router;
//# sourceMappingURL=routesuser.js.map