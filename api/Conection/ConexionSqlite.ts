'use strict'
import ConectDB  from './Connect';

/** SINGLETON PATTERNS
 * Utiliza la clase Connect.ts y retorna una intacna de la conexion.
 */
class ConnectionSqlite{

    private static _instance : any = null;
    private static _con : ConectDB = new ConectDB();

    constructor(){
    }

    public static get instance():any{
        if( this._instance == null ){
            this._instance = this.getConnection();
        }
        return this._instance;
    }

    private static getConnection():any{
        return this._con.getConection();
    }

}

export default ConnectionSqlite;