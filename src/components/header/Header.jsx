import React from 'react';

import './header.scss';
import HeaderLink from './header-link';

class Header extends React.Component {
  state = {
    loggedIn: false,
  };

  handleLogIn = () => {
    this.setState({ loggedIn: true });
  };

  handleLogOut = () => {
    this.setState({ loggedIn: false });
  };

  getPrivateLinks = () => (
    <React.Fragment>
      <HeaderLink onClick={() => console.log('adoptar')} label="Adoptar" />
      <HeaderLink onClick={() => console.log('rescatar')} label="Dar en adopción" />
      <HeaderLink onClick={this.handleLogOut} label="Cerrar sesión" />
    </React.Fragment>
  );

  getPublicLinks = () => <HeaderLink onClick={this.handleLogIn} label="Iniciar sesión" />;

  render() {
    const { loggedIn } = this.state;
    const links = loggedIn ? this.getPrivateLinks() : this.getPublicLinks();

    return (
      <header className="yta_Header">
        <h1 className="yta_Header-title">
          <span>Yo te</span> adopto
        </h1>
        <nav className="yta_Header-menu">
          <h2 className="yta_u-onlyRead">Menú de Navegación</h2>
          <ul className="yta_Header-menu-list">{links}</ul>
        </nav>
      </header>
    );
  }
}

export default Header;
