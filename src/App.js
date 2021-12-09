import NavBar from './components/NavBar/navBar';
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import ListContainer from './container/ItemListContainer/ItemListContainer';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  CartState  from './context/cart/CartState'
import  Cart  from './components/CartDetails/cart'


function App() {
  return (
    <CartState>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element ={<ListContainer greeting="Camara Estudio" />} />
          <Route exact path="/categoria/:categoryID" element ={<ListContainer greeting="Cursos y servicios de Fotografia" />}/>
          <Route exact path="/item/:itemID" element = {<ItemDetailContainer />} />
          <Route exact path="/cart" element = {<Cart />} />
          <Route path="/*" element = {<h1>Página no encontrada</h1>} />
        </Routes>
      </BrowserRouter>
      </CartState>
    );
  }
export default App;

