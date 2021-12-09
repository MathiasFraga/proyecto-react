import './itemList.css'
import {useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import StockContador from '../ItemCount/itemCount';
import { NavLink } from "react-router-dom";


const ItemList = ({curso}) => {
  const { addToCart, showHideCart } = useContext(CartContext);

  const onAddHandle = (counter) => {
  if (counter > 0) {
    showHideCart(false)
    addToCart(curso, counter)
  }
  };
  
  const onIncreaseHandle = (counter) => {
    console.log('itemlist dice ' + counter)
  }

return ( 
<div className="row justify-content-center col-12 col-sm-6 mb-5">
<NavLink to={`/curso/ ${curso.id}`}><img className="card-img-top img-fluid" src={curso.foto} alt="S" /></NavLink>
<div className="card-body col-11">
  <p className="card-text ">
    <b>{curso.tittle}</b>
  </p>
  <p className="card-text ">
    <b>${curso.price}</b>
  </p>
</div>

<div className="col-11 col-sm-9 col-md-7 dropdown mb-2 px-2 row justify-content-center">
  <button
    className="btn btn-secondary dropdown-toggle col-5"
    type="button"
    id="dropdownMenuButton1"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Curso
  </button>
  <ul
    className="dropdown-menu"
    aria-labelledby="dropdownMenuButton1"
  >
<li>
                  <a className="dropdown-item" href="/#">
                    <b>4</b> <span style={{ fontSize: `80%` }}>(Fotografia deportiva)</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <b>5</b> <span style={{ fontSize: `80%` }}>(Fotografia de eventos)</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <b>6</b> <span style={{ fontSize: `80%` }}>(Fotografia empresarial)</span>
                  </a>
                </li>
  </ul>
</div>
<StockContador inicial={0} stock={curso.stock} ID={curso.id} onAdd={onAddHandle} onIncrease={ onIncreaseHandle} texto='Agregar al carrito' />
</div>
)
  };

export default ItemList;
