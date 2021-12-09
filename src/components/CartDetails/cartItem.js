import  StockContador  from "../ItemCount/itemCount";
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import React, { useState } from "react";

const CartItem = ({ item, onRefresh }) => {
    const { removeItem } = useContext(CartContext);
    const [itemTotal, setItemTotal] = useState(item.price);


    const onAddHandle = (counter, itemTotal) => {
        if (counter > 0) {
            item.quantity=counter
            item.price = item.price * counter
            setItemTotal(item.price)
            onRefresh(itemTotal)
        } else if (counter === 0) {
            removeItem(item.id)
        }
    };

    return (
        <div className="container-fluid row col-12 col-lg-10 mt-5 align-content-center justify-content-center">
            <div className="col-12 col-md-4 justify-self-start">
                <img className="img-fluid" src={item.foto} alt="foto" />
            </div>
            <div className="col-12 col-lg-6 mb-3 row justify-content-center">
                <div className="row justify-content-center">
                    <div className="product-meta-data mb-3">
                        <div className="line"></div>
                        <p className="product-price">${item.price}</p>

                        <div className='row'>
                            <h3 className='col-6'>{item.tittle}</h3>
                    <div className="col-7 dropdown mb-2 px-2 row ms-1">
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
                        </div>

                        {/* <!-- Consulta de disponibilidad --> */}
                        <p className="avaibility">
                            <i className="fa fa-circle"></i> Hay stock
                        </p>

                    </div>


                    {/* <!-- Add to Cart Form --> */}
                    CANTIDAD:
                    <StockContador inicial={item.quantity} stock={item.stock} id={item.id} onAdd={onAddHandle} texto='Actualizar' />
                    <div>Total= ${itemTotal} </div>
                    <div>
                        <button className="btn btn-danger btn-sm botonAccion mb-0 fs-6 col-4 justify-self-start" id='accionEliminar' onClick={() => removeItem(item.id)}>
                                        <i className="far fa-trash-alt"></i>
                                            Eliminar
                                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
} 

export default CartItem;
