'use strict'

import { ipcMain } from 'electron';
import { Service } from 'typedi';
import UsuarioService from '../../Services/Usuario/Usuario.service';

@Service()
class UsuarioController {

    constructor(
        private readonly _usuarioService: UsuarioService
    ) {
        
    }

    public InitController (){
        this.initEvents();
    }

    private initEvents(){
        this.AddUser();
    }

    private AddUser(){

        ipcMain.on('add-user', async ( event: any, data ) => {

            try{
                event.returnValue = await this._usuarioService.AddUser( data );
            }catch( err ){
                event.returnValue = err;
            }
            
        });

    }


}

export default UsuarioController;