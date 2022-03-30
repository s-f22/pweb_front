
import foto3 from '../Assets/img/foto3.jpg';
import foto21 from '../Assets/img/foto21.jpg';
import foto31 from '../Assets/img/foto31.jpg';


import '../Assets/css/estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, CardGroup, Row } from 'react-bootstrap';

import CardProdutoPesquisa from '../Components/CardProdutoPesquisa';

// import { useState, useEffect } from "react";




function BoxCardsPesquisa() {

    // const [listaFotos, setlistaFotos] = useState([]);

    return (
        <Container className='BoxCardsPesquisaContainer'>
            <h1>Resultado da pesquisa: </h1>
            <p>Você buscou por: Carl Sagan</p>
            <CardGroup expand="lg">
                <Container className='PesquisaCardsWrap'  >

                    <CardProdutoPesquisa imagem={foto3} />
                    <CardProdutoPesquisa imagem={foto21} />
                    <CardProdutoPesquisa imagem={foto31} />
                </Container>
            </CardGroup>
            </Container>


    );
}

export default BoxCardsPesquisa;