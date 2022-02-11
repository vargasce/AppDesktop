'use strict'

//import { Container, Service } from 'typedi';
import * as express from 'express';
import Usuario from '../../Controller/Usuario/Usuario.controller';

const router = express.Router();
router.post('/newUser', Usuario.NewUser );

export default router;