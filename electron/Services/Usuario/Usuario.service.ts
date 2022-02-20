'use strict'

import { Service } from "typedi";
import UsuarioDAO from '../../DAO/Usuario/usuario.dao';
import UsuarioDTO from '../../DTO/Usuario/Usuario.dto';
import ServiceError from '../../Error/Service/Service.error';

@Service()
class UsuarioService {

    constructor(
        private readonly _usuarioDAO: UsuarioDAO
    ){

    }

    /** ADD USER 
     * @Observations => Agregar un nuevo usaurio.
     * @param { UsuarioDTO } data => Datos de nuevo usuario.
     * @return { Promise<UsuarioDTO> } 
     */
    public async AddUser( data: UsuarioDTO ):Promise<UsuarioDTO>{
        
        try {
            let result = await this._usuarioDAO.AddUser( data );
            return Promise.resolve( result );
        } catch ( _error ) {
            throw new ServiceError('UsuarioService', `${_error}`);
        }
    }
}

export default UsuarioService;