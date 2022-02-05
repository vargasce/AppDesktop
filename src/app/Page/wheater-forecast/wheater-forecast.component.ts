import { Component, OnInit } from '@angular/core';
import CoordenadasDTO from 'electron/DTO/WeatherDTO/coordenadas.dto';
import WeatherResponseApiDTO from 'electron/DTO/WeatherDTO/weatherResponseApi.dto';
import { WeatherForecastService } from './Service/weather-forecast.service';

@Component({
  selector: 'app-wheater-forecast',
  templateUrl: './wheater-forecast.component.html',
  styleUrls: ['./wheater-forecast.component.css'],
  providers: [ WeatherForecastService ]
})
export class WeatherForecastComponent implements OnInit {

  public data!: WeatherResponseApiDTO; 

  constructor(
    private _weatherService : WeatherForecastService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.obtenerDatosClima();
  }

  public async obtenerDatosClima (){

    try{
      this.data = await this._weatherService.getStatusTime('get-status-weather');
      console.log(this.data);
      console.log( typeof this.data );
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
