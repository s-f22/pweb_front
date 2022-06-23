import foto3 from '../Assets/img/foto3.jpg'


import '../Assets/css/estilos.css';
import Cabecalho from '../Components/Cabecalho';
import MenuCentral from '../Components/MenuCentral';

import React, { useState, useEffect } from "react";
import { Pagination, Row, Container, Col, Button, PageItem } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';


function DetalheProduto() {
  //id definido em index.js, routes

  const { idLivro } = useParams();
  //console.log(idLivro)

  const [livro, setLivro] = useState({});

  function BuscarLivroPorId(evento) {
    //evento.preventDefault();
    axios.get
      // ("http://localhost:5000/api/Livros/100100101")
      ("http://localhost:5000/api/Livros/" + idLivro)
      .then(response => {
        if (response.status === 200) {
          setLivro(response.data)
        }
      })
      .catch(erro => console.log(erro));
    console.log(livro);
  }


  useEffect(() => {
    BuscarLivroPorId()
    return (
      setLivro({})
    )
  }, [idLivro]);


  return (
    <div className='DetalheProdutoBackground'>
      <Cabecalho />
      <MenuCentral />
      <Container>
        <Row className='testtt'>
          <Col md={4}>
            <div className='DetalheProduto_Container'>
              <Pagination>

                <Pagination.Prev />


                {/* <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item> */}

                <Pagination.Next />

              </Pagination>
              <img className='DetalheProduto_Imagem' src={require('../Assets/img/produtos/' + idLivro + '.jpg')}></img>
              <h3>R${livro.precoUnitario}</h3>
            </div>
          </Col>

          <Col>
            <div className='DetalheProduto_Textos'>
              <div>
                <h3>Título:</h3>
                <p>{livro.titulo}</p>
              </div>
              <div>
                <h3>Autor</h3>
                <p>{livro.autor}</p>
              </div>
              <div>
                <h3>Editora</h3>
                <p>{livro.editora}</p>
              </div>
              <div>
                <h3>Detalhes</h3>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
                <p>{livro.descricao}</p>
              </div>
              <Link to="/carrinho_compras"><Button>Comprar</Button></Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetalheProduto;

