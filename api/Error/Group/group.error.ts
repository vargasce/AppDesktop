'use strict'

class GroupError extends Error {
    public name: string;
    public date: Date;
    public title: string;

    constructor( title: string = 'Group', ...params: any ) {
        super( ...params );

        if( Error.captureStackTrace ){
            Error.captureStackTrace( this, GroupError );
        }

        this.name = params;
        this.title = title;
        this.date = new Date();
    }

}

export default GroupError;