
import '../Assets/css/estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card} from 'react-bootstrap';
import { Link } from "react-router-dom";


function CardProdutoPesquisa(props) {
    
    return (
        <Card className='CardProduto_Textos' style={{ "width": '13rem' }}>
            <Link to="/detalhe_produto"><Card.Img variant="top" src={props.imagem} /></Link>
            <Card.Body>
                <p className='CarProduto_Preco'>R$0,00</p>
                <Card.Title>Nome do livro</Card.Title>
                <Card.Text>
                    Nome do Autor
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardProdutoPesquisa;