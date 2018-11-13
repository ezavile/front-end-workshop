import React from 'react';

import './header.scss';

const Header = () => (
  <header className="yta_Header">
    <h1 className="yta_Header-title"><span>Yo te</span> adopto</h1>
    <nav className="yta_Header-menu">
      <h2 className="yta_u-onlyRead">Menú de Navegación</h2>
      <ul className="yta_Header-menu-list">
        <li className="yta_Header-menu-list-item"><a href="#" className="yta_Link-underline--primary">Adoptar</a></li>
        <li className="yta_Header-menu-list-item"><a id="addPet" href="#" className="yta_Link-underline--primary">Dar en adopción</a></li>
        <li className="yta_Header-menu-list-item"><a href="#" className="yta_Link-underline--primary">Iniciar sesión</a></li>
      </ul>
    </nav>
  </header>
)

export default Header;