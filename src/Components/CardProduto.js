import krmz from '../Assets/img/krmz.jpg'
import '../Assets/css/estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";


function CardProduto(props) {
    
    return (
        <Card style={{ "width": '10rem' }}>
            <Link to="/detalhe_produto"><Card.Img variant="top" src={props.imagem} /></Link>
            <Card.Body>
                <p>R$0,00</p>
                <Card.Title>Nome do livro</Card.Title>
                <Card.Text>
                    Nome do Autor
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardProduto;