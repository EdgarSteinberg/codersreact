
import styles from './styles.module.css'
import Item from '../item/item'

const ItemList = ({ products, titulo }) => {
    return (
        <>  
        <h4>{titulo}</h4>
            <div className={styles.cardContainer}>
                {products.map((prod) => (
                 <Item key={prod.id} {...prod} />
                 ))}
            </div>
        </>
    )
}

export default ItemList