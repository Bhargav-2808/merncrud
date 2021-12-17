import react, { useState, useEffect } from "react";
import Links from "./Links";
import {  editUser } from "./api";
import {Form, Container, Button} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";



const Edituser = () => {
  const { id } = useParams();
  const { register, handleSubmit ,formState: { errors }} = useForm();
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
              {...register("name" ,  { required: true })}
            />
            {errors.name?.type === 'required' && "Name is required"}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Age"
              name="age"
              {...register("age",  { required: true })}
            />
            {errors.age?.type === 'required' && "Age is required"}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              {...register("email",  { required: true } , {pattern : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
            />
            {errors.email?.type === 'required' && "Email is required"}
            {errors.email?.type === 'pattern' && "Enter Email in proper formate"}

          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Mobile-Number"
              name="mobile"
              {...register("mobile",  { required: true } , {pattern: /^\d{10}$/})}
            />
            {errors.mobile?.type === 'required' && "Mobile number is required"}
            {errors.mobile?.type === 'pattern' && "enter 10 digit"}

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
