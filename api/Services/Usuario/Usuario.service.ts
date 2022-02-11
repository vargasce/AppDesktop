'use strict'

import { Service }  from 'typedi';
import UsuarioDAO   from '../../DAO/Usuario/Usuario.dao';
import UsuarioDTO   from '../../DTO/Usuario/Usuario.dto';
import UsuarioError from '../../Error/Usuario/Usuario.error';

@Service()
class UsuarioService {

    constructor( 
        private readonly _usuario : UsuarioDAO
    ){

    }

    /** ADD USER
     * @Observations => Insertar nuevo usuario a la base.
     * @param { UsuarioDTO } data => datos del usuario.
     * @returns { Primise<boolean> } => TRUE or False.
     */
    public async AddUser( data: UsuarioDTO ):Promise<boolean>{

        try{
            const result = await this._usuario.AddUser( data );
            return result;
        }catch( _error ){
            throw new UsuarioError('Error Service', `Error Add usuario => ${_error}`);
        }

    }
    
}

export default UsuarioService;