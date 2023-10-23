import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import styles from './styles.module.css'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setProducto(json)
            })
            .catch(error => console.error(error))
            .finally(() => setLoading(false))

    }, [id])

    return (
        <>
            {loading ? (
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
            ) : (
                <>
                    {producto ? (
                        <>
                            {/*  <Item producto={producto}/> */}
                            <div className={styles.flex}>
                                <img className={styles.img} src={producto?.image} alt="" />
                                <div className={styles.descripcion}>
                                    <h3> {producto?.title}</h3>
                                    <p>Descripcion {producto?.description}</p>
                                    <p>Categoria {producto?.category}</p>
                                    <p className={styles.precio}>Precio USD {producto?.price}</p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>El producto con ese id:{id} no existe</p>
                    )}
                </>
            )}
        </>
    )
}

export default ItemDetailContainer