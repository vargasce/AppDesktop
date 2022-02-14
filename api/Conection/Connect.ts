'use strict'

import { Service } from 'typedi';
import * as path from 'path';
import ConnectionError from '../Error/Connection/Connection.error';
console.log("Hasta aca llego")
//const sqlite = require("sqlite3").verbose();
import * as sqlite from 'sqlite3';

@Service()
class ConnectDB{

    private _instace : any = null;
    private _dirPath: string = path.resolve('../baseDB/base.db');

    constructor(){
    }

    public getConection():any{

        try{
            //if( fs.existsSync( this._dirPath )){
            if( true ){
                //this._instace = new sqlite.Database( this._dirPath, sqlite.OPEN_READWRITE, ( error )=>{
                console.log( this._dirPath );
                try {
                    this._instace = new sqlite.Database( "../../baseDB/base.db", sqlite.OPEN_READWRITE, ( error )=>{
                        if( error ){
                            console.log(`Conexion Error : ${error}`);
                            return null;
                        }else{
                            console.log( "Conexion Success!!!" );
                        } 
                    });                   
                } catch (error) {
                    console.log(this._dirPath);
                    console.log(error);
                }

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
