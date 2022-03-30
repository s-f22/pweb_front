import validator from 'validator'
import '../Assets/css/estilos.css';
import Cabecalho from '../Components/Cabecalho';
import MenuCentral from '../Components/MenuCentral';

import React, { useState, useEffect } from "react";
import { FloatingLabel, Form, Row, Container, Col, Button, Modal } from 'react-bootstrap';



function MyVerticallyCenteredModal(props) {

  //validação de email
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value

    if (!validator.isEmail(email)) {
      setEmailError('Email inválido. ')
    }else
    {
      setEmailError('')
    }
    if (email === '') {
      setEmailError('')
    }
  }


  //validação de nome
  const [nomeError, setNomeError] = useState('')
  const validateNome = (e) => {
    var nome = e.target.value;
    if (nome.value.length <= parseInt(3)) {
      setNomeError('Nome inválido. ')
    }
  }
  

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          É grátis e rápido!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Informe seus dados abaixo:</h4>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control required minLength={3} onChange={(e) => validateNome(e)} type="name" placeholder="Insira seu nome completo" />
            <span style={{
              fontWeight: 'bold',
              color: 'red',
            }}>{nomeError}</span>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCPF">
            <Form.Label>CPF</Form.Label>
            <Form.Control type="name" placeholder="(somente numeros)" />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control onBlur={(e) => validateEmail(e)} type="email" placeholder="Insira seu endereço de email" />
            <span style={{
              fontWeight: 'bold',
              color: 'red',
            }}>{emailError}</span>
            <Form.Text className="text-muted">
              (Não compartilhamos seus dados).
            </Form.Text>
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="(Mínimo de 8 caracteres)" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirmação</Form.Label>
                <Form.Control type="password" placeholder="Redigite a senha" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Desejo receber promoções via email" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Cadastrar
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>

    </Modal>
  );
}



function Cadastro_Usuario() {

  // Modal Cadastrar novo usuario
  const [modalShow, setModalShow] = React.useState(false);

  // Modal Esquici minha senha
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //validação de email
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value

    if (!validator.isEmail(email)) {
      setEmailError('Email inválido.')
    }else
    {
      setEmailError('')
    }
    if (email === '') {
      setEmailError('')
    }
  }


  

  return (
    <div className='teste'>
      <Cabecalho />
      <MenuCentral />
      <Container className='Cadastro_Usuario_Container'>
        <Row>
          <Col className='Cadastro_Usuario_Col_1'>

            <h2 className='Cadastro_Usuario_JaTenho'>Já tenho cadastro</h2>

            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
            >
              <Form.Control onBlur={(e) => validateEmail(e)} type="email" placeholder="name@example.com" />
              <span style={{
              fontWeight: 'bold',
              color: 'red',
            }}>{emailError}</span>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Senha">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <div className='CadastroUsuario_BotoesEsq'>
              <Button variant="primary" type="submit">
                Entrar
              </Button>

              <>
                <Button variant="light" onClick={handleShow}>
                  Esqueci minha senha
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Enviar uma nova senha para:</Modal.Title>
                  </Modal.Header>
                  <Modal.Body><FloatingLabel
                    controlId="floatingInput"
                    label="Digite seu email"
                    className="mb-3"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel></Modal.Body>
                  <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                      Fechar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Enviar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>

            </div>
          </Col>

          <Col className='Cadastro_Usuario_Col_2'>
            <div className='Cadastro_Usuario_NaoTenho'>
              <h2>Ainda não tem cadastro?</h2>
              <>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Clique aqui e faça o seu agora!
                </Button>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Cadastro_Usuario;

