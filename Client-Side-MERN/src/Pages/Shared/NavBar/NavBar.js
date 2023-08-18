import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Login-Register/Hooks/useAuth';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css';

const NavBar = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className="nav-logo fw-bold text-dark" href="#home">One <span className='text-primary'>Stop </span> <span className="text-danger">Shop</span> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-start">
                        <Nav.Link className="link-title" as={Link} to='/home'>HOME</Nav.Link>
                        <Nav.Link className="link-title" as={Link} to='/products'>PRODUCTS</Nav.Link>
                        <Nav.Link className="link-title" as={Link} to='/home'>ROBODOC</Nav.Link>

                        {/* Dropdown menu bar  */}
                        <NavDropdown title="SWAP Products" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to='/products'>Trainer Boards</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/products'>Robotics</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to='/home'>
                                Go Back to Home
                            </NavDropdown.Item>
                        </NavDropdown>


                        {
                            user.email && <Nav.Link className="link-title" as={Link} to='/dashboard'>DASHBOARD</Nav.Link>

                        }
                        {
                            user?.email ?
                                <Button onClick={logOut} className="px-3 user-name rounded-1 py-0 mx-2" variant="light"><i class="fas fa-2x fa-sign-out-alt"></i> </Button> :
                                <Nav.Link className="link-title" as={Link} to='/login'>LOGIN</Nav.Link>

                        }
                        <Navbar.Text className="">
                            <a className=" user-name ms-1" href="#login"><span className="user-name fw-bold"> <i className="far fa-user-circle  me-2"></i>{user.displayName}</span> </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;