'use strict'

import { Service } from 'typedi';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import config = require('../../vars.config.json');
import ClientRequestError from '../../Error/ClientRequest/clientrequest.error';

@Service()
class ClientRequest {

    private readonly configuracion: any = config[process.env.NODE_ENV ?? 'development'];

    constructor(){

    }

    public async request<T>( option: AxiosRequestConfig, data: any, path: string ):Promise<T>{
        return new Promise( ( resolve, reject ) =>{

            axios.post<T>( `${this.configuracion.URL_ENDPOINT}${path}`, data, option )
            .then( ( result: AxiosResponse  )=>{
                let response: T = result.data;
                resolve( response );
            }).catch( (_error: AxiosError) =>{ reject( new ClientRequestError( 'ClientRequestError', `${_error}`) ) });

        });
    }

}

export default ClientRequest;



                /*
               let instance : AxiosInstance = axios.create(options2);

                instance.interceptors.request.use<any>( 
                    ( response: any ) => {
                        console.log(response);
                        resolve(response);
                    },
                    ( _error ) =>{
                        console.log(_error);
                        reject(null);
                    }
                );

                */


                /*
                axios.request<any>({
                    method: 'POST',
                    baseURL: `http://localhost:3000/api/Auth/AuthLogin`,
                    headers: {
                        'Content-Type': 'application/json'                       
                    },
                    data: data
                }).then( ( result: any ) =>{
                        console.log(result)
                        resolve( result );                   
                }).catch( _error =>{
                        console.log(_error);
                        reject(null);
                });
                */