import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from './components/notFound/notFound';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'

function App() {

  return (

    <BrowserRouter>
      <NavBar />

      <Routes>
        
        <Route exact path="/" element={<ItemListContainer greeting="Hola, Bienvenido a nuestro Ecommerce" />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App


