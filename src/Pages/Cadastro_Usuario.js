
import '../Assets/css/estilos.css';
import Cabecalho from '../Components/Cabecalho';
import MenuCentral from '../Components/MenuCentral';

import React, { useState, useEffect } from "react";
import { FloatingLabel, Form, Row, Container, Col, Button, Modal } from 'react-bootstrap';



function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          É grátis e rápido =P
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Informe seus dados abaixo:</h4>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="name" placeholder="Insira seu nome completo" />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCPF">
            <Form.Label>CPF</Form.Label>
            <Form.Control type="name" placeholder="(somente numeros)" />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Insira seu endereço de email" />
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
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}



function Cadastro_Usuario() {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Cabecalho />
      <MenuCentral />
      <Container className='Cadastro_Usuario_Container'>
        <Row>
          <Col>

            <h2>Já tenho cadastro</h2>

            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <Button variant="primary" type="submit">
              Submit
            </Button>
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

