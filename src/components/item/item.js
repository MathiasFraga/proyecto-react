import { Card,Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import StockContador from '../ItemCount/itemCount';

const Item = ({curso}) =>{

    const [cupos, setCupos]= useState(1);
    const [flag, setFlag] = useState(true);

    function add() {
      if (cupos > 10) { alert('No hay tantos cupos disponibles para este curso'); }
      else {
        setCupos(cupos + 1);
      }
    }
    const remove = ()=>{
      if (cupos>1){
        setCupos (cupos-1)
      } else {
        alert ('No puedes agregar menos de 1 cupo al carrito!')
      }
    }

    const addToCart = () => {
      setFlag(false);
  }
    
    return(
        <Card key={curso.id} style={{ width: "18rem"}}>
            <Link to={`/item/${curso.id}`}>
                <Card.Img variant="top" src={curso.foto} style={{maxHeight: "200px"}}/>
            </Link>
            <Card.Body style={{height:"20rem", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-around"}}>
                <Card.Title>Curso:{curso.title}</Card.Title>
                <Card.Text>Cantidad de clases: {curso.description}</Card.Text>
                <Card.Text>Precio: $ {curso.price}</Card.Text>
                {flag 
            ? (<StockContador value={cupos} sumarProducto={add} quitarProducto ={remove} onAdd={addToCart}/>) 
            :( <Link to="/cart"><Button variant="primary" className="addToCart">Añadir al carrito</Button></Link>)}
            </Card.Body>
        </Card>
    );
};

export default Item;