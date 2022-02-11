'use strict'

import { Request, Response, NextFunction } from 'expres';
import "reflect-metadata";
import UsuarioDTO from 'DTO/Usuario/Usuario.dto';
import Container  from 'typedi';
import UsuarioService from '../../Services/Usuario/Usuario.service';

class UsuarioController{

    private _userService: UsuarioService;

    constructor(){
        this._userService = Container.get( UsuarioService );
    }

    public async AddUser( data: UsuarioDTO ):Promise<boolean>{

        try{
            let result = await this._userService.AddUser( data );
            return Promise.resolve( result );
        }catch( _error ){
            throw _error;
        }
    }

}

const userController = new UsuarioController();

const NewUser = async ( req: Request, res: Response, next: NextFunction ) =>{
    let data: UsuarioDTO = req.body;
    let result = await userController.AddUser( data );
    return res.status(200).send(true);
}


export default { NewUser };