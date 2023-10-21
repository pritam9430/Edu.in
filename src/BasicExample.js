import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './Home';
import { NavLink, Link } from 'react-router-dom'

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">P4p_ritam </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" me-auto opt">
            <Nav.Link href='/Home'className='li'>Home</Nav.Link>
            <Nav.Link href='/Survice'className='li'>Survice</Nav.Link>
            <Nav.Link href='/About'className='li'>About</Nav.Link>
            <Nav.Link href='/Contact'className='li'>Contact</Nav.Link>
            {/* <Nav.Link ><Link to="/Home">Home</Link></Nav.Link>
            <Nav.Link > <Link to="/About">About</Link></Nav.Link>
            <Nav.Link > <Link to="/Survice">Survice</Link></Nav.Link> */}
            {/* <div className='links'>
              <Link to="/Home">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/Survice">Survice</Link>
            </div> */}

            {/* <Nav.Link href="#link">Link</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;