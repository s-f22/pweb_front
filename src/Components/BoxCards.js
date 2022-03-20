import krmz from '../Assets/img/krmz.jpg'
import '../Assets/css/estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Button, Card, CardGroup } from 'react-bootstrap';

function BoxCards() {
    return (
        <CardGroup expand="lg">
            <Container className='CardsWrap'  >

                <Card style={{ "width": '12rem'}}>
                    <a href=""><Card.Img variant="top" src={krmz} /></a>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className='cardPreco'>
                            <Button variant="primary">Comprar</Button>
                            <p>R$0,00</p>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ "width": '12rem'}}>
                    <a href=""><Card.Img variant="top" src={krmz} /></a>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className='cardPreco'>
                            <Button variant="primary">Comprar</Button>
                            <p>R$0,00</p>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ "width": '12rem'}}>
                    <a href=""><Card.Img variant="top" src={krmz} /></a>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className='cardPreco'>
                            <Button variant="primary">Comprar</Button>
                            <p>R$0,00</p>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ "width": '12rem'}}>
                    <a href=""><Card.Img variant="top" src={krmz} /></a>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className='cardPreco'>
                            <Button variant="primary">Comprar</Button>
                            <p>R$0,00</p>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ "width": '12rem'}}>
                    <a href=""><Card.Img variant="top" src={krmz} /></a>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className='cardPreco'>
                            <Button variant="primary">Comprar</Button>
                            <p>R$0,00</p>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ "width": '12rem'}}>
                    <a href=""><Card.Img variant="top" src={krmz} /></a>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className='cardPreco'>
                            <Button variant="primary">Comprar</Button>
                            <p>R$0,00</p>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ "width": '12rem'}}>
                    <a href=""><Card.Img variant="top" src={krmz} /></a>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className='cardPreco'>
                            <Button variant="primary">Comprar</Button>
                            <p>R$0,00</p>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ "width": '12rem'}}>
                    <a href=""><Card.Img variant="top" src={krmz} /></a>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className='cardPreco'>
                            <Button variant="primary">Comprar</Button>
                            <p>R$0,00</p>
                        </div>
                    </Card.Body>
                </Card>
                
                
            </Container>
        </CardGroup>
    );
}

export default BoxCards;