import React, { useContext } from "react";
import './itemDetail.css';
import StockContador from '../ItemCount/itemCount';
import CartContext from "../../context/cart/CartContext";
import { NavLink } from "react-router-dom";


const ItemDetails = ({curso}) => {

  const { addToCart, showHideCart } = useContext(CartContext);
  
  const onAddHandle = (counter) => {
    showHideCart(false)
    addToCart(curso, counter)
  };
  
  
    return (
      <div className="container-fluid row col-11 col-sm-9 mt-5 align-content-center justify-content-center">
        <div className="col-12 col-lg-7 align-self-center">
          <img className="img-fluid" src={curso.foto} alt="s" />
        </div>
        <div className="col-12 col-lg-5 mb-3 row justify-content-center">
          <div className="single_product_desc row justify-content-center">
            <div className="product-meta-data mb-3">
              <div className="line"></div>
              <p className="product-price">${curso.price}</p>
  
              <h3>{curso.tittle}</h3>
  
              {/* <!-- Ratings & Review --> */}
              <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
                <div className="ratings">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="review">
                  <a href="/#">Escribe una reseña</a>
                </div>
              </div>
              <p className="avaibility">
                <i className="fa fa-circle"></i> Hay stock
              </p>
  
            </div>
            {/* Cupos */}
            <div className="col-12 dropdown mb-2 px-2 row justify-content-start">
              <button
                className="btn btn-secondary dropdown-toggle col-5"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cursos
              </button>
              <ul
                className="dropdown-menu "
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
            {/* Descripcion */}
            <div className="short_overview my-5">
              <p>
                {curso.description}
              </p>
            </div>
  
            {<StockContador inicial={0} stock={curso.stock} id={curso.id} onAdd={onAddHandle} texto='Agregar al carrito' /> }
          </div>
          
        </div>
        <button className="btn col-6 col-lg-3 mt-3 btnSeguirComprando"><NavLink className='fs-6' to={'/'}>Volver</NavLink></button>
      </div>
    );
  };

  export default ItemDetails;