
import Card from 'react-bootstrap/Card';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Item = ({ title, price, image, id }) => {
    return (
        <>
            <Card className={styles.card}>
                <Card.Title className={styles.title}> {title} </Card.Title>
                <Card.Img className={styles['card-img-top']} variant="top" src={image} />
                <Card.Body className={styles['card-body']}>
                <Card.Title className={styles.color}>Precio: ${price} </Card.Title>
                <Link className={styles.colors} to={`/item/${id}`}>ver mas</Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item

