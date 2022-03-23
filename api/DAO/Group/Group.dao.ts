import ConnectionSqlite from '../../Conection/ConexionSqlite';
import { Service }      from 'typedi';
import GroupError       from '../../Error/Group/group.error';
import GroupDTO         from '../../DTO/Group/Group.dto';
import ResponseAPIResult from '../../DTO/ApiResponse/ResponseAPIResult.dto';

@Service()
class GroupDAO{

    private _conection: any = null;

    constructor(){
        this._conection = ConnectionSqlite.instance;
    }

    /** ADD NEW GROUP
     * @Observations => Agregar nuevo grupo de trabajo.
     * @param { GroupDTO } data -> datos del nuevo grupo.
     * @returns { Promise<ResponseAPIResult> } 
     */
    public AddGroup( data: GroupDTO ):Promise<ResponseAPIResult>{
        return new Promise( ( resolve, reject ) => {

            try {

                this._conection.all( sqlAddNewGroup(data), ( error: any, result: any ) => {

                    console.log( result );
                    if( !error ){
                        resolve( { Error: '', Result: '' } );
                    }else{
                        resolve( { Error: '', Result: {name:'algo'}} );
                    }

                });

            } catch ( _error ) {
                throw new GroupError( 'Error DAO Group', `Insert error => ${ _error }`);
            }

        });
    }

    /** UPDATE GROUP
     *  @Observations => Actualizar datos del gruop list
     *  @param { GroupDTO } data -> datos del grupo a realizar el update.
     *  @returns { Promise<ResponseAPIResult> } 
     */
    public UpdateGroup( data: GroupDTO ):Promise<ResponseAPIResult>{
        return new Promise( ( resolve, reject ) => {

            try {

                this._conection.all( sqlUpdateGroup( data ), ( error: any, result: any) => {
                    
                    if( !error ){
                        resolve( { Error: '', Result: '' } );
                    }else{
                        resolve( { Error: '', Result: '' } );
                    }

                });
                
            } catch ( _error ) {
                throw new GroupError( 'Error DAO Group', `Update error => ${ _error }`);
            }

        });
    }

    /** GET LIST GROUP
     *  @Observations => Obtener lista de grupos activos.
     *  @returns { Promise<ResponseAPIResult> }
     */
    public ListGroup():Promise<ResponseAPIResult>{
        return new Promise( ( resolve ) => {
            
            try{
                
                this._conection.all( sqlListGroup() , ( error: any, result: any ) =>{
                    
                    if( !error ){
                        resolve( { Error: '', Result: '' } );
                    }else{
                        resolve( { Error: '', Result: '' } );
                    }

                });

            }catch( _error ){
                throw new GroupError( 'Error List Group', `Error update DAO => ${ _error }` );
            }

        });
    }   

    /** GET GROUP 
     * @Observations => Obtener Group por id
     * @param { string } id => identificador a buscar/
     * @returns { Promise<ResponseAPIResult> }
     */
    public GetGroup ( id: string ):Promise<ResponseAPIResult>{
        return new Promise( ( resolve ) =>{
            
            try{

                this._conection.all( sqlGetGroup( id ), ( error: any, result: any ) => {
                    
                    if( !error ){
                        resolve( { Error: '', Result: '' } );
                    }else{
                        resolve( { Error: '', Result: '' } );
                    }

                });

            }catch( _error ){
                throw new GroupError( 'Error Get Group', `Error Get DAO => ${ _error }` );
            }

        });
    }

}

export default GroupDAO;

const sqlAddNewGroup = ( data: GroupDTO )=>{
    let sql = `INSERT INTO groupList ( descripcion )
               VALUES ( 
                   '${ data.descripcion }' 
                );`;
    return sql;
};

const sqlUpdateGroup = ( data: GroupDTO ) => {
    let sql = `UPDATE groupList SET descripcion = '${data.descripcion}' ;`;
    return sql;
};

const sqlListGroup = () => {
    let sql = `SELECT * FROM groupList ;`;
    return sql;
};

const sqlGetGroup = ( id: string ) => {
    let sql = `SELECT * FROM groupList WHERE id = ${id} ;`;
    return sql;
};
