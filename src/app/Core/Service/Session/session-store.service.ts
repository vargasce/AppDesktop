import { Injectable } from '@angular/core';
import { SessionModel } from './Models/session.model';
import ServiceError from '../../../../../electron/Error/Service/Service.error';

@Injectable({
  providedIn: 'root'
})
export class SessionStoreService {

    private _session: any;

    constructor() { 
        this._session = sessionStorage;
    }

    public guardarSession( session: SessionModel ):any{
        this.setSession( session );
    }

    public ObtenerSession():SessionModel{
        return this.getSession();
    }

    private setSession( session: SessionModel ):any{
        this._session.setItem('session', JSON.stringify( session ) );
    }

    private getSession():SessionModel{
        let session = this._session.getItem('session');
        let sessionModel : SessionModel = JSON.parse( session ? session : '' );
        return sessionModel;
    }

}
