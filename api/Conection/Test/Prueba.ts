/** PRUEBA TEST DATA BASE
 * @Observations => posicionarse dis/Conection/Test
 *                  ejecutar -> node Prueba.js
 */
import ConnectionSqlite from "../ConexionSqlite";
let d = ConnectionSqlite.instance; 

console.log(d);
d.all('SELECT * FROM Usuario ;', ( error: any, result: any ) =>{
    console.log(result);
});