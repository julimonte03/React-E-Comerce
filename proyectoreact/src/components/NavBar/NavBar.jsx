import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css"

function NavBar() {
    return (
        <Navbar expand="lg" className="NavBar bg-body-tertiary}">
            <Container fluid>
                <Navbar.Brand className='nav-title'> <NavLink to={`/`}>La Tiendita</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Item>
                            <NavLink className='nav-title' to="/combos-locos">Combos Locos</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className='nav-title' to="/contacto">Contacto</NavLink>
                        </Nav.Item>
                    </Nav>
                    <CartWidget/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
