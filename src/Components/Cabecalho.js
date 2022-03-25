import { Link } from "react-router-dom";

import logo from '../Assets/img/logo.png'
import cart from '../Assets/img/cart.svg'
import user from '../Assets/img/user.svg'
import '../Assets/css/estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Button, NavDropdown, Navbar, Nav, Container } from 'react-bootstrap';

function Cabecalho() {
    return (
        <Navbar fixed="top" bg="light" expand="md">
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        <img style={{ height: '100px' }} src={logo}></img>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* hide options */}
                    <Nav className="me-auto align-items-center">
                        <Nav.Link>
                            <Link to="/carrinho_compras">
                                <img style={{ height: '35px' }} src={cart}></img>
                            </Link>
                        </Nav.Link>
                        <NavDropdown title={<img style={{ height: '35px' }} src={user}></img>} id="basic-nav-dropdown">
                            <NavDropdown.Item ><Link to="/cadastro_usuario">Cadastrar Usuario</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Meus Pedidos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>

            </Container>
        </Navbar>



    );
}

export default Cabecalho;
