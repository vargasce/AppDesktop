import ConnectionSqlite from "./ConexionSqlite";
//import { Container, Service } from 'typedi';
//let s = Container.get(ConnectionSqlite);

let d = ConnectionSqlite.instace; 

console.log(d);
d.all('SELECT * FROM Usuario ;', ( error: any, result: any ) =>{
    console.log(result);
});