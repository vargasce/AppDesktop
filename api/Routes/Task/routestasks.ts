'use strict'

import * as express from 'express';
import Group from '../../Controller/Group/Group.controller';

const router = express.Router();

router.post('/GetGroup/:id', Group.GetGroup );
router.post('/ListGroup', Group.ListGroup );
router.post('/UpdateGroup', Group.UpdateGroup );
router.post('/NewGroup', Group.NewGroup );

export default router;
