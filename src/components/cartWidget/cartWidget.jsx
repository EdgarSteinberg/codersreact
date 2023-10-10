
import Badge from 'react-bootstrap/Badge';
import { BsCart4 } from "react-icons/bs";


const CartWidget = () => {
    return (
        <>
            <h4>
                <Badge bg="secondary"><BsCart4 />5</Badge>
            </h4>
        </>
    )
}

export default CartWidget