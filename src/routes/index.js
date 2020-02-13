const express = require('express');
const userRouter = require('./user');
const taskRouter=require('./task');
const {checkAuthorization}=require('../middlewares/user');
const router = express.Router();

router.use(checkAuthorization);
router.use('/user', userRouter);
router.use('/task',taskRouter);

module.exports=router;