//import foto3 from '../Assets/img/foto3.jpg'
import '../Assets/css/estilos.css';
import Cabecalho from '../Components/Cabecalho';
import MenuCentral from '../Components/MenuCentral';

import React, { useState, useEffect } from "react";
import { Pagination, Row, Container, Col, Button, PageItem } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DetalheProduto() {

  var LS = localStorage.getItem('usuario-login')

  const navigate = useNavigate();

  //id definido em index.js, routes
  const { idLivro } = useParams();
  //console.log(idLivro)

  const [livro, setLivro] = useState({});



  function BuscarLivroPorId(evento) {
    //evento.preventDefault();
    axios.get("http://localhost:5000/api/Livros/" + idLivro)
      .then(response => {
        if (response.status === 200) {
          setLivro(response.data)
        }
      })
      .catch(erro => console.log(erro));
    //console.log(livro);
  }


  // function AdicionarAoCarrinho() {

  //     axios.put('http://localhost:5000/api/Carrinhos/' + idLivro,
  //       { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-login') } }
  //     )
  //       .then(response => {
  //         if (response.status === 204) {

  //           //window.location.reload();
  //           console.log("Livro adicionado com sucesso ao carrinho")
  //           //navigate('/carrinho_compras');
  //         }
  //       })
  //       .catch(erro => console.log(erro));
  // };
  function AdicionarAoCarrinho() {

    fetch('http://localhost:5000/api/Carrinhos/' + idLivro,
      {
        // Define o método da requisição ( PUT )
        method: 'PUT',

        // Define o corpo da requisição especificando o tipo ( JSON )
        body: JSON.stringify({ idLivro: parseInt(idLivro) }),

        // Define o cabeçalho da requisição
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
        },
      },
    )
      .then((resposta) => {
        // Caso a requisição retorne um status code 204,
        if (resposta.status === 204) {
          BuscarLivroPorId();
          
          navigate('/carrinho_compras');
          console.log(
            'deu certo essa bagaça'
          );
        }
      })

      // caso ocorra algum erro, mostra no console do navegador.
      .catch((erro) => console.log(erro))
  }






  useEffect(() => {
    BuscarLivroPorId()
    return (
      setLivro({})
    )
  }, []);


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
              {
                (LS === null)
                  ?
                  <li><Link to="/cadastro_usuario"><Button>Comprar</Button></Link></li>
                  :
                  <li><Button onClick={() => AdicionarAoCarrinho()} >Comprar</Button></li>
              }

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetalheProduto;

