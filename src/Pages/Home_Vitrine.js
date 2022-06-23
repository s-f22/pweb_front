import React, { useState, useEffect } from "react";
import axios from 'axios';

import oferta1 from '../Assets/img/oferta1.jpg'
import oferta3 from '../Assets/img/oferta3.jpg'
import oferta6 from '../Assets/img/oferta6.jpg'


import '../Assets/css/estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Cabecalho from '../Components/Cabecalho';
import MenuCentral from '../Components/MenuCentral';
import DetalheProduto from "./DetalheProduto";
import { Container, Carousel, Card, CardGroup } from 'react-bootstrap';

import { Link, useParams } from "react-router-dom";

//import CardProduto from '../Components/CardProduto';

import foto1 from '../Assets/img/produtos/100100100.jpg';
import foto2 from '../Assets/img/foto2.jpg';
import foto3 from '../Assets/img/foto3.jpg';
import foto4 from '../Assets/img/foto4.jpg';
import foto5 from '../Assets/img/foto5.jpg';
import foto6 from '../Assets/img/foto6.jpg';
import foto7 from '../Assets/img/foto7.jpg';
import foto8 from '../Assets/img/foto8.jpg';
import foto9 from '../Assets/img/foto9.jpg';
import foto10 from '../Assets/img/foto10.jpg';
import foto11 from '../Assets/img/foto11.jpg';
import foto12 from '../Assets/img/foto12.jpg';
import foto13 from '../Assets/img/foto13.jpg';
import foto14 from '../Assets/img/foto14.jpg';
import foto15 from '../Assets/img/foto15.jpg';
import foto16 from '../Assets/img/foto16.jpg';
import foto17 from '../Assets/img/foto17.jpg';
import foto18 from '../Assets/img/foto18.jpg';
import foto19 from '../Assets/img/foto19.jpg';
import foto20 from '../Assets/img/foto20.jpg';
import foto21 from '../Assets/img/foto21.jpg';
import foto22 from '../Assets/img/foto22.jpg';
import foto23 from '../Assets/img/foto23.jpg';
import foto24 from '../Assets/img/foto24.jpg';
import foto25 from '../Assets/img/foto25.jpg';
import foto26 from '../Assets/img/foto26.jpg';
import foto27 from '../Assets/img/foto27.jpg';
import foto28 from '../Assets/img/foto28.jpg';
import foto29 from '../Assets/img/foto29.jpg';
import foto30 from '../Assets/img/foto30.jpg';
import foto31 from '../Assets/img/foto31.jpg';
import foto32 from '../Assets/img/foto32.jpg';

export default function Home_Vitrine() {

  const [listaLivros, setListaLivros] = useState([]);
  let { id } = useParams();

  function CarregarLivros() {

    axios
      ('http://localhost:5000/api/Livros',
      // {
      //     headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-login') }
      // }
    )
      .then(response => {
        if (response.status === 200) {
          setListaLivros(response.data)
        }
      })
      .catch(erro => console.log(erro));
    //console.log(listaLivros);
  }


  useEffect(() => {
    CarregarLivros()
    return (
      setListaLivros([])
    )
  }, []);



  function CaixaCards() {
    //console.log(listaLivros);
    return (
      <CardGroup expand="lg">
        <Container fluid className='CardsWrap'  >
          {

            listaLivros.map((livro) => {
              return (
                <Card className='CardProduto_Textos' style={{ "width": '10rem' }}>
                  <Link to={"/detalhe_produto/" + livro.idLivro.toString()} ><Card.Img variant="top" src={require('../Assets/img/produtos/' + livro.idLivro.toString() + '.jpg')} /></Link>
                  <Card.Body>
                    <p className='CarProduto_Preco'>R${livro.precoUnitario}</p>
                    <Card.Title>{livro.titulo}</Card.Title>
                    <Card.Text>{livro.autor}</Card.Text>
                  </Card.Body>
                </Card>
              )
            })
          }

        </Container>
      </CardGroup>
    );
  }







  return (
    <div className='Home_Vitrine_Background'>
      <Cabecalho />
      <MenuCentral />

      <Carousel >
        <Carousel.Item >
          <img
            className="d-block w-100 "
            src={oferta1}
            alt="First slide"
          />
          <Carousel.Caption className='HomeVitrine_CarrouselTextos'>
            <h3>Cupom: PWEB</h3>
            <p>Adicione para ganhar 1 ponto na P1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={oferta6}
            alt="Second slide"
          />

          <Carousel.Caption className='HomeVitrine_CarrouselTextos'>
            <h3>Stephen King</h3>
            <p>Coleção completa com desconto de 20%</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={oferta3}
            alt="Third slide"
          />

          <Carousel.Caption className='HomeVitrine_CarrouselTextos'>
            <h3>15% OFF - Astronomia</h3>
            <p>Seleção com os melhores livros do universo</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <CaixaCards />

    </div>
  );
}


