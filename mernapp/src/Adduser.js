import {useForm} from 'react-hook-form'
import react, { useState } from "react";
import Links from "./Links";
import {Form, Button, Container} from 'react-bootstrap';
import { addusers } from "./api";

// const initialvalue = {
//   name: "",
//   age: "",
//   email: "",
//   mobile: "",
// };


const Adduser = () => {
  
  
  const {register , handleSubmit} = useForm();
  const onSubmit = async data =>{
    await addusers(data);
    //console.log(data);
  }

  // const [user, setUser] = useState(initialvalue);
  // const { name, age, email, mobile } = user;
  
  // const commonFormSet = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  // const onValueChange = async () => {
  //   await addusers(user);
  // };

  return (
    <>
      <Links />
      
      <Container className="mt-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" >
          <Form.Label>Full name</Form.Label>
          <Form.Control type="text" placeholder="Enter Full-Name" name="name" {...register("name")}/>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Enter Age" name="age"  {...register("age")}/>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email"  {...register("email")}/>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number" placeholder="Enter Mobile-Number" name="mobile"  {...register("mobile")}/>
        </Form.Group>
        
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
      {/* <form>
        <div>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => commonFormSet(e)}
                    value={name}
                    name="name"
                  />
                </td>
              </tr>
              <tr>
                <td>age</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => commonFormSet(e)}
                    value={age}
                    name="age"
                  />
                </td>
              </tr>
              <tr>
                <td>email</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => commonFormSet(e)}
                    value={email}
                    name="email"
                  />
                </td>
              </tr>
              <tr>
                <td>mobile</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => commonFormSet(e)}
                    value={mobile}
                    name="mobile"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
      <button type="submit" onClick={() => onValueChange()}>
        Submit
      </button> */}
    </>
  );
};
export default Adduser;
