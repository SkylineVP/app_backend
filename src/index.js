const router=require('./routes');
const express=require('express');
const {checkAuthorization}=require('./middlewares/user');
const PORT=process.env.PORT||3000;

const app=express();

app.use(express.json());
app.use(router);

app.listen( PORT, () => console.log( `Example app listening on port ${PORT}!` ) );