import React from "react";
import './styleNav.css';
import CartWidget from "../CartWidget/cartWidget";

const NavBar = () => {
  return (
    <nav className="nav navbar navbar-expand-lg navbar-dark ">
      <div class="container-fluid containerTitle">
        <h3>Camara Estudio</h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" linksNav collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav navUl">
            <li className="nav-link navLi" aria-current="page" href="#">Servicios</li>
            <li className="nav-link navLi" href="#">Cursos</li>
            <li className="nav-link navLi" href="#">Nosotros</li>
            <li className="nav-link navLi" href="#">Contacto</li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar

