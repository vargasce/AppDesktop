'use strict'

class ServiceError extends Error {
    
    public name: string;
    public date: Date;
    public title: string;

    constructor(title: string = 'Service', ...params: any ) {

        super( ...params );
    
        if (Error.captureStackTrace) {
          Error.captureStackTrace( this, ServiceError )
        }
    
        this.name = params;
        this.title = title;
        this.date = new Date()
    }

}

export default ServiceError;