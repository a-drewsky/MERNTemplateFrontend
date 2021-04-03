import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import LogoutButton from '../auth/LogoutButton';

import { Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {

   const { loggedIn } = useContext(AuthContext);

   return (
      <Navbar bg='light' expand='lg'>
         <Navbar.Brand><Link to="/" className='text-secondary'><h4>Template</h4></Link></Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='w-100'>
               {loggedIn === false && (
                  <>
                     <Nav.Link as={Link} to="/register"> Register </Nav.Link>
                     <Nav.Link as={Link} to="/login"> Login </Nav.Link>
                  </>
               )}

               {loggedIn === true && (
                  <>
                     <Nav.Link as={Link} to="/content"> Content </Nav.Link>
                     <Nav.Link className='ml-lg-auto'> <LogoutButton /> </Nav.Link>
                  </>
               )}
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   )
}

export default Navigation
