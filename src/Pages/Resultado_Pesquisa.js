
import { Card } from 'react-bootstrap';

import '../Assets/css/estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Cabecalho from '../Components/Cabecalho';
import MenuCentral from '../Components/MenuCentral';
import { Container, Row, Col, Carousel, CardGroup } from 'react-bootstrap';
import foto3 from '../Assets/img/foto3.jpg';
import foto21 from '../Assets/img/foto21.jpg';
import foto31 from '../Assets/img/foto31.jpg';

import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";



function Resultado_Pesquisa() {

  //ver definicao termosDaPesquisa em index.js
  const { termosDaPesquisa } = useParams();

  const [listaLivros, setListaLivros] = useState([]);


  //console.log(termosDaPesquisa)



  function PesquisarLivros(evento) {
    //evento.preventDefault();
    axios.get
      // ("http://localhost:5000/api/Livros/100100101")
      ("http://localhost:5000/api/Livros/pesquisar/" + termosDaPesquisa)
      .then(response => {
        if (response.status === 200) {
          setListaLivros(response.data)
        }
      })
      .catch(erro => console.log(erro));
    //console.log(listaLivros[0]);
  }


  useEffect(() => {
    PesquisarLivros()
    return (
      setListaLivros([])
    )
  }, [termosDaPesquisa]);

  return (
    <div className='ResultadoPesquisa_Background'>
      <Cabecalho />
      <MenuCentral />
      <Container className='BoxCardsPesquisaContainer'>
        <h1>Resultado da pesquisa: </h1>
        <p>Você buscou por: <u>{ termosDaPesquisa }</u></p>
        <CardGroup expand="lg">
          <Container className='PesquisaCardsWrap'  >
            {
              listaLivros.map((listaLivros) => {
                return (
                  <Card className='CardProduto_Textos' style={{ "width": '13rem' }}>
                    <Link to={"/detalhe_produto/" + listaLivros.idLivro.toString()} ><Card.Img variant="top" src={require('../Assets/img/produtos/' + listaLivros.idLivro.toString() + '.jpg')} /></Link>
                    <Card.Body>
                      <p className='CarProduto_Preco'>R${listaLivros.precoUnitario}</p>
                      <Card.Title>{listaLivros.titulo}</Card.Title>
                      <Card.Text>
                      {listaLivros.autor}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )
              })
            }
          </Container>
        </CardGroup>
      </Container>
    </div>
  );
}

export default Resultado_Pesquisa;
