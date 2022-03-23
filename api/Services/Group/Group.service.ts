'use strict'
import { Service } from 'typedi';
import GroupDAO from '../../DAO/Group/Group.dao';
import GroupDTO from '../../DTO/Group/Group.dto';
import GroupError from '../../Error/Group/group.error';
import ResponseAPIResult from '../../DTO/ApiResponse/ResponseAPIResult.dto';

@Service()
class GroupService {
    
    constructor(
        private readonly _groupService: GroupDAO
    ){}
    
    /** ADD NEW GROUP
    * @Observations => Agragar un nuevo grupo de trabajo.
    * @param { GroupDTO } data => datos del nuevo grupo.
    * @returns { Promise<ResponseAPIResult> }
    **/
    public async AddNewGroup( data: GroupDTO ):Promise<ResponseAPIResult>{

        try{

            const result: ResponseAPIResult = await this._groupService.AddGroup( data );
            return Promise.resolve( result );

        }catch( _error ){
            throw new GroupError( 'Error Service', `Error AddGroup service => ${ _error }` );
        }

    }

    /** UPDATE GROUP
    * @Observations => Actualizar un grupo de trabajo.
    * @param { GroupDTO } data => datos del nuevo grupo.
    * @returns { Promise<ResponseAPIResult> }
    **/
    public async UpdateGroup( data: GroupDTO ):Promise<ResponseAPIResult>{

        try{
            
            const result: ResponseAPIResult = await this._groupService.UpdateGroup( data );
            return Promise.resolve( result );

        }catch( _error ){
            throw new GroupError( 'Error Service', `Error UpdateGroup service => ${ _error }` );
        }

    }

    /** List GROUP
    * @Observations => Lista grupo de trabajo.
    * @returns { Promise<ResponseAPIResult> }
    **/
    public async ListGroup():Promise<ResponseAPIResult>{

        try{
            
            const result: ResponseAPIResult = await this._groupService.ListGroup();
            return Promise.resolve( result );

        }catch( _error ){
            throw new GroupError( 'Error Service', `Error ListGroup service => ${ _error }` );
        }

    }

    /** GET GROUP
    * @Observations => Obtener grupo de trabajo por id.
    * @param { string } id => identificador del grupo
    * @returns { Promise<ResponseAPIResult> }
    **/
    public async GetGroup( id: string ):Promise<ResponseAPIResult>{

        try{
            
            const result: ResponseAPIResult = await this._groupService.GetGroup( id );
            return Promise.resolve( result );

        }catch( _error ){
            throw new GroupError( 'Error Service', `Error GetGroup service => ${ _error }` );
        }

    }


}

export default GroupService;
