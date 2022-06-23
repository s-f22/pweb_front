import '../Assets/css/estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoxPesquisa from '../Components/BoxPesquisa';
import Cabecalho from '../Components/Cabecalho';
import MenuCentral from '../Components/MenuCentral';
import { Container, Row, Col, Carousel, CardGroup } from 'react-bootstrap';
import foto3 from '../Assets/img/foto3.jpg';
import foto21 from '../Assets/img/foto21.jpg';
import foto31 from '../Assets/img/foto31.jpg';

import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

import CardProdutoPesquisa from '../Components/CardProdutoPesquisa';

function Resultado_Pesquisa() {

  const { termosDaPesquisa } = useParams();

  return (
    <div className='ResultadoPesquisa_Background'>
      <Cabecalho />
      <MenuCentral />
      <Container className='BoxCardsPesquisaContainer'>
            <h1>Resultado da pesquisa: </h1>
            <p>Você buscou por: <u>carl sagan</u></p>
            <CardGroup expand="lg">
                <Container className='PesquisaCardsWrap'  >
                    <CardProdutoPesquisa imagem={foto3} />
                    <CardProdutoPesquisa imagem={foto21} />
                    <CardProdutoPesquisa imagem={foto31} />
                </Container>
            </CardGroup>
        </Container>
    </div>
  );
}

export default Resultado_Pesquisa;
