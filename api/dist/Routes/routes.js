'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
//import { Container, Service } from 'typedi';
const express = require("express");
const login_controler_1 = require("../Controller/Login/login.controler");
const router = express.Router();
router.get('/', (req, res) => { res.status(200).send("Hola Mundo"); });
router.get('/life', (req, res) => { res.status(200).send(true); });
router.post('/AuthLogin', login_controler_1.default.AuthLogin);
router.post('/Auth', login_controler_1.default.AuthLogin);
exports.default = router;
//# sourceMappingURL=Routes.js.map