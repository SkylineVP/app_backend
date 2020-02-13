const {Task} = require('../models');
const Controller=require('../utils/Controller');
class TaskController {
    constructor() {
        this.controller=new Controller(Task);
    }

    createTask=async (req,res,next)=>{
      try {
          return res.send(await this.controller.create(req.body));
      }
      catch (e) {
       next(e);
      }
    };
    updateTask=async (req,res,next)=>{
        try {
            return res.send(await this.controller.update(req.params.id,req.body));
        }
        catch (e) {
            next(e);
        }
    };
    getTaskByPk = async (req, res, next) => {
        try {
            res.send( await this.controller.read( req.params.id ) );
        } catch (e) {
            next( e );
        }
    };
    deleteTaskByPk = async (req, res, next) => {
        try {
            res.send( `${await this.controller.delete( req.params.id )}` );
        } catch (e) {
            next( e );
        }
    };
}

module.exports=new TaskController();