import { collection, addDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { db } from '../../firebase/cliente'
import { CartContext } from "../../context/cartContext";
import styles from './styles.module.css'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import OrderItem from "../orderItem/orderItem";

const Order = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, clearCart } = useContext(CartContext);

    const createOrder = ({ name, phone, email }) => {
        setLoading(true);

        const calculatedTotal = cart.reduce((acc, item) => acc + item.quantity * item.price, 0)

        const order = {
            buyer: {
                name, phone, email
            },
            items: cart,
            total: calculatedTotal,
            date: new Date()
        };

        const orderRef = collection(db, "orders");

        addDoc(orderRef, order)
            .then((docRef) => {
                setOrderId(docRef.id);
                clearCart();
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            <OrderItem onConfirm={createOrder} />
            {loading && <h2>se esta generando su orden</h2>}
            {!loading && orderId && <div className={styles.margen}>
                <p>Su Compra fue efectuada correctamente.</p>
                <p>Conserve este numero de seguimiento:</p>
                <h2 className={styles.verde}>{orderId}</h2>
                <Link to={"/"}> <Button variant="warning" className={styles.color} >Realizar una nueva compra</Button>{' '}</Link>
            </div>}
        </>
    );
};

export default Order;
