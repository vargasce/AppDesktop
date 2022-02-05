'use strict'

import { net } from 'electron';
import { Service } from 'typedi';
import WeatherResponseApiDTO from 'DTO/WeatherDTO/weatherResponseApi.dto';

@Service()
class WeatherRepository{

    public result:any;
    public response: WeatherResponseApiDTO;

    constructor(
     ){
     }

    async getStatusTime():Promise<WeatherResponseApiDTO>{
        return new Promise( async ( resolve, reject ) =>{

            try{

                const request = net.request('http://api.openweathermap.org/data/2.5/weather?q=lujan&appid=c6d13d47482d8a41459027050fcaae06');
             
                request.on('response', (response) => {

                    //console.log(`STATUS: ${response.statusCode}`)
                    //console.log(`HEADERS: ${JSON.stringify(response.headers)}`)

                    response.on('data', (chunk) => {
                        //console.log(`BODY: ${chunk}`)
                        resolve(JSON.parse(chunk.toString()));
                    });

                    response.on('end', ( ) => {
                        //console.log('No more data in response.');
                    });


                });

                request.on('finish', ( ) =>{
                    console.log(`Finish`);
                });

                request.on('error', ( error ) =>{
                    reject(error);
                });

                request.end();

            }catch( error ){
                reject( `Error al obtener datos : ${ error }`);
            }

        });

    }

}

export default WeatherRepository;