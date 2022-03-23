'use strict'

import { Request, Response, NextFunction } from 'expres';
import GroupDTO from '../../DTO/Group/Group.dto';
import Container from 'typedi';
import GroupService from '../../Services/Group/Group.service';
import ResponseAPIResult from '../../DTO/ApiResponse/ResponseAPIResult.dto';
import "reflect-metadata";

class GroupController{

    private _groupService: GroupService;

    constructor(){
        this._groupService = Container.get( GroupService );
    }

    public async AddNewGroup( data: GroupDTO ):Promise<ResponseAPIResult>{
        
        try{
            
            const result: ResponseAPIResult = await this._groupService.AddNewGroup( data );
            return Promise.resolve( result );

        }catch( _error ){
            throw _error;
        }

    }

    public async UpdateGroup( data: GroupDTO ):Promise<ResponseAPIResult>{
        
        try{
            
            const result: ResponseAPIResult = await this._groupService.UpdateGroup( data );
            return Promise.resolve( result );

        }catch( _error ){
            throw _error;
        }

    }

    public async GetGroup( id: string ):Promise<ResponseAPIResult>{
        
        try{
            
            const result: ResponseAPIResult = await this._groupService.GetGroup( id );
            return Promise.resolve( result );

        }catch( _error ){
            throw _error;
        }

    }

    public async ListGroup():Promise<ResponseAPIResult>{
        
        try{
            
            const result: ResponseAPIResult = await this._groupService.ListGroup();
            return Promise.resolve( result );

        }catch( _error ){
            throw _error;
        }

    }

}

const groupController = new GroupController();

const NewGroup = async ( req: Request, res: Response, next: NextFunction ) =>{

    try{
        let data: GroupDTO = req.body;
        let result = await groupController.AddNewGroup( data );
        return res.status(200).send(result);
    }catch( _error ){
        return res.status(500).send({'error': `Error New Group => ${_error}`});       
    }

}

const UpdateGroup = async ( req: Request, res: Response, next: NextFunction ) =>{

    try{
        let data: GroupDTO = req.body;
        let result = await groupController.UpdateGroup( data );
        return res.status(200).send(result);
    }catch( _error ){
        return res.status(500).send({'error': `Error Udate Group => ${_error}`});       
    }

}

const GetGroup = async ( req: Request, res: Response, next: NextFunction ) =>{

    try{
        let id: string = req.body.id;
        let result = await groupController.GetGroup( id );
        return res.status(200).send(result);
    }catch( _error ){
        return res.status(500).send({'error': `Error Get Group => ${_error}`});       
    }

}

const ListGroup = async ( req: Request, res: Response, next: NextFunction ) =>{

    try{
        let result = await groupController.ListGroup();
        return res.status(200).send(result);
    }catch( _error ){
        return res.status(500).send({'error': `Error List Group => ${_error}`});       
    }

}


export default { NewGroup, UpdateGroup, GetGroup, ListGroup };
