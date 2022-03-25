import krmz from '../Assets/img/krmz.jpg'
import '../Assets/css/estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";

function BoxCards() {
    return (
        <CardGroup expand="lg">
            <Container className='CardsWrap'  >

                <Card style={{ "width": '12rem' }}>
                    <Link to="/detalhe_produto"><Card.Img variant="top" src={krmz} /></Link>
                    <Card.Body>
                        <p>R$0,00</p>
                        <Card.Title>Nome do livro</Card.Title>
                        <Card.Text>
                            Nome do Autor
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ "width": '12rem' }}>
                    <Link to="/detalhe_produto"><Card.Img variant="top" src={krmz} /></Link>
                    <Card.Body>
                        <p>R$0,00</p>
                        <Card.Title>Nome do livro</Card.Title>
                        <Card.Text>
                            Nome do Autor
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ "width": '12rem' }}>
                    <Link to="/detalhe_produto"><Card.Img variant="top" src={krmz} /></Link>
                    <Card.Body>
                        <p>R$0,00</p>
                        <Card.Title>Nome do livro</Card.Title>
                        <Card.Text>
                            Nome do Autor
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ "width": '12rem' }}>
                    <Link to="/detalhe_produto"><Card.Img variant="top" src={krmz} /></Link>
                    <Card.Body>
                        <p>R$0,00</p>
                        <Card.Title>Nome do livro</Card.Title>
                        <Card.Text>
                            Nome do Autor
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ "width": '12rem' }}>
                    <Link to="/detalhe_produto"><Card.Img variant="top" src={krmz} /></Link>
                    <Card.Body>
                        <p>R$0,00</p>
                        <Card.Title>Nome do livro</Card.Title>
                        <Card.Text>
                            Nome do Autor
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ "width": '12rem' }}>
                    <Link to="/detalhe_produto"><Card.Img variant="top" src={krmz} /></Link>
                    <Card.Body>
                        <p>R$0,00</p>
                        <Card.Title>Nome do livro</Card.Title>
                        <Card.Text>
                            Nome do Autor
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ "width": '12rem' }}>
                    <Link to="/detalhe_produto"><Card.Img variant="top" src={krmz} /></Link>
                    <Card.Body>
                        <p>R$0,00</p>
                        <Card.Title>Nome do livro</Card.Title>
                        <Card.Text>
                            Nome do Autor
                        </Card.Text>
                    </Card.Body>
                </Card>



            </Container>
        </CardGroup>
    );
}

export default BoxCards;