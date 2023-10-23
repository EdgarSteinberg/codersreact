import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import Item from '../item/item';

const ItemListContainer = ({ greeting }) => {
   
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    
    useEffect(() => {
        const url = id ? `https://fakestoreapi.com/products/category/${id}` : `https://fakestoreapi.com/products`
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setProducts(json)
                setLoading(false)
              
            })
            .catch(error => console.error(error))
    }, [id])

    if (loading) return <Button variant="primary" disabled>
        <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
        />
        Loading...
    </Button>
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