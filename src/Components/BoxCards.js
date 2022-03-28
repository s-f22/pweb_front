
import foto1 from '../Assets/img/foto1.jpg';
import foto2 from '../Assets/img/foto2.jpg';
import foto3 from '../Assets/img/foto3.jpg';
import foto4 from '../Assets/img/foto4.jpg';
import foto5 from '../Assets/img/foto5.jpg';
import foto6 from '../Assets/img/foto6.jpg';
import foto7 from '../Assets/img/foto7.jpg';
import foto8 from '../Assets/img/foto8.jpg';
import foto9 from '../Assets/img/foto9.jpg';
import foto10 from '../Assets/img/foto10.jpg';
import foto11 from '../Assets/img/foto11.jpg';
import foto12 from '../Assets/img/foto12.jpg';
import foto13 from '../Assets/img/foto13.jpg';
import foto14 from '../Assets/img/foto14.jpg';
import foto15 from '../Assets/img/foto15.jpg';
import foto16 from '../Assets/img/foto16.jpg';
import foto17 from '../Assets/img/foto17.jpg';
import foto18 from '../Assets/img/foto18.jpg';
import foto19 from '../Assets/img/foto19.jpg';
import foto20 from '../Assets/img/foto20.jpg';
import foto21 from '../Assets/img/foto21.jpg';
import foto22 from '../Assets/img/foto22.jpg';
import foto23 from '../Assets/img/foto23.jpg';
import foto24 from '../Assets/img/foto24.jpg';
import foto25 from '../Assets/img/foto25.jpg';
import foto26 from '../Assets/img/foto26.jpg';
import foto27 from '../Assets/img/foto27.jpg';
import foto28 from '../Assets/img/foto28.jpg';
import foto29 from '../Assets/img/foto29.jpg';
import foto30 from '../Assets/img/foto30.jpg';

import '../Assets/css/estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CardProduto from '../Components/CardProduto';

import { useState, useEffect } from "react";




function BoxCards() {

    const [listaFotos, setlistaFotos] = useState([]);

    //setlistaFotos();

    return (
        <CardGroup expand="lg">
            <Container fluid className='CardsWrap'  >
                <CardProduto imagem={foto1}/>
                <CardProduto imagem={foto2}/>
                <CardProduto imagem={foto3}/>
                <CardProduto imagem={foto4}/>
                <CardProduto imagem={foto5}/>
                <CardProduto imagem={foto6}/>
                <CardProduto imagem={foto7}/>
                <CardProduto imagem={foto8}/>
                <CardProduto imagem={foto9}/>
                <CardProduto imagem={foto10}/>
                <CardProduto imagem={foto11}/>
                <CardProduto imagem={foto12}/>
                <CardProduto imagem={foto13}/>
                <CardProduto imagem={foto14}/>
                <CardProduto imagem={foto15}/>
                <CardProduto imagem={foto16}/>
                <CardProduto imagem={foto17}/>
                <CardProduto imagem={foto18}/>
                <CardProduto imagem={foto19}/>
                <CardProduto imagem={foto20}/>
                <CardProduto imagem={foto21}/>
                <CardProduto imagem={foto22}/>
                <CardProduto imagem={foto23}/>
                <CardProduto imagem={foto24}/>
                <CardProduto imagem={foto25}/>
                <CardProduto imagem={foto26}/>
                <CardProduto imagem={foto27}/>
                <CardProduto imagem={foto28}/>
                <CardProduto imagem={foto29}/>
                <CardProduto imagem={foto30}/>
            </Container>
        </CardGroup>
    );
}

export default BoxCards;