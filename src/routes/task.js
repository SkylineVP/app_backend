const express=require("express");
const {TaskController}=require('../controllers');

const TaskRouter=express.Router();

TaskRouter.get('/:id',TaskController.getTaskByPk);
TaskRouter.post('',TaskController.createTask);
TaskRouter.patch('/:id',TaskController.updateTask);
TaskRouter.delete('/:id',TaskController.deleteTaskByPk);

module.exports=TaskRouter;