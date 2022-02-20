'use strict'

class DAOError extends Error {
    
    public name: string;
    public date: Date;
    public title: string;

    constructor(title: string = 'DAO', ...params: any ) {

        super( ...params );
    
        if (Error.captureStackTrace) {
          Error.captureStackTrace( this, DAOError )
        }
    
        this.name = params;
        this.title = title;
        this.date = new Date()
    }

}

export default DAOError;