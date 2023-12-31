import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from './components/notFound/notFound';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import CartComponentContext from '../src/context/cartContext';
import Cart from './components/Cart/cart';
import Order from './components/order/order';

function App() {

  return (
    <CartComponentContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting="Hola, Bienvenido a nuestro Ecommerce" />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartComponentContext>
  )
}

export default App


