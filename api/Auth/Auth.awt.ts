'use strict'

import { Service } from 'typedi';
import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';
import Usuario from '../DTO//Usuario/Usuario.dto';
import UsuarioSession from '../DTO//Usuario/UsuarioSession.dto';

const config = require('../config');

@Service()
class AuthJWT{

    constructor(){

    }

    public CreatedToken ( usuario: Usuario ):UsuarioSession{
        let payload ={
            check: true,
            obj:  { 'usuario': usuario.usuario, 'nom_ape': usuario.nombre +' '+usuario.apellido, 'email': usuario.email  },
            iat: moment().unix(),
            expiresIn : moment().add(1, 'year').unix()
        };
        
        const token = jwt.sign( payload, config.TOKEN_SECRET );
        const user_aux = new UsuarioSession( payload.obj , token );

        return user_aux;
    }

    public VerifyToken( token: string ):boolean {
        let next: boolean = false;
        jwt.verify( token, config.TOKEN_SECRET, ( error: any, decode: any ) =>{
            if( !error ){
                next = true;
            }
        });
        return next;
    }

    public DecodeUserSession( token: string ):UsuarioSession{
        const usr_aux = jwt.decode( token, { complete: true });
        const usr: UsuarioSession = usr_aux.payload.obj;
        return usr;
    }

}

export default AuthJWT;
