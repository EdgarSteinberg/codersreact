import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import CartItem from "../cartItem/cartItem"
import Button from 'react-bootstrap/Button';
import styles from "./styles.module.css"

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext)

    const totalPrice = cart.reduce((acc, item) => {
        return acc + (item.quantity * item.price || 0);
    }, 0);

    if (cart.length === 0) {
        return (
            <div className={styles.centrar}>
                <h2>No hay items en el carrito</h2>
                <Button variant="primary"><Link to="/">Productos</Link></Button>
            </div>
        )
    }
    return (
        <>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3 className={styles.total}>Total de la compra: ${totalPrice}</h3>
            <div className={styles.botones}>
                {/* <Button variant="success"><Link to="/Order">Finalizar compra</Link></Button>{' '} */}
                <Link to={"/Order"}> <Button variant="success">Finalizar compra</Button>{' '}</Link>
                <Button onClick={() => clearCart()} variant="danger">Vaciar Carrito</Button>{' '}
            </div>

        </>
    )
}

export default Cart