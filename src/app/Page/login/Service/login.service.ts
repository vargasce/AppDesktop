import { Injectable } from "@angular/core";
import { ElectronService } from "ngx-electron";
//import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
//import { environment } from '../../../../environments/environment';
//import { Observable } from "rxjs";
import { LoginModel } from "../Models/login.model";
import { UsuarioModel } from "../Models/usuario.model";
import { SessionModel } from "../Models/session.model";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(
        private _electronService: ElectronService
    ){

    }


    public async CreateUser( usuario: UsuarioModel ):Promise<boolean>{

        let result: any;

        try{

            result = await this._electronService.ipcRenderer.sendSync( 'add-user', usuario );
            if( result == true ){
                return Promise.resolve( true );
            }else{
                return Promise.resolve( false );
            }

        }catch( _error ){
            throw _error + result;
        }

    }


    /** LOGIN USER
     * @Observations =>  Realiza login de usuario.
     * @param { LoginModel } login => Datos de inicio de session. 
     * @returns { Promise } new Promise.
     */
    public async LoginUser( login: LoginModel ):Promise<SessionModel>{

        let result: any;

        try{

            result = await this._electronService.ipcRenderer.sendSync( 'login-auth', login );
            console.log( result );
            if( result.error === ''){
                return Promise.resolve( result.ResultSet );
            }else{
                return Promise.reject( result.error );
            }

        }catch( _error ){
            return Promise.reject( _error + result.error );
        }

    }

}