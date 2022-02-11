'use strict'

import ConnectionSqlite from '../../Conection/ConexionSqlite';
import AuthJWT from '../../Auth/Auth.awt';
import { Service } from 'typedi';
import UsuarioError from '../../Error/Usuario/Usuario.error';
import Login from '../../DTO/Login/Login.dto';
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


    public SignIn ( data: Login ):Promise<UsuarioSession>{
        return new Promise( (resolve, reject) =>{

            try{
                this._conection.all(`SELECT * Usuario WHERE usuario= ${data.usuario}, pass= ${md5(data.pass)}`, ( error: any, result: any) =>{
                    if( !error ){
                        if( result.length > 0 ){
                            return this._authjwt.CreatedToken( result );       
                        }else{
                            return null;
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