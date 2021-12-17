import { getusers, deleteUser } from "./api";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Links from "./Links";
import './Crud.css'
import { Button, Table } from "react-bootstrap";

const Crud = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getuserdata();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getuserdata();
  };

  const getuserdata = async () => {
    const response = await getusers();
    setdata(response.data);
  };

  return (
    <>
      <Links />
      <Table striped bordered hover variant="dark" className="mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age </th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((dataset) => (
            <tr key={dataset._id + dataset.name}>
              <td>{dataset._id}</td>
              <td>{dataset.name}</td>
              <td>{dataset.age}</td>
              <td>{dataset.email}</td>
              <td>{dataset.mobile}</td>
              <td>
                <Button  className = "deleteLink"onClick={() => deleteUserData(dataset._id)}>
                  Delete
                </Button>
              </td>
              <td>
                <Button  className="updateLink"><Link className="updateLink" to={`/edit/${dataset._id}`}>Update</Link> </Button>
               
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default Crud;
