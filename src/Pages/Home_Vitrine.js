import oferta1 from '../Assets/img/oferta1.png'
import oferta3 from '../Assets/img/oferta3.jpg'
import oferta6 from '../Assets/img/oferta6.jpg'


import '../Assets/css/estilos.css';
import BoxCards from '../Components/BoxCards';
import Cabecalho from '../Components/Cabecalho';
import MenuCentral from '../Components/MenuCentral';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';

import { Link } from "react-router-dom";

function Home_Vitrine() {
  return (
    <div className='Home_Vitrine_Background'>
      <Cabecalho />
      <MenuCentral />

      <Carousel>
        <Carousel.Item >
          <img
            className="d-block w-100 HomeVitrine_Carousel"
            src={oferta1}
            alt="First slide"
          />
          <Carousel.Caption className='HomeVitrine_CarrouselTextos'>
            <h3>Livros usados</h3>
            <p>Encontre aquela raridade que você tanto estava procurando</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 HomeVitrine_Carousel"
            src={oferta6}
            alt="Second slide"
          />

          <Carousel.Caption className='HomeVitrine_CarrouselTextos'>
            <h3>Coleção completa Stephen King</h3>
            <p>Toda a coleção do mestre do terror com desconto de 20%</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 HomeVitrine_Carousel"
            src={oferta3}
            alt="Third slide"
          />

          <Carousel.Caption className='HomeVitrine_CarrouselTextos'>
            <h3>Astronomia com 15% de desconto</h3>
            <p>Seleção com os melhores livros do universo pra fechar sua coleção</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <BoxCards />

    </div>
  );
}

export default Home_Vitrine;
