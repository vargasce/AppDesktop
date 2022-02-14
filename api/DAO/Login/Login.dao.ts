'use strict'

import ConnectionSqlite from '../../Conection/ConexionSqlite';
import AuthJWT from '../../Auth/Auth.awt';
import { Service } from 'typedi';
import UsuarioError from '../../Error/Usuario/Usuario.error';
import LoginDTO from '../../DTO/Login/Login.dto';
import UsuarioSession from '../../DTO/Usuario/UsuarioSession.dto';

import * as md5 from 'md5';

@Service()
class LoginDao{

    private _conection: any = null;


    constructor(
        private _authjwt: AuthJWT
    ){
        this._conection = ConnectionSqlite.instace;
    }


    public SignIn ( data: LoginDTO ):Promise<UsuarioSession>{
        return new Promise( (resolve, reject) =>{

            try{
    
                let sql = `SELECT * FROM Usuario WHERE usuario= '${data.usuario}' AND pass= '${md5(data.pass)}';`;

                this._conection.all( sql , ( error: any, result: any) =>{
                    if( !error ){
                        if( result.length == 1 ){
                            resolve( this._authjwt.CreatedToken( result[0] ) );
                        }else{
                            resolve(null);
                        }
                    }else{
                        reject(error);
                    }
                });
            }catch( _error ){
                throw new UsuarioError('Error Login', `Error SignIn => ${_error}`);
            }

        });
    }

}

export default LoginDao;
