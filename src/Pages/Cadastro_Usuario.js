import validator from 'validator'
import '../Assets/css/estilos.css';
import Cabecalho from '../Components/Cabecalho';
import MenuCentral from '../Components/MenuCentral';

import React, { useState, useEffect } from "react";
import { FloatingLabel, Form, Row, Container, Col, Button, Modal } from 'react-bootstrap';

import axios from "axios";

import { useNavigate } from 'react-router-dom';


function MyVerticallyCenteredModal(props) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNasc, setDataNasc] = useState(new Date());
  const [msgErro, setMsgErro] = useState('');
  const [isLoading, setIsLoading] = useState(false);



  //validação de email
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value

    if (!validator.isEmail(email)) {
      setEmailError('Email inválido. ')
    } else {
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
    if (nome.length < 3) {
      setNomeError('Nome inválido. Mínimo de 3 caracteres')
    } else {
      setNomeError('')
    }
    if (nome === '') {
      setNomeError('')
    }
  }

  //validacao de senha
  const [senhaError, setsenhaError] = useState('')
  const [senha1, setSenha1] = useState('')

  const preencherSenha1 = (i) => {
    const valor = i.target.value;
    setSenha1(valor)
    console.log(senha1)
  }


  // const validarSenha = (j) => {
  //   var key2 = j.target.value;
  //   console.log(key2);

  //   if (key2 !== { senha1 }) {
  //     setsenhaError('As senhas não conferem. Por favor, verifique.');
  //   } else if (key2 == { senha1 }) {
  //     setsenhaError('Senha válida');
  //   } else if (key2 === '') {
  //     setsenhaError('')
  //   }
  // }



  function CadastrarUsuario(novoUsuario) {

    setIsLoading(true);

    novoUsuario.preventDefault();

    let usuario = {
      nome: nome,
      dataNascimento: dataNasc,
      cpf: cpf,
      telefone: telefone,
      email: email,
      senha: senha
    };

    axios.post('http://localhost:5000/api/Usuarios', usuario
      // {
      //     headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-login') }
      // }
    )
      .then(resposta => {
        if (resposta.status === 201) {
          console.log("Usuario cadastrado com sucesso!");
          setNome('');
          setDataNasc(new Date());
          setCPF('');
          setTelefone('');
          setSenha('');
          setEmail('');
          setIsLoading(false);
          alert("Usuario Cadastrado com Sucesso!")
        }
      })
      .catch(
        erro => console.log(erro, "DEU RUIM"), setNome(''),
        setDataNasc(new Date()),
        setCPF(''),
        setTelefone(''),
        setSenha(''),
        setEmail(''),
        setIsLoading(false),
      );
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
        <Form onSubmit={CadastrarUsuario}>
          <Form.Group className="mb-3" controlId="formBasicNome" value={nome} onChange={(evt) => setNome(evt.target.value)}>
            <Form.Label>Nome</Form.Label>
            <Form.Control required minLength={3} onBlur={(e) => validateNome(e)} type="name" placeholder="Insira seu nome completo" />
            <span style={{
              fontWeight: 'bold',
              color: 'red',
            }}>{nomeError}</span>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCPF" value={cpf} onChange={(evt) => setCPF(evt.target.value)}>
            <Form.Label>CPF</Form.Label>
            <Form.Control type="name" placeholder="(somente numeros)" />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" value={email} onChange={(evt) => setEmail(evt.target.value)}>
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
              <Form.Group className="mb-3" controlId="formBasicDataNascimento" value={dataNasc} onChange={(evt) => setDataNasc(evt.target.value)}>
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control  type="date" placeholder="" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicTelefone" value={telefone} onChange={(evt) => setTelefone(evt.target.value)}>
                <Form.Label>Telefone</Form.Label>
                {/* <Form.Control onBlur={(j) => validarSenha(j)} type="password" placeholder="Redigite a senha" /> */}
                <Form.Control type="text" placeholder="(somente numeros)" />
                <span style={{
                  fontWeight: 'bold',
                  color: 'red',
                }}>{senhaError}</span>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword" value={senha} onChange={(evt) => setSenha(evt.target.value)}>
                <Form.Label>Senha</Form.Label>
                <Form.Control onChangeCapture={(i) => preencherSenha1(i)} type="password" placeholder="(Mínimo de 8 caracteres)" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword" value={senha1} onChange={(evt) => setSenha1(evt.target.value)}>
                <Form.Label>Confirmação</Form.Label>
                {/* <Form.Control onBlur={(j) => validarSenha(j)} type="password" placeholder="Redigite a senha" /> */}
                <Form.Control type="password" placeholder="Redigite a senha" />
                <span style={{
                  fontWeight: 'bold',
                  color: 'red',
                }}>{senhaError}</span>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Desejo receber promoções via email" />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={ isLoading ? true : false }>
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

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [msgErro, setMsgErro] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();



  // Modal Cadastrar novo usuario
  const [modalShow, setModalShow] = React.useState(false);

  // Modal Esqueci minha senha
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //validação de email
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value

    if (!validator.isEmail(email)) {
      setEmailError('Email inválido.')
    } else {
      setEmailError('')
    }
    if (email === '') {
      setEmailError('')
    }
  }




  function EfetuaLogin(evento) {

    //console.log("fui chamado")
    evento.preventDefault();

    setMsgErro('');
    setIsLoading(true);

    axios.post('http://localhost:5000/api/Logins', { Email: email, Senha: senha })

      .then((resposta) => {

        if (resposta.status === 200) {
          localStorage.setItem('usuario-login', resposta.data.token);
          setIsLoading(false);
          let base64 = localStorage.getItem('usuario-login').split('.')[1];
          //console.log(base64);
          //history.push('/');
          navigate('/');
        }

      })

      .catch(() => {
        setMsgErro('Email e/ou senha invalidos');
        setIsLoading(false);
        alert(msgErro);
      }

      );

  };




  return (
    <div className='CadastroUsuarioBackgroundImage' >
      <Cabecalho />
      <MenuCentral />
      <Container className='Cadastro_Usuario_Container'>
        <Row>
          <Col className='Cadastro_Usuario_Col_1'>
            <form action="" onSubmit={EfetuaLogin}>
              <h2 className='Cadastro_Usuario_JaTenho'>Já tenho cadastro</h2>

              <FloatingLabel controlId="floatingInput" label="Email" className="mb-3" value={email} onChange={(evt) => setEmail(evt.target.value)} >
                <Form.Control onBlur={(e) => validateEmail(e)} type="email" placeholder="name@example.com" />
                <span style={{ fontWeight: 'bold', color: 'red', }}>{emailError}</span>
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Senha" value={senha} onChange={(evt) => setSenha(evt.target.value)} >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
              <div className='CadastroUsuario_BotoesEsq'>
                <Button variant="primary" type="submit" disabled={isLoading ? true : false}>
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
                      onBlur={(e) => validateEmail(e)}
                      controlId="floatingInput"
                      label="Digite seu email"
                      className="mb-3"
                    >
                      <Form.Control type="email" placeholder="name@example.com" />
                      <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                      }}>{emailError}</span>
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
            </form>
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

