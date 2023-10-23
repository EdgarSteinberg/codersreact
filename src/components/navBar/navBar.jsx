import CartWidget from "../cartWidget/cartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './styles.module.css'
import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/React_Native_logo.png';

const NavBar = () => {

    const arrayCategorias = ["electronics", "jewelery", "men's clothing", "women's clothing"]

    return (
        <>
            <Navbar className={styles.nav} variant="dark">

                <Container>
                    <NavLink  to={'/'}> <img src={logo} alt="Logo" className={styles.img} /></NavLink>
                    <Nav className={styles.auto}>
                        <NavLink className={styles.auto} to={'/'}>Inicio</NavLink>
                        {arrayCategorias.map((cat, index) => <NavLink
                            key={index}
                            to={`/category/${cat}`}
                            className={styles.auto}
                        >
                            {cat}
                        </NavLink>)}
                        <CartWidget />
                    </Nav>
                </Container>

            </Navbar>
            <h1>Proyecto por Edgar Steinberg</h1>
        </>
    );
}

export default NavBar