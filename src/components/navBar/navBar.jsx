import CartWidget from "../cartWidget/cartWidget"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './styles.module.css'
import { NavLink } from "react-router-dom"
import logo from '../../assets/React_Native_logo.png';

const NavBar = () => {
    const arrayCategorias = ["playstation", "celulares", "notebook"]

    return (
        <>
            <Navbar className={styles.nav} variant="dark">
                    <Nav className={styles.auto}>
                    <NavLink to={'/'}> <img src={logo} alt="Logo" className={styles.img} /></NavLink>
                    <NavLink className={styles.auto} to={'/'}>Inicio</NavLink>
                        {arrayCategorias.map((cat, index) => <NavLink
                            key={index}
                            to={`/category/${cat}`}
                            className={styles.auto}
                        >
                            {cat}
                        </NavLink>)}
                    <NavLink to={'Cart'}><CartWidget /></NavLink>
                    </Nav>   
            </Navbar>
            <h1>Proyecto por Edgar Steinberg</h1>
        </>
    );
}

export default NavBar