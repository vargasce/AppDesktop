'use strict'

import * as bodyParser from 'body-parser';
import * as multiparty from 'connect-multiparty';
import router from './Routes/Routes';
import routerUser from './Routes/Usuario/routesuser';
import routerTasks from './Routes/Task/routestasks';

const express = require('express');
const app = express();

app.use( bodyParser.urlencoded({ extended : false }));
app.use( bodyParser.json() );
app.use( multiparty() );
app.use( require('express-useragent').express() );

//CONFIGURACION CORS
console.log('[*]CONFIGURACION CORS');
app.use( ( req, res, next ) =>{
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
app.use('/api/Auth', router );
app.use('/api/Usuario', routerUser );
app.use('/api/Task', routerTasks );


module.exports = app;
