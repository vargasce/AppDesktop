'use strict'

import { Service } from 'typedi';
import sqlite from 'sqlite3';
import * as path from 'path';
import * as fs from 'fs';
import ConnectionError from '../Error/Connection/Connection.error';

@Service()
class ConnectDB{

    private static _instace : sqlite = null;
    private static _dirPath: string = path.join( __dirname,'../baseDB/base.db');

    constructor(){
    }

    public static getConection():sqlite{

        try{

            if( fs.existsSync( this._dirPath )){
                this._instace = new sqlite.Database( this._dirPath, sqlite.OPEN_READWRITE, ( error )=>{
                    if( !error ) return null;
                });
            }

        }catch( exc ){
            console.log( exc );
            throw new ConnectionError( 'Error Conexion', `Error al realizar conexion con db : ${exc}` );
        }

        return this._instace;
    }

    public static closeConection():void{
        if( this._instace != null ){
            this._instace.close();
        }
    }

}

export default ConnectDB;