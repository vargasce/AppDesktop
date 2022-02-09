'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const multiparty = require("connect-multiparty");
const express = require('express');
const routes = require('./Routes/routes');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(multiparty());
app.use(require('express-useragent').express());
//CONFIGURACION CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//CONFIGURACION MIDDLEWARE
//CONFIGURACION ROUTES
app.use('/api', routes);
module.exports = app;
//# sourceMappingURL=app.js.map