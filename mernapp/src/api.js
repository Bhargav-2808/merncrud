import axios from 'axios';

const url ="http://localhost:3003/users";

const getusers = async (id) =>{
    id = id || '';
    return  await axios.get(`${url}/${id}`);
}

const addusers = async (user) =>{
    return await axios.post(url,user)
}
 
const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`, user)
}
export  {getusers, addusers, deleteUser};
