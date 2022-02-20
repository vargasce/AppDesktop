'use strict'

class ClientRequestError extends Error {
    
    public name: string;
    public date: Date;
    public title: string;

    constructor(title: string = 'ClientRequestError', ...params: any ) {

        super( ...params );
    
        if (Error.captureStackTrace) {
          Error.captureStackTrace( this, ClientRequestError )
        }
    
        this.name = params;
        this.title = title;
        this.date = new Date()
    }

}

export default ClientRequestError;