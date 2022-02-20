'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Connect_1 = require("./Connect");
/** SINGLETON PATTERNS
 * Utiliza la clase Connect.ts y retorna una intacna de la conexion.
 */
class ConnectionSqlite {
    constructor() {
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = this.getConnection();
        }
        return this._instance;
    }
    static getConnection() {
        return this._con.getConection();
    }
}
ConnectionSqlite._instance = null;
ConnectionSqlite._con = new Connect_1.default();
exports.default = ConnectionSqlite;
//# sourceMappingURL=ConexionSqlite.js.map