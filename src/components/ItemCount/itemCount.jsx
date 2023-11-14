import { useState } from "react"
import Button from 'react-bootstrap/Button';
import styles from './styles.module.css';

const Counter = ({ stock, initial, onAdd }) => {

  const [counter, setCounter] = useState(initial)

  const addition = () => {
    counter < stock && setCounter(counter + 1)
  }

  const subtraction = () => {
    counter > 1 && setCounter(counter - 1)
  }
  
  const addToCart = () => {
    if (counter > 0 && counter <= stock) {
      onAdd(counter);
    }
  }

  return (
    <>
     <div className={styles.flex}>
      <Button className={styles.boton} onClick={subtraction} variant="outline-primary"> - </Button>{' '}
      <p className={styles.contador}>{counter}</p>
     <Button className={styles.boton} onClick={addition} variant="outline-primary"> + </Button>{' '}
     </div>
      <Button onClick={addToCart} variant="primary"> Agregar al carrito </Button>{' '} 
    </>
  )
}

export default Counter