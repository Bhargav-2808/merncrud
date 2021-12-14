import react , { useState } from "react";
import { addusers } from "./api";



const initialvalue = {
  name: "",
  age: "",
  email: "",
  mobile: "",
};

  const Adduser = () => {
  const [user, setUser] = useState(initialvalue);
  const {name, age, email, mobile} = user;
  

  const commonFormSet = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onValueChange = async () => {
    await addusers(user);
   
  };

  return (
    <>
      <form>
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
              </button>
    </>
  );
};
export default Adduser;
