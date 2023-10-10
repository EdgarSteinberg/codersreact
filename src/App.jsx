
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';


function App() {
 
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Hola, Bienvenido a nuestro Ecommerce"/>
  
    </>
  )
}

export default App