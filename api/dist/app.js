'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const multiparty = require("connect-multiparty");
const Routes_1 = require("./Routes/Routes");
const routesuser_1 = require("./Routes/Usuario/routesuser");
const routestasks_1 = require("./Routes/Task/routestasks");
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(multiparty());
app.use(require('express-useragent').express());
//CONFIGURACION CORS
console.log('[*]CONFIGURACION CORS');
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//CONFIGURACION MIDDLEWARE
console.log('[*]CONFIGURACION MIDDLEWARE');
//CONFIGURACION ROUTES
console.log('[*]CONFIGURACION ROUTES');
app.use('/api/Auth', Routes_1.default);
app.use('/api/Usuario', routesuser_1.default);
app.use('/api/Task', routestasks_1.default);
module.exports = app;
//# sourceMappingURL=app.js.map