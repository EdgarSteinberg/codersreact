import Card from 'react-bootstrap/Card';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <>
            <Card className={styles.card}>
                <Card.Title className={styles.title}> {producto.title} </Card.Title>
                <Card.Img className={styles['card-img-top']} variant="top" src={producto.image} />
                <Card.Body className={styles['card-body']}>
                <Card.Title className={styles.color}>Precio: ${producto.price} </Card.Title>
                <Link className={styles.colors} to={`/item/${producto.id}`}>ver mas</Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item



