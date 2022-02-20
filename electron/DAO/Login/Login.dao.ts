'use strict'

import { Service } from 'typedi';
import config = require('../../vars.config.json');
import LoginDTO from '../../DTO/Login/login.dto';
import SessionDTO from '../../DTO/Usuario/session.dto';
import { AxiosRequestConfig } from 'axios';
import ClientRequest from '../ClientRequest/client.request';
import DAOError from '../../Error/DAO/dao.error';

@Service()
class LoginDAO{

    private configuracion: any = config[process.env.NODE_ENV ?? 'development'];
    private request:any;
    private readonly options: AxiosRequestConfig;

    constructor(
        private _httpClient: ClientRequest
    ){

        this.options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'                       
            },
        };

    }

    public async ObtenerVariablesDeEntorno():Promise<any>{
        return new Promise( async ( resolve, reject ) =>{
            resolve( this.configuracion );
        });
    }


    /** LOGIN USER
     * @Observations => Realiza login con endpoint
     * @param { LoginDTO } data => Informacion de usuario para el login.
     * @returns { Promise<LoginDTO> }
     */
    public async AuthLogin ( data: LoginDTO ):Promise<SessionDTO>{

        try {

            let result = await this._httpClient.request<SessionDTO>( this.options, data, 'Auth/AuthLogin');
            return Promise.resolve( result );

        } catch ( _error ) {
            throw new DAOError('LoginDAO', `${_error}`);
        }

    }
}

export default LoginDAO;

