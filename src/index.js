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
import CarrinhoCompras from './Pages/CarrinhoCompras';
import Resultado_Pesquisa from './Pages/Resultado_Pesquisa';

import reportWebVitals from './reportWebVitals';



const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home_Vitrine />} />
      <Route path="cadastro_usuario" element={<Cadastro_Usuario />} />
      <Route path="detalhe_produto/:idLivro" element={<DetalheProduto />} />
      <Route path="carrinho_compras" element={<CarrinhoCompras />} />
      <Route path="resultado_pesquisa/:termosDaPesquisa" element={<Resultado_Pesquisa />} />
      <Route path="resultado_pesquisa" element={<Resultado_Pesquisa />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
