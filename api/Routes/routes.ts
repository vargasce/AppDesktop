'use strict'

//import { Container, Service } from 'typedi';
import * as express from 'express';
import Login from '../Controller/Login/login.controler';

const router = express.Router();
router.get('/', (req: any, res: any)=>{ res.status(200).send("Hola Mundo");});
router.get('/life', (req: any, res: any)=>{ res.status(200).send(true);});
router.post('/AuthLogin', Login.AuthLogin );
router.post('/Auth', Login.AuthLogin );

export default router;