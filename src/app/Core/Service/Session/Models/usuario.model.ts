export class UsuarioModel{
    constructor(
        public id: string,
        public nombre: string, 
        public apellido: string,
        public usuario: string,
        public pass: string,
        public fecha_alta: string,
        public activo: boolean,
        public email: string,
        public numero: number
    ){

    }
}