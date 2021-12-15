import {getusers , deleteUser} from "./api";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Crud = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {
        getuserdata();
    }, [])

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getuserdata();
    }


    const getuserdata = async () => {

        const response = await getusers();
        setdata(response.data);
    }

    return (
        <>
            <div>
                <table border="1">
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>Name</td>
                            <td> Age </td>
                            <td> email</td>
                            <td>mobile </td>
                        </tr>


                        { 
                            data?.map(dataset => 
                                <tr key={dataset._id + dataset.name}>
                                    <td>{dataset._id}</td>
                                    <td>{dataset.name}</td>
                                    <td>{dataset.age}</td>
                                    <td>{dataset.email}</td>
                                    <td>{dataset.mobile}</td>
                                    <td><button onClick={() => deleteUserData(dataset._id)}> delete</button></td>
                                    <td><Link  to={`/edit/${dataset._id}`} >update</Link></td>
                                </tr>
                            )

                        }
                    </tbody>
                </table>
            </div>



        </>
    );
}
export default Crud;