'use strict'

import { ipcMain } from 'electron';
import { Service } from 'typedi';
import LoginService from '../../Services/Login/Login.service';
import LoginDTO from '../../DTO/Login/login.dto';

@Service()
class LoginController {

    constructor(
        private readonly _loginService: LoginService
    ) {
        
    }

    public async ObtenerVariablesDeEntorno():Promise<any>{
        let result = await this._loginService.ObtenerVariablesDeEntono();
        return Promise.resolve( result );
    }

    public InitController (){
        this.initEvents();
    }

    private initEvents(){
        this.Login();
    }

    private Login(){

        ipcMain.on('login-auth', async ( event: any, data ) => {

            try{
                event.returnValue = await this._loginService.LoginAuth( data );
            }catch( err ){
                event.returnValue = err;
            }
            
        });

    }


}

export default LoginController;