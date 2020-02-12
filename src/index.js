const UserController=require("./controllers/UserController")
const express=require('express');
const PORT=process.env.PORT||3000;

const app=express();

app.use(express.json());


app.get('/user/:id',UserController.getUserByPk);
app.post('/user',UserController.createUser);
app.patch('/user/:id',UserController.updateUser);
app.delete('/user/:id',UserController.deleteUserByPk);

app.listen( PORT, () => console.log( `Example app listening on port ${PORT}!` ) );