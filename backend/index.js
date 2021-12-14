import express from 'express';
import mongoos from 'mongoose';
import route  from './Server/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express(); //express rn=un as function
const PORT  = 8888;


app.use('/users' , route)  // to use the route
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))


const URL = "mongodb+srv://crud.vfh3a.mongodb.net/CRUD?retryWrites=true&w=majority";
mongoos.connect(URL , {auth: {username: "bhargav2808", password: "Bhargav#2001"}}, {useNewUrlParser:true , useUnifiedTopology: true , useFindAndModify: false} ).then(

    app.listen( PORT , () =>{
        // litsen take two argument one is port number and second is callback to display.s
        console.log("app s running ");
    })
).catch( e =>{
    console.log( " Error is : ", e.message);
}

)