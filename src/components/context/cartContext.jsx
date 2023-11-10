import { createContext, useState } from "react";
//CartContext
// Creo el context
export const CartContext = createContext({
    cart: []
})
// Creo el componente del context
const CartComponentContext = ({ children }) => {
        const [cart, setCart] = useState([]);
        const [total, setTotal] = useState(0); // Agrega el estado para el total

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);  
    
    const addItem = (item, quantity) => {
          if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
            const subtotal = item.price * quantity;
            setTotal(prevTotal => prevTotal + subtotal); // Actualiza el total
          } else {
            console.error('El producto ya fue agregado');
          }
        }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <>
            <CartContext.Provider value={{ cart, addItem, removeItem, clearCart,totalQuantity }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartComponentContext



