import { Injectable } from "@angular/core";
import { ElectronService } from "ngx-electron";
import WeatherResponseApiDTO from "electron/DTO/WeatherDTO/weatherResponseApi.dto";

@Injectable({
    providedIn : "root"
})
export class WeatherForecastService{

    public result!: WeatherResponseApiDTO;

    constructor( 
        private _electronService : ElectronService
    ){
    }

    /** OBTENER DATOS DEL CLIMA EN TIEMPO REAL
     * @Observations  => Realiza una llamada a la api, servicio del tiempo.
     * @return { Promise } => new Promise<WeatherResponseApiDTO>
     */
    public async getStatusTime( path : string ):Promise<WeatherResponseApiDTO>{

        try{
            this.result = await this._electronService.ipcRenderer.sendSync( path );
            return Promise.resolve(this.result);
        }catch( error ){
            return Promise.reject(error);
        }

    }

    /** OBTENER DATOS DE VARIABLES DE ENTORNO TEST
     * @Observations  => Realiza una llamada para verificar que se tomas los datos de var.config
     * @return { Promise } => new Promise<any>
     */
    public async loginUser( path : string, data: any ):Promise<any>{

        try{
            this.result = await this._electronService.ipcRenderer.sendSync( path, data );
            return Promise.resolve(this.result);
        }catch( error ){
            return Promise.reject(error);
        }

    }

    /** New User
     * @Observations  => Realiza nueva carga de usuario al sistema
     * @return { Promise } => new Promise<>
     */
    public async AddUser( path : string, data: any ):Promise<any>{

        try{
            this.result = await this._electronService.ipcRenderer.sendSync( path, data );
            return Promise.resolve(this.result);
        }catch( error ){
            return Promise.reject(error);
        }

    }

}