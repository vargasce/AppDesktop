'use strict'

import sqlite from 'sqlite3';
import ConectDB  from './Connect';
import { Container } from 'typedi';

class ConnectionSqlite{

    private static _instace : sqlite = null;
    private static _con : ConectDB = Container.get( ConectDB );

    constructor(){
    }

    public static get instace():sqlite{
        if( this._instace == null ){
            this._instace = this.getConnection();
        }
        return this._instace;
    }

    private static getConnection():sqlite{
        return this._con.getConection();
    }

}

export default ConnectionSqlite;