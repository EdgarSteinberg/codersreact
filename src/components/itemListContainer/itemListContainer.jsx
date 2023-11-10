import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import Item from '../itemList/itemList';
import { db } from '../../firebase/cliente';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const productsRef = id ? query(collection(db, "products"), where("categoryId", "==", id)) : collection(db, "products")

        getDocs(productsRef)
            .then(snapshot => {
                setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) return <div className={styles.loading}>
        <Button variant="primary" disabled>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Cargando...
        </Button>
    </div>
    return (
        <>
            <h2 className={styles.saludo}>{greeting}</h2>
            <div className={styles.cardContainer}>
                {products.map(prod => <Item key={prod.id} producto={prod} />)}
            </div>
        </>
    )
}

export default ItemListContainer