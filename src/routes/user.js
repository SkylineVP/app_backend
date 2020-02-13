const express=require("express");
const {UserController}=require('../controllers');

const userRouter=express.Router();

userRouter.get('/:id',UserController.getUserByPk);
userRouter.post('',UserController.createUser);
userRouter.patch('/:id',UserController.updateUser);
userRouter.delete('/:id',UserController.deleteUserByPk);

module.exports=userRouter;