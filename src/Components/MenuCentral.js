
import '../Assets/css/estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function MenuCentral() {
    return (
        
            <Container fluid className='corretorHeader'>
                <nav className='MenuCentral_Nav'>
                    <a href=''>Ofertas</a>
                    <a href=''>Mais vendidos</a>
                    <a href=''>Biografias</a>
                    <a href=''>Romances</a>
                    <a href=''>Clássicos</a>
                    <a href=''>Filosofia</a>
                    <a href=''>Psicologia</a>
                    <a href=''>Sociologia</a>
                    <a href=''>Astronomia</a>
                    <a href=''>Informática</a>
                </nav>
            </Container>
    );
}

export default MenuCentral;