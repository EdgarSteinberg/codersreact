
import CartWidget from "../cartWidget/cartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import styles from './styles.module.css'

const NavBar = () => {
    return (
        <> 
            <Navbar bg="primary" data-bs-theme="dark">
           
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#products">Productos</Nav.Link>
                        <Nav.Link href="#contac">Contacto</Nav.Link>
                        <CartWidget/>
                    </Nav>
                </Container>
               
            </Navbar>
            <h1>Proyecto por Edgar Steinberg</h1> 
        </>
    );
}

export default NavBar