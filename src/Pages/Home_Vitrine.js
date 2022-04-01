import oferta1 from '../Assets/img/oferta1.jpg'
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
            <p>Coleleção completa com desconto de 20%</p>
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

      <BoxCards />

    </div>
  );
}

export default Home_Vitrine;
