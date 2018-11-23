import React from 'react';

import './header.scss';
import { SessionService } from '../../services';
import HeaderLink from './header-link';
import Modal from '../modal';

class Header extends React.Component {
  state = {
    loggedIn: false,
    user: '',
    password: '',
    errorMessage: '',
  };

  handleCloseModal = () => {
    this.setState({ errorMessage: '' });
  };

  handleLogOut = () => {
    SessionService.login('admin', '1234567890').then(() => {
      this.setState({ loggedIn: false });
    });
  };

  handleUser = ev => {
    this.setState({ user: ev.target.value });
  };

  handlePassword = ev => {
    this.setState({ password: ev.target.value });
  };

  handleLogIn = ev => {
    const { user, password } = this.state;
    ev.preventDefault();
    SessionService.login(user, password)
      .then(() => {
        this.setState({ loggedIn: true });
      })
      .catch(({ message }) => {
        this.setState({ errorMessage: message });
      });
  };

  renderErrorMessage() {
    const { errorMessage } = this.state;

    return errorMessage ? (
      <Modal>
        {errorMessage}
        <button
          type="button"
          className="yta_Link-outline--primary"
          onClick={this.handleCloseModal}
          style={{ margin: '1em auto 0', display: 'block' }}
        >
          intentar de nuevo
        </button>
      </Modal>
    ) : null;
  }

  renderLoginForm() {
    return (
      <form className="yta_Header-form" onSubmit={this.handleLogIn}>
        <input onChange={this.handleUser} className="yta_Input" type="text" placeholder="Usuario" required />
        <input onChange={this.handlePassword} className="yta_Input" type="password" placeholder="Contraseña" required />
        <button type="submit" className="yta_Link-outline--primary">
          Iniciar sesión
        </button>
      </form>
    );
  }

  renderPrivateLinks = () => (
    <ul className="yta_Header-menu-list">
      <HeaderLink onClick={() => console.log('adoptar')} label="Adoptar" />
      <HeaderLink onClick={() => console.log('rescatar')} label="Dar en adopción" />
      <HeaderLink onClick={this.handleLogOut} label="Cerrar sesión" />
    </ul>
  );

  render() {
    const { loggedIn } = this.state;

    return (
      <header className="yta_Header">
        <h1 className="yta_Header-title">
          <span>Yo te</span> adopto
        </h1>
        <nav className="yta_Header-menu">
          <h2 className="yta_u-onlyRead">Menú de Navegación</h2>
          {loggedIn ? this.renderPrivateLinks() : this.renderLoginForm()}
          {this.renderErrorMessage()}
        </nav>
      </header>
    );
  }
}

export default Header;
