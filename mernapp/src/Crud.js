import { getusers, deleteUser } from "./api";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Links from "./Links";
import "./Crud.css";
import { Button, Col, Container, Row, Table } from "react-bootstrap";


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
      <Container className="mt-5">
        <Row>
          <Col></Col>
          <Col className="d-flex justify-content-end">
            <Button className="">
              <Link className="updateLink" to={"/adduser"}>
                Add New Data
              </Link>{" "}
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Table striped bordered hover variant="dark" className="mt-5">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Age </th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((dataset, index) => (
              <tr key={dataset._id + dataset.name}>
               <td>{index + 1}</td>
                <td>{dataset.name}</td>
                <td>{dataset.age}</td>
                <td>{dataset.email}</td>
                <td>{dataset.mobile}</td>
                <td>
                  <Button
                    className="deleteLink"
                    onClick={() => {

                      confirmAlert({
                        title: 'Confirm to Delete',
                        message: 'Are you sure?',
                        buttons: [
                          {
                            label: 'Yes',
                            onClick: () => deleteUserData(dataset._id)
                          },
                          {
                            label: 'No',
                            onClick: () => {}
                          }
                        ]
                      });
                  
                     
                    
                    }
                    }
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button className="updateLink">
                    <Link className="updateLink" to={`/edit/${dataset._id}`}>
                      Edit
                    </Link>{" "}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
export default Crud;
