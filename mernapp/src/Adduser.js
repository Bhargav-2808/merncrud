import { useState } from "react";
import {addusers} from './api';
import react from "react";


const instialvalue = {
  name : "",
  age : "",
  email : "",
  mobile : ""
}


const Adduser = () => {
  const [formValues, setformValues] = useState(instialvalue);
  const [name, age, email, mobile] = formValues;



  const commonFormSet = (e) => {
    setformValues({ ...formValues, [e.target.name]: [e.target.value] })
  }

  const adduserdetails = async() =>{
    await addusers(formValues);

  }

  return (
    <>
      <form>
        <div>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input type="text" onChange={(e) => commonFormSet(e)} value={name} name="name" />
                </td>
              </tr>
              <tr>
                <td>age</td>
                <td>
                  <input type="text" onChange={(e) => commonFormSet(e)} value={age} name="age" />
                </td>
              </tr>
              <tr>
                <td>email</td>
                <td>
                  <input type="text" onChange={(e) => commonFormSet(e)} value={email} name="email" />
                </td>
              </tr>
              <tr>
                <td>mobile</td>
                <td>
                  <input type="text" onChange={(e) => commonFormSet(e)} value={mobile} name="mobile" />
                </td>
              </tr>
              <button type="submit" onclick= {() =>adduserdetails() }>
              Submit</button>

          </tbody>
        </table>
      </div>
    </form>
    </>
  );
};
export default Adduser;
