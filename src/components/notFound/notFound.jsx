import { Link } from "react-router-dom"
import styles from "./styles.module.css"

const NotFound = () => {
    return (
        <>
        <div className={styles.back}>
        <h1 className={styles.titulo}>Error 404 Pagina no encontrada</h1>
        <Link to={"/"}> <Button variant="primary">Ir a productos</Button>{' '}</Link>
        {/* <Link className={styles.colo} to={'/'}>Ir a productos</Link> */}
        </div>
        </>
    )
}

export default NotFound


