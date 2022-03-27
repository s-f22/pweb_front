import oferta_1 from '../Assets/img/carousel_Ofertas_1.jpg'
import oferta_2 from '../Assets/img/carousel_Ofertas_2.jpg'
import oferta_3 from '../Assets/img/carousel_Ofertas_3.jpg'

import '../Assets/css/estilos.css';
import BoxCards from '../Components/BoxCards';
import Cabecalho from '../Components/Cabecalho';
import MenuCentral from '../Components/MenuCentral';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';

import { Link } from "react-router-dom";

function Home_Vitrine() {
  return (
    <div>
      <Cabecalho />
      <MenuCentral />

      

      <BoxCards />

    </div>
  );
}

export default Home_Vitrine;
