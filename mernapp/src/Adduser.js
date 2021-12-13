import react from "react";

const Adduser = () => {
  return (
    <>
      <form>
        <div>
          <table>
            <tr>
              <td>Name</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>age</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>email</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>mobile</td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </table>
        </div>
      </form>
    </>
  );
};
export default Adduser;
