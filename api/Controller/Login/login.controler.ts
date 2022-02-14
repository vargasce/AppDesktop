'use strict'

import { Request, Response, NextFunction } from 'expres';
import 'reflect-metadata';
import LoginDTO from '../../DTO/Login/Login.dto';
import Container from 'typedi';
import LoginService from '../../Services/Login/Login.service';
import UsuarioSession from '../../DTO/Usuario/UsuarioSession.dto';
import UsuarioError from '../../Error/Usuario/Usuario.error';



class LoginController{

    private _loginService: LoginService;

    constructor(){
        this._loginService = Container.get( LoginService );
    }

    public async SignIn( data: LoginDTO ):Promise<UsuarioSession>{
        
        try{
            let result = await this._loginService.SignUser( data );
            return Promise.resolve(result);
        }catch( _error ){
            throw new UsuarioError('Error SignIn controller', `${_error}`);
        }

    }

}

const login = new LoginController();

const AuthLogin = async ( req: Request, res: Response, next: NextFunction ) =>{

    try{
        let data: LoginDTO = req.body;
        let result: UsuarioSession = await login.SignIn( data );
        return res.status(200).send({ 'error' : '', 'ResultSet' : result });
    }catch( _error ){
        return res.status(200).send({ 'error' : `Error Controller => ${_error}`, 'ResultSet' : '' });
    }

}


export default { AuthLogin };
