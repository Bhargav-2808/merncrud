import axios from 'axios';

const url ="http://localhost:8888/users";

const getusers = async (id) =>{
    id = id || '';
    return  await axios.get(`${url}/${id}`);
}

const addusers = async (user) =>{
    return await axios.post(`${url}/adduser`,user)
}
 
const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`, user)
}
export  {getusers, addusers, deleteUser};
