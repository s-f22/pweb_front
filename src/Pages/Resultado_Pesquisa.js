import '../Assets/css/estilos.css';
import BoxPesquisa from '../Components/BoxPesquisa';
import Cabecalho from '../Components/Cabecalho';
import MenuCentral from '../Components/MenuCentral';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';


function Resultado_Pesquisa() {
  return (
    <div className='ResultadoPesquisa_Background'>
      <Cabecalho />
      <MenuCentral />
      <BoxPesquisa />
    </div>
  );
}

export default Resultado_Pesquisa;
