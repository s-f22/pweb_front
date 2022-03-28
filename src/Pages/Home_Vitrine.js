import oferta1 from '../Assets/img/oferta1.png'
import oferta2 from '../Assets/img/oferta2.png'
import oferta3 from '../Assets/img/oferta3.png'

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
            className="d-block w-100 HomeVitrine_Carousel"
            src={oferta1}
            alt="First slide"
          />
          <Carousel.Caption className='HomeVitrine_CarrouselTextos'>
            <h3>Livros usados</h3>
            <p>Vários títulos com descontos para você aproveitar aquela raridade quem alguem deixou de lado e tá só acumulando poeira.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 HomeVitrine_Carousel"
            src={oferta2}
            alt="Second slide"
          />

          <Carousel.Caption className='HomeVitrine_CarrouselTextos'>
            <h3>Coleção COMPLETA Stephen King</h3>
            <p>Todos os volumes do mestre do terror com desconto de 20% em compra única do lote, ou 5% em cada título.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 HomeVitrine_Carousel"
            src={oferta3}
            alt="Third slide"
          />

          <Carousel.Caption className='HomeVitrine_CarrouselTextos'>
            <h3>Os irmãos Karamázov</h3>
            <p>Clássico do escritos Fiódor Dostoiévski em 2 volumes com tradução direta do russo por Paulo Bezzera, na editora 34. Edição de colecionador limitada a 20 exemplares.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <BoxCards />

    </div>
  );
}

export default Home_Vitrine;
