import express from 'express';
import mongoos from 'mongoose';

const app = express(); //express rn=un as function
const PORT  = 8888;

const route = express.Router();

route.get("/", (request , response ) =>{
    response.status(200).json("Hii Connected");

})

app.use('/user' , route);

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