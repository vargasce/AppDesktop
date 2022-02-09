"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConexionSqlite_1 = require("./ConexionSqlite");
//import { Container, Service } from 'typedi';
//let s = Container.get(ConnectionSqlite);
let d = ConexionSqlite_1.default.instace;
console.log(d);
d.all('SELECT * FROM Usuario ;', (error, result) => {
    console.log(result);
});
//# sourceMappingURL=Prueba.js.map