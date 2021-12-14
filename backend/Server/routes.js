import express from 'express';
import { getusers , addusers} from '../Controller/user-controller.js';
const route = express.Router();


route.get("/", getusers
    // status code 200 for OK connection give response too the url usign app.use 
)

route.post("/adduser",addusers)

export default route;