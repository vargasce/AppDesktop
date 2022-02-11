'use strict'

import UsuarioSession from 'DTO/Usuario/UsuarioSession.dto';
import { Service }  from 'typedi';
import LoginDAO     from '../../DAO/Login/Login.dao';
import LoginDTO     from '../../DTO/Login/Login.dto';
import UsuarioError from '../../Error/Usuario/Usuario.error';

@Service()
class LoginService {

    constructor(
        private readonly _login : LoginDAO
    ){

    }

    /** LOGIN
     * @Observations => Acceso al sistema.
     * @param { LoginDTO } data => Datos del usuario.
     * @returns { Promise<UsuarioSession>}
     */
    public async SignUser( data: LoginDTO ):Promise<UsuarioSession>{

        try{
            const result: UsuarioSession = await this._login.SignIn( data );
            return result;
        }catch( _error ){
            throw new UsuarioError('Error login serivice', `SignUser => ${_error}`);
        }
    }

}

export default LoginService;