'use strict'

import { Request, Response, NextFunction } from 'expres';


const AuthLogin = ( req: Request, res: Response, next: NextFunction ) =>{
    return res.status(200).send('Login Succes');
}


export default { AuthLogin };