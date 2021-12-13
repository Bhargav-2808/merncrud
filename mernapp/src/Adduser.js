import { useState } from "react";
import react from "react";

const Adduser = () => {
    const [name, setname] = useState('');
    const [age, setage] = useState('');
    const [email, setemail] = useState('');
    const [mobile, setmobile] = useState('');


    const submit = (e) =>{
        e.preventDefault();
    }

  return (
    <>
      <form onSubmit={submit}>
        <div>
          <table>
              <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input type="text" value={name} onChange={(e) => setname(e.target.value)}/>
              </td>
            </tr>
            <tr>
              <td>age</td>
              <td>
                <input type="text" value={age} onChange={(e) => setage(e.target.value)}/>
              </td>
            </tr>
            <tr>
              <td>email</td>
              <td>
                <input type="text" value={email} onChange={(e) => setemail(e.target.value)}/>
              </td>
            </tr>
            <tr>
              <td>mobile</td>
              <td>
                <input type="text" value={mobile} onChange={(e) => setmobile(e.target.value)}/>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </form>
    </>
  );
};
export default Adduser;
