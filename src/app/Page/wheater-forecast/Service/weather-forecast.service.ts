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

}