import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {

  return (
    <nav>
      <NavLink activeClassName='active' to='/search-character'>
        Buscar Personaje
      </NavLink>
      <NavLink activeClassName='active' to='/character-list'>
        Todos los Personajes
      </NavLink>
    </nav>
  );
}
