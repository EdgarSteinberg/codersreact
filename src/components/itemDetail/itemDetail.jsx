import Button from 'react-bootstrap/Button';
import styles from './styles.module.css';
import Counter from '../ItemCount/itemCount';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from "react-router-dom"

const ItemDetail = ({ title, price, image, id, description, categoryId, stock }) => {
    const [addedToCart, setAddedToCart] = useState(false);
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const subtotal = quantity * price; // Calcula el subtotal
        const item = { id, title, price, image, quantity, subtotal }; // Incluye el subtotal en los datos del producto
        addItem(item, quantity);
        setAddedToCart(true);
    }

    return (
        <>
            <div className={styles.flex}>
                <img className={styles.img} src={image} alt="imagen producto" />
                <div className={styles.descripcion}>
                    <h3> {title}</h3>
                    <p>Descripcion {description}</p>
                    <p>Categoria {categoryId}</p>
                    <p className={styles.precio}>Precio ${price}</p>
                    <p>stock {stock}</p>
                    <div className={styles.numero}>
                        {
                            quantityAdded > 0 ? (
                                <div>
                                      <Link to={"/cart"}> <Button variant="success">Terminar Compra</Button>{' '}</Link>
                                </div>
                            ) : (
                                <Counter initial={1} stock={stock} onAdd={handleOnAdd} />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail