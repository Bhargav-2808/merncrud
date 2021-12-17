import { Link } from "react-router-dom";
import './Links.css'
import { Navbar , Container , Nav}from 'react-bootstrap'

const Links = () => {
  return (
    <>
      
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Link className="link" to="/">Data</Link>
              <Link className="link" to="/adduser">Adduser</Link>
            </Nav>
          </Container>
        </Navbar>
        
      
    </>
  );
};
export default Links;
