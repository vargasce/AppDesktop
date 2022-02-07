'use strict'

class ConnectionError extends Error {
    
    public name: string;
    public date: Date;
    public title: string;

    constructor(title: string = 'bar', ...params: any ) {

        super( ...params );
    
        if (Error.captureStackTrace) {
          Error.captureStackTrace( this, ConnectionError )
        }
    
        this.name = params;
        this.title = title;
        this.date = new Date()
    }

}

export default ConnectionError;