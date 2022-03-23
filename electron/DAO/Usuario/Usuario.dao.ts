'use strict'

import { Service } from "typedi";
import { AxiosRequestConfig } from "axios";
import ClientRequest from '../ClientRequest/client.request';
import DAOError from '../../Error/DAO/dao.error';
import UsuarioDTO from '../../DTO/Usuario/Usuario.dto';

@Service()
class UsuarioDAO {

    private options: AxiosRequestConfig;

    constructor(
        private readonly _httpClient: ClientRequest
    ){
        this.options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            }
        };
    }

    /** ADD USER
     * @Observations => Realiza alta de nuevo usuario.
     * @param { any } data => datos de nuevo usuario.
     * @returns { Promise<any> }
     */
    public async AddUser( data: UsuarioDTO ):Promise<any>{

        try {
            
            let result : any = await this._httpClient.request<UsuarioDTO>( this.options, data, 'Usuario/NewUser');
            return Promise.resolve( result );

        } catch ( _error ) {
            throw new DAOError('UsuarioDAO', `${_error}` );
        }
    }

}

export default UsuarioDAO;