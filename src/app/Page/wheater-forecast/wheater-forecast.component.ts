
import { Component, OnInit } from '@angular/core';
import WeatherResponseApiDTO from 'electron/DTO/WeatherDTO/weatherResponseApi.dto';
import { WeatherForecastService } from './Service/weather-forecast.service';
import * as io from 'socket.io-client';

//import io from 'socket.io-client';
//import CoordenadasDTO from 'electron/DTO/WeatherDTO/coordenadas.dto';

@Component({
  selector: 'app-wheater-forecast',
  templateUrl: './wheater-forecast.component.html',
  styleUrls: ['./wheater-forecast.component.css'],
  providers: [ WeatherForecastService ]
})
export class WeatherForecastComponent implements OnInit {

  public data!: WeatherResponseApiDTO; 
  //private socket: io.Socket;

  constructor(
    private _weatherService : WeatherForecastService
  ) { 
    //this.socket = io.connect('http://localhost');
    //this.socket = io.connect(`http://localhost:${18488}`);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.obtenerDatosClima();
  }

  public async obtenerDatosClima (){

    try{
      this.data = await this._weatherService.getStatusTime('get-status-weather');
    }catch( error ){
      console.log(error);
      return;
    }

  }

  public ConvertTmp( tmp: any ):string{
    try{
      return (tmp - 273.15).toFixed(2).toString();
    }catch( error ){
      return tmp;
    }
  }

  public ConvertMeterToKm( meter: number ):string{
    return ( meter / 100 ).toString();
  }

  public SearchCity( event: any ){
    alert(event.target.value);
  }

}
