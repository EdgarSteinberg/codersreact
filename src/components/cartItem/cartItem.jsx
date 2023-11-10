import React, { useContext } from "react";
import styles from './styles.module.css'
import Button from 'react-bootstrap/Button';
import { CartContext } from "../../context/cartContext"
import { BsTrash } from "react-icons/bs";

const CartItem = ({ image, title, price, id, quantity }) => {
    const { removeItem} = useContext(CartContext)
    return (
        <>
            <div className={styles.flex}>
                <img className={styles.imagen} src={image} alt="hola" />
                <p className={styles.datos}>Nombre: {title}</p>
                <p className={styles.datos}>Precio: {price}</p>
                <p className={styles.datos}>Cantidad: {quantity}</p>
                <p className={styles.datos}>Total: {quantity * price}</p>
                <Button onClick={() => removeItem(id)} variant="danger"><BsTrash /></Button>
            </div>
        </>
    )
}
export default CartItem