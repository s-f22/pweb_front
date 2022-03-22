
import '../Assets/css/estilos.css';
import Cabecalho from '../Components/Cabecalho';
import MenuCentral from '../Components/MenuCentral';

import React, { useState, useEffect } from "react";
import { FloatingLabel, Form, Row, Container, Col, Button, Modal } from 'react-bootstrap';


function DetalheProduto() {

  return (
      <div>
        <Cabecalho/>
        <MenuCentral />
      </div>
  );
}

export default DetalheProduto;

