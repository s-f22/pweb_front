import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css';

import Cadastro_Usuario from './Pages/Cadastro_Usuario';
import Home_Vitrine from './Pages/Home_Vitrine';
import DetalheProduto from './Pages/DetalheProduto';

import reportWebVitals from './reportWebVitals';



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home_Vitrine />} />
      <Route path="cadastro_usuario" element={<Cadastro_Usuario />} />
      <Route path="detalhe_produto" element={<DetalheProduto />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
