import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

function Contact(){
  

    return (<>
      <Navbar bg="white" expand="lg" className="others_nav">
      <Container fluid>
      <Navbar.Brand  className="brand-style me-auto"><NavLink to='/home'>BAIDYA SAHA</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto others_navlink ">
            <Nav.Link className=" navbar1_link fs-5"><NavLink to='/home'>Home</NavLink></Nav.Link>
            
            <NavDropdown title="Teaching" id="basic-nav-dropdown2" className="navbar1_link ">
              <NavDropdown.Item className='fs-5'><NavLink to='/philosophy'>Philosophy</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='fs-5'><NavLink to='/pgcourses'>PG Courses</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='fs-5'><NavLink to='/ugcourses'>UG Courses</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='fs-5'><NavLink to='/supervision'>Supervision</NavLink></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Research Highlights" id="basic-nav-dropdown2" className="navbar1_link ">
              <NavDropdown.Item className='fs-5'><NavLink to='/interest'>Interests</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='fs-5'><NavLink to='/blog'>Publications</NavLink></NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link className="hover-shadow navbar1_link fs-5"><NavLink to='/admin'>Administration</NavLink></Nav.Link>
            <Nav.Link className="hover-shadow navbar1_link fs-5 "><NavLink to='/awards'>Awards</NavLink></Nav.Link>
            <Nav.Link className="hover-shadow navbar1_link fs-5 "><NavLink to='/others'>Others</NavLink></Nav.Link>
            <Nav.Link className="hover-shadow navbar1_link fs-5"><NavLink to='/contact'>Contact Us</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


{/*----------------------------------------Contact Header ends--------------------------------------------*/}    

<div class="contact_bg container-fluid">
<div class="login-box container-sm  mx-auto">
        <h2>Contact Us</h2>
        <form className="container-sm">
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input type="email" name="" required="" />
            <label>Email id</label>
          </div>
          <div class="user-box">
            <input type="textbox" name="" required="" size="250"/>
            <label>Message</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
    </div>
</div>

<Card.Footer className="text-center bg-white rounded-0 border-top pt-3 pb-2 fs-5 text-secondary fw-normal others_card">Copyright &copy; 2022</Card.Footer> 
      </>);
}

export default Contact;