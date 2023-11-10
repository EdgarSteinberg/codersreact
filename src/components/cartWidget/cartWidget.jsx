
import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import { BsCart4 } from "react-icons/bs";
import { CartContext } from '../../context/cartContext';
import styles from './styles.module.css'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <>
            <h4>
                <Badge className={styles['bg-primary']}>
                    <BsCart4 /> {totalQuantity}
                </Badge>   
            </h4>

        </>
    )
}

export default CartWidget