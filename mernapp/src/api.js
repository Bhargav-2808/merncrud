import axios from 'axios';

const url ="http://localhost:3003/users";

const getusers = async () =>{
    return  await axios.get(url);
}

const addusers = async (user) =>{
    return await axios.post(url,user)
}

export  {getusers, addusers};
