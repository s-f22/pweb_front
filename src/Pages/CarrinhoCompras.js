import krmz from '../Assets/img/krmz.jpg'

import Image from 'react-bootstrap/Image'

import '../Assets/css/estilos.css';
import Cabecalho from '../Components/Cabecalho';
import MenuCentral from '../Components/MenuCentral';

import React, { useState, useEffect } from "react";
import { Table, Row, Container, Col, Button, Modal } from 'react-bootstrap';


function CarrinhoCompras() {

  return (
    <div className='CarrinhoCompras_BackGroud'>
      <Cabecalho />
      <MenuCentral />
      <Container >
        <h1 className='CarrinhoCompras_Titulo'>Carrinho de compras: </h1>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th >#</th>
              <th>Item</th>
              <th>Quantidade</th>
              <th>Valor unitário</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Os Irmãos Karamázov</td>
              <td>1</td>
              <td>R$0,00</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Os Irmãos Karamázov</td>
              <td>1</td>
              <td>R$0,00</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Os Irmãos Karamázov</td>
              <td>1</td>
              <td>R$0,00</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Os Irmãos Karamázov</td>
              <td>1</td>
              <td>R$0,00</td>
            </tr>

          </tbody>

        </Table>
        <h3 className='CarrinhoCompras'>Total: R$0,00</h3>
        <Row>
          <Button >Finalizar pedido</Button>
          <Button variant="danger" >Limpar carrinho</Button>
        </Row>
      </Container>
    </div>
  );
}

export default CarrinhoCompras;

