import { useState } from "react"
import Button from 'react-bootstrap/Button';
import styles from './styles.module.css';

const Counter = ({ stock, initial, onAdd }) => {

  const [counter, setCounter] = useState(initial)

  const suma = () => {
    counter < stock && setCounter(counter + 1)
  }

  const resta = () => {
    counter > 1 && setCounter(counter - 1)
  }
  
  const agregarAlCarrito = () => {
    if (counter > 0 && counter <= stock) {
      onAdd(counter);
    }
  }

  return (
    <>
     <div className={styles.flex}>
      <Button className={styles.boton} onClick={resta} variant="outline-primary"> - </Button>{' '}
      <p className={styles.contador}>{counter}</p>
     <Button className={styles.boton} onClick={suma} variant="outline-primary"> + </Button>{' '}
     </div>
      <Button onClick={agregarAlCarrito} variant="primary"> Agregar al carrito </Button>{' '} 
    </>
  )
}

export default Counter