import express from 'express';
import { getusers , addusers, editUser, deleteusers,getUserById} from '../Controller/user-controller.js';
const route = express.Router();


route.get("/", getusers)
route.post("/adduser",addusers)
route.get('/:id', getUserById);
route.put("/:id",editUser)
route.delete("/:id",deleteusers)


export default route;