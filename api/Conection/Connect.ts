'use strict'

import { Service } from 'typedi';
import * as path from 'path';
import ConnectionError from '../Error/Connection/Connection.error';
const sqlite = require("sqlite3").verbose();

@Service()
class ConnectDB{

    private _instace : any = null;
    private _dirPath: string = path.join( __dirname, '../baseDB/base.db');

    constructor(){
    }

    public getConection():any{

        try{
            //if( fs.existsSync( this._dirPath )){
            if( true ){

                try {

                    this._instace = new sqlite.Database( this._dirPath , sqlite.OPEN_READWRITE, ( error )=>{
                        if( error ){
                            console.log(`[*]CONEXION DB ERROR => ${error}`);
                            return null;
                        }else{
                            console.log( "[*]CONEXION DB SUCCESS !!!" );
                        } 
                    });                   

                } catch (error) {
                    throw new ConnectionError( 'Error Conexion', `Error al realizar conexion con db : ${error}` );
                }

            }

        }catch( exc ){
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

