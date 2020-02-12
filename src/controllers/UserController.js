const {User} = require('./models');

class UserController {

    async getUserByPk(req, res, next) {
        try {
            console.log(1);
            const user = await User.findByPk(req.params.id);
            if (user) {
                console.log(user);
                res.send(user);
            }
        } catch (e) {
            console.error(e);
        }
    }

    async updateUser(req, res, next) {
        try {
            const [updatedRowsCount, updatedRows] = await User.update(req.body, {
                where: {
                    id: req.params.id
                },
                returning: true,
            });
            if (updatedRowsCount) {
                const data = updatedRows[0].get();
                delete data.password;
                return res.send(data);
            }
        } catch (e) {
            next(e);
        }
    }

    async createUser(req, res, next) {
        console.log(1);
        const newUser = await User.create(req.body);
        if (newUser) {
            res.send(newUser);
        }
    }

    async deleteUserByPk(req, res, next) {
        try {
            const deletedUser = await User.destroy({

                where: {
                    id: req.params.id
                }
            });
            if (deletedUser) {
                res.send()
            }
        } catch (e) {
            res.send(e)
        }
    }
}

module.exports=new UserController();