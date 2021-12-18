import Links from "./Links";
import React, { useState, useEffect } from "react";
import { editUser, getusers } from "./api";
import "./Error-detail.css";
import { Form, Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const Edituser = () => {
 
  const { id } = useParams();
 

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getusers(id);
    console.log(response.data);
      reset(response.data);
    

  };

  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

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
              {...register("name", { required: true })}
            />
            <small className="error-details">
              {errors.name?.type === "required" && "Name is required"}
            </small>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Age"
              name="age"
              ref = {() => register("age", { required: true })}
            />
            <small className="error-details">
              {errors.age?.type === "required" && "Age is required"}
            </small>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              {...register(
                "email",
                { required: true },
                {
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                }
              )}
            />
            <small className="error-details">
              {errors.email?.type === "required" && "Email is required"}
            </small>
            <small className="error-details">
              {errors.email?.type === "pattern" &&
                "Enter Email in proper formate"}
            </small>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Mobile-Number"
              name="mobile"
              {...register(
                "mobile",
                { required: true },
                { pattern: /^\d{10}$/ }
              )}
            />
            <small className="error-details">
              {errors.mobile?.type === "required" &&
                "Mobile number is required"}
            </small>
            <small className="error-details">
              {errors.mobile?.type === "pattern" && "enter 10 digit"}
            </small>
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default Edituser;
