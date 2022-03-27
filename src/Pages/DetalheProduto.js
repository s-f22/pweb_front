import krmz from '../Assets/img/krmz.jpg'

import Image from 'react-bootstrap/Image'

import '../Assets/css/estilos.css';
import Cabecalho from '../Components/Cabecalho';
import MenuCentral from '../Components/MenuCentral';

import React, { useState, useEffect } from "react";
import { Pagination, Row, Container, Col, Button, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";


function DetalheProduto() {

  return (
    <div>
      <Cabecalho />
      <MenuCentral />
      <Container>
        <Row>
          <Col xs={3}>
            <div className='DetalheProduto_Container'>
              <Pagination>
                
                <Pagination.Prev />
                
                
                {/* <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item> */}
                
                <Pagination.Next />
                
              </Pagination>
              <img className='DetalheProduto_Imagem' src={krmz}></img>
              <h3>R$0,00</h3>
            </div>
          </Col>

          <Col>
            <div className='DetalheProduto_Textos'>
              <div>
                <h3>Título:</h3>
                <p>Os irmãos Karamazov</p>
              </div>
              <div>
                <h3>Autor</h3>
                <p>Os irmãos Karamazov</p>
              </div>
              <div>
                <h3>Editora</h3>
                <p>Os irmãos Karamazov</p>
              </div>
              <div>
                <h3>Detalhes</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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

