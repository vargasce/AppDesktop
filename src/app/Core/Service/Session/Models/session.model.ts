type Usuario = {
    usuario: string;
    nom_ape: string;
    email: string;
}


export class SessionModel{

    public usuario:Usuario;
    public token: string;
    
    constructor( usuario: Usuario, token: string ){
        this.usuario = usuario;
        this.token = token;
    }

}
