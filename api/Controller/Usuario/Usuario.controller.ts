'use strict'

import { Request, Response, NextFunction } from 'expres';
import UsuarioDTO from 'DTO/Usuario/Usuario.dto';
import { Container }  from 'typedi';
import UsuarioService from 'Services/Usuario/Usuario.service';

const userService = Container.get( UsuarioService );

const NewUser = async ( req: Request, res: Response, next: NextFunction ) =>{
    let data: UsuarioDTO = req.body.data;
    let result = await userService.AddUser( data );
    return res.status(200).send(result);
}


export default { NewUser };