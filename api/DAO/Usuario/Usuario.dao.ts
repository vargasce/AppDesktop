import ConnectionSqlite from '../../Conection/ConexionSqlite';
import { Service }      from 'typedi';
import Usuario          from '../../DTO/Usuario/Usuario.dto';
import UsuarioError     from '../../Error/Usuario/Usuario.error';
import * as md5 from 'md5';

@Service()
class UsuarioDAO{

    private _conection: any = null;

    constructor(){
        this._conection = ConnectionSqlite.instace;
    }

    /** ADD USER
     * @Observations => Insertar nuevo usuario a la base.
     * @param { UsuarioDTO } data => datos del usuario.
     * @returns { Primise<boolean> } => TRUE or False.
     */
    public AddUser ( data: Usuario ):Promise<boolean>{
        return new Promise( (resolve, reject) =>{

            try{
                this._conection.all( createSqlStringAddUser( data ), ( error: any, result: any) =>{
                    if( !error ){
                        resolve(true);
                    }else{
                        reject(error);
                    }
                });
            }catch( _error ){
                throw new UsuarioError('Error DAO', `Insert error => ${_error}`);
            }

        });
    }

    /** GET USER
     * @Observations => Obtener usuario a la base.
     * @param { number } id => Identificador del usuario.
     * @returns { Primise<UsuarioDTO> } => TRUE or False.
     */
    public GetUser ( id: number ):Promise<Usuario>{
        return new Promise( (resolve, reject) =>{

            try{
                this._conection.all(`SELECT * FROM Usuario WHERE id = ${id}`, ( error: any, result: any ) =>{
                    if( !error ){
                        let res : Usuario = result;
                        return res;
                    }else{
                        reject(error);
                    }
                });
            }catch( _error ){
                throw new UsuarioError('Error DAO', `GET User error => ${_error}`);               
            }

        });
    }

}

export default UsuarioDAO;

const createSqlStringAddUser = ( data: Usuario ) =>{
    console.log(data);
    let sql = ` INSERT INTO Usuario ( nombre, apellido, usuario, pass, fecha_alta, activo, email, numero )
                VALUES( '${data.nombre}',
                        '${data.apellido}',
                        '${data.usuario}',
                        '${md5(data.pass)}',
                        '${new Date()}',
                        ${data.activo},
                        '${data.email}',
                        '${data.numero}'
                );
`
    return sql;
}