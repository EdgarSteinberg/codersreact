
import styles from './styles.module.css'
import Item from '../item/item'

const ItemList = ({ products }) => {
    return (
        <>
            <div className={styles.cardContainer}>
                {products.map((prod) => (
                 <Item key={prod.id} {...prod} />
                 ))}
            </div>
        </>
    )
}

export default ItemList