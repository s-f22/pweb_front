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
                    <p className='CarProduto_Preco'>R${livro.precoUnitario.toFixed(2)}</p>
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


