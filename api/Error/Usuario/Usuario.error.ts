'use strict'

class UsuarioError extends Error {
    
    public name: string;
    public date: Date;
    public title: string;

    constructor(title: string = 'Usuario', ...params: any ) {

        super( ...params );
    
        if (Error.captureStackTrace) {
          Error.captureStackTrace( this, UsuarioError )
        }
    
        this.name = params;
        this.title = title;
        this.date = new Date()
    }

}

export default UsuarioError;