"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** PRUEBA TEST DATA BASE
 * @Observations => posicionarse dis/Conection/Test
 *                  ejecutar -> node Prueba.js
 */
const ConexionSqlite_1 = require("../ConexionSqlite");
let d = ConexionSqlite_1.default.instance;
console.log(d);
d.all('SELECT * FROM Usuario ;', (error, result) => {
    console.log(result);
});
//# sourceMappingURL=Prueba.js.map