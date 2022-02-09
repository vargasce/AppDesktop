'use strict'
import ConectDB  from './Connect';

/** SINGLETON PATTERNS
 * Utiliza la clase Connect.ts y retorna una intacna de la conexion.
 */
class ConnectionSqlite{

    private static _instace : any = null;
    private static _con : ConectDB = new ConectDB();

    constructor(){
    }

    public static get instace():any{
        if( this._instace == null ){
            this._instace = this.getConnection();
        }
        return this._instace;
    }

    private static getConnection():any{
        return this._con.getConection();
    }

}

export default ConnectionSqlite;