'use strict'

import ConnectionSqlite from '../../Conection/ConexionSqlite';
import { Service } from 'typedi';
import Login from '../../DTO/Login/Login.dto';
import * as md5 from 'md5';

@Service()
class LoginDao{

    private _conection: any = null;
    constructor(){
        this._conection = ConnectionSqlite.instace;
    }


    public SignIn ( data: Login ):Promise<any>{
        return new Promise( (resolve, reject) =>{

            try{
                this._conection.all(`SELECT * Usuario WHERE usuario= ${data.usuario}, pass= ${md5(data.contrasena)}`, ( error: any, result: any) =>{
                    if( !error ){
                        console.log('login succes');
                        resolve(true);
                    }else{
                        reject(false);
                    }
                });
            }catch( _error ){
                throw _error;
            }

        });
    }

}

export default LoginDao;