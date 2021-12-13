import {getusers} from "./api";
import React, { useState, useEffect } from 'react';

const Crud = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {
        getuserdata();
    }, [])

    const getuserdata = async () => {

        const response = await getusers();
        console.log(response?.data);

        setdata(null);
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


                        { data?.map(dataset => 
                                <tr key={dataset.id + dataset.name}>
                                    <td>{dataset.id}</td>
                                    <td>{dataset.name}</td>
                                    <td>{dataset.age}</td>
                                    <td>{dataset.email}</td>
                                    <td>{dataset.mobile}</td>
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