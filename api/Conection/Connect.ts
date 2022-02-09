'use strict'

import { Service } from 'typedi';
const sqlite = require("sqlite3").verbose();
//import sqlite from 'sqlite3';
import * as path from 'path';
//import * as fs from 'fs';
import ConnectionError from '../Error/Connection/Connection.error';

@Service()
class ConnectDB{

    private _instace : any = null;
    private _dirPath: string = path.join( __dirname,'../baseDB/base.db');

    constructor(){
    }

    public getConection():any{

        try{
            console.log( this._dirPath );
            //if( fs.existsSync( this._dirPath )){
            if( true ){
                this._instace = new sqlite.Database( this._dirPath, sqlite.OPEN_READWRITE, ( error )=>{
                    if( error ){
                        console.log(`Conexion Error : ${error}`);
                        return null;
                    }else{
                        console.log( "Conexion Success!!!" );
                    } 
                });
            }

        }catch( exc ){
            console.log( exc );
            throw new ConnectionError( 'Error Conexion', `Error al realizar conexion con db : ${exc}` );
        }

        return this._instace;
    }

    public closeConection():void{
        if( this._instace != null ){
            this._instace.close();
        }
    }

}

export default ConnectDB;