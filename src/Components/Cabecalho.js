import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import logo from '../Assets/img/Books-logos/Books-logos_transparent.png'
import { toggleMenu } from '../Assets/js/dinamics.js'
import cart from '../Assets/img/cart.svg'
//import user from '../Assets/img/user.svg'
import locale from '../Assets/img/locale.svg'
import '../Assets/css/estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, NavDropdown, Button, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Cabecalho() {
    const navigate = useNavigate();
    const [termosDaPesquisa, setTermosDaPesquisa] = useState('');

    const btnMobile = document.getElementById('btn_mobile');
    var LS = localStorage.getItem('usuario-login')


    function Logout() {
        localStorage.removeItem('usuario-login');
        navigate('/cadastro_usuario');
    }




    return (

        // <Container navbar>

        <header id="header">
            <Link to="/"> <img id="logo" src={logo} alt="" /> </Link>
            <Form onSubmit={termosDaPesquisa} className="d-flex Cabecalho_HeaderBusca">
                <FormControl
                    type="search"
                    placeholder="Digite o título do livro"
                    className="me-2"
                    aria-label="Search"
                    value={termosDaPesquisa}
                    onChange={(evt) => setTermosDaPesquisa(evt.target.value)}
                    required
                />
                <Link to={"/resultado_pesquisa/" + termosDaPesquisa} ><Button type="submit" >Pesquisar</Button></Link>

            </Form>
            <div className="Cabecalho_IconsDiv">
                <NavDropdown title={<img className="Cabecalho_SVG" src={locale}></img>} id="basic-nav-dropdown">
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

                            
                            {
                                (LS === null)
                                ?
                                <li><Link to="/cadastro_usuario">Pedido<img className="Cabecalho_SVG" src={cart}></img></Link></li>
                                :
                                <li><Link to="/carrinho_compras">Pedido<img className="Cabecalho_SVG" src={cart}></img></Link></li>
                            }


                            {
                                (LS === null)
                                    ?
                                    <li>
                                        <Link to="/cadastro_usuario">Acessar conta<img className="Cabecalho_FotoPerfil" src={require('../Assets/img/usuarios/userPadrao.png')}></img>
                                        </Link>
                                    </li>
                                    :
                                    <li onClick={Logout}>
                                        <Link to="/cadastro_usuario">Sair<img className="Cabecalho_FotoPerfil" src={require('../Assets/img/usuarios/' + jwtDecode(localStorage.getItem('usuario-login')).jti + '.jpg')}></img>
                                        </Link>
                                    </li>
                            }

                        </div>
                    </ul>
                </nav>
            </div>
        </header>
        // </Container>

    );
}

export default Cabecalho;
