'use strict'

import * as express from 'express';

const router = express.Router();

router.post('/', ()=>{
    console.log('Routes index');
});

module.exports = router;