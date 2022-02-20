'use strict'

import { Service } from "typedi";
import LoginDAO from "../../DAO/Login/Login.dao";
import LoginDTO from '../../DTO/Login/login.dto';
import SessionDTO from '../../DTO/Usuario/session.dto';

@Service()
class LoginService {

    constructor(
        private readonly _loginDAO: LoginDAO
    ){

    }

    public async ObtenerVariablesDeEntono():Promise<any>{
        let result = await this._loginDAO.ObtenerVariablesDeEntorno();
        return Promise.resolve( result );
    }

    public async LoginAuth ( data: LoginDTO ):Promise<SessionDTO>{

        try {
            let result = await this._loginDAO.AuthLogin( data );
            return Promise.resolve( result );           
        } catch ( _error ) {
            throw _error;           
        }

    }

}

export default LoginService;