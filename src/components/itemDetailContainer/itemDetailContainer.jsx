import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import ItemDetail from "../itemDetail/itemDetail";
import { db } from '../../firebase/cliente';
import styles from './styles.module.css';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const productRef = doc(db, `products/${id}`)

        getDoc(productRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setProducto({ id: snapshot.id, ...snapshot.data() })
                }
            })
            .catch(e => console.error(e))
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
            Loading...
        </Button>
    </div>

    return (
        <>
            {producto ? (
                <>
                    <ItemDetail {...producto} />
                </>
            ) : (
                <p>El producto con ese id:{id} no existe</p>
            )}
        </>
    )
}

export default ItemDetailContainer