

import jwtDecode from "jwt-decode";
import axios from "axios";
import '../Assets/css/estilos.css';
import Cabecalho from '../Components/Cabecalho';
import MenuCentral from '../Components/MenuCentral';

import React, { useState, useEffect } from "react";
import { Table, Row, Container, Button } from 'react-bootstrap';


function CarrinhoCompras() {


  const [meusLivros, setMeusLivros] = useState([]);
 
  

 



  function BuscarMeusLivros() {
    axios
      ('http://localhost:5000/api/Carrinhos',
        {
          headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-login') }
        }
      )
      .then(response => {
        if (response.status === 200) {
          setMeusLivros(response.data)
        }
      })
      .catch(erro => console.log(erro));
  };


  function LimparCarrinho() {
    
    axios.delete
      ('http://localhost:5000/api/Carrinhos/' + jwtDecode(localStorage.getItem('usuario-login')).jti,
        {
          headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-login') }
        }
      )
      .then(response => {
        if (response.status === 204) {
          
          BuscarMeusLivros();
          window.location.reload();
          alert("Itens excluidos com sucesso");
        }
      })
      .catch(erro => console.log(erro));
  };




  useEffect(() => {
    BuscarMeusLivros()
    return (
      setMeusLivros([])
    )
  }, []);
  



  return (
    <div className='CarrinhoCompras_BackGroud'>
      <Cabecalho />
      <MenuCentral />
      <Container >
        <h1 className='CarrinhoCompras_Titulo'>Carrinho de compras: </h1>
        <Table striped bordered hover className='CarrinhoComprasTextTable'>
          <thead>
            <tr>
              <th >#</th>
              <th>Item</th>
              <th>Quantidade</th>
              <th>Valor unitário</th>
            </tr>
          </thead>
          <tbody>
            {
              meusLivros.map((livro) => {
                
                return (
                  <tr>
                    <td>{ livro.idLivro }</td>
                    <td>{ livro.idLivroNavigation.titulo }</td>
                    <td>{ livro.qtdeCompra }</td>
                    <td>R${ livro.idLivroNavigation.precoUnitario.toFixed(2) }</td>
                  </tr>
                )
              })
            }


          </tbody>

        </Table>
        <h3 className='CarrinhoCompras'>Total: R${ meusLivros.reduce( (prevVal, elem) => prevVal + elem.valorTotal, 0 ).toFixed(2) }</h3>
        <Row>
          <Button variant="outline-success">Finalizar pedido</Button>
          <Button  onClick={() => LimparCarrinho()} variant="outline-secondary" >Limpar carrinho</Button>
        </Row>
      </Container>
    </div>
  );
}

export default CarrinhoCompras;

