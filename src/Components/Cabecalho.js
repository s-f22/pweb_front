import { Link } from "react-router-dom";

import logo from '../Assets/img/Books-logos/Books-logos_transparent.png'
import { toggleMenu } from '../Assets/js/dinamics.js'
import cart from '../Assets/img/cart.svg'
import user from '../Assets/img/user.svg'
import locale from '../Assets/img/locale.svg'
import '../Assets/css/estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, NavDropdown, Navbar, Nav, Container } from 'react-bootstrap';

function Cabecalho() {

    const btnMobile = document.getElementById('btn_mobile');

    return (

        // <Container navbar>

        <header id="header">
            <Link to="/"> <img id="logo" src={logo} alt="" /> </Link>
            <Form className="d-flex Cabecalho_HeaderBusca">
                <FormControl
                    type="search"
                    placeholder="Digite o nome do livro, ou autor"
                    className="me-2"
                    aria-label="Search"
                />
                <button id="Cabecalho_BotaoHover" className="Cabecalho_Botao">Pesquisar</button>
            </Form>
            <div className="Cabecalho_IconsDiv">
                <NavDropdown  title={<img className="Cabecalho_SVG" src={locale}></img>} id="basic-nav-dropdown">
                    <NavDropdown.Item className="Cabecalho_MenuSuspenso" ><Link to="/cadastro_usuario">Nossa loja</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">Ver no mapa</NavDropdown.Item>
                </NavDropdown>
                <nav className="Cabecalho_Nav" id="nav">
                    <button onClick={() => toggleMenu()} id="btn_mobile">Menu
                        <span id="hamburger"></span>
                    </button>
                    <ul className="Cabecalho_Corretor" id="menu">
                        <div className="Cabecalho_Links">
                            <li><Link to="/carrinho_compras">Pedido<img className="Cabecalho_SVG" src={cart}></img></Link></li>
                            
                            <li><Link to="/cadastro_usuario">Minha conta<img className="Cabecalho_SVG" src={user}></img></Link></li>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
        // </Container>

    );
}

export default Cabecalho;
