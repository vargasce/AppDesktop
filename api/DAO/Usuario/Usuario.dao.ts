import ConnectionSqlite from '../../Conection/ConexionSqlite';
import { Service } from 'typedi';
import Usuario from '../../DTO/Usuario/Usuario.dto';
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
    public AddUser ( data: Usuario ):Promise<any>{
        return new Promise( (resolve, reject) =>{

            try{
                this._conection.all( createSqlStringAddUser( data ), ( error: any, result: any) =>{
                    if( !error ){
                        console.log('Add User Succes!! ');
                        resolve(true);
                    }else{
                        reject(false);
                    }
                });
            }catch( _error ){
                throw _error;
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