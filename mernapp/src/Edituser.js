import react, { useState, useEffect } from "react";
import Links from "./Links";
import {  editUser } from "./api";
import {Form, Container, Button} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

// const initialvalue = {
//   name: "",
//   age: "",
//   email: "",
//   mobile: "",
// };

const Edituser = () => {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    await editUser(id, data);
    //console.log(data);
  };
 

  return (
    <>
      <Links />

      <Container className="mt-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Full-Name"
              name="name"
              {...register("name")}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Age"
              name="age"
              {...register("age")}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              {...register("email")}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Mobile-Number"
              name="mobile"
              {...register("mobile")}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default Edituser;
