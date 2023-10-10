import styles from './styles.module.css'; 

const ItemListContainer = ({ greeting }) => {

    return (
        <>
            <h2 className={styles.saludo}>{greeting}</h2> 
        </>
    )
}

export default ItemListContainer