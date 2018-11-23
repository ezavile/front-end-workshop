import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import './modal.scss';

const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.element = document.createElement('div');
    this.element.classList.add('yta_Modal-content');
  }

  componentDidMount() {
    modalRoot.classList.add('is-active');
    modalRoot.appendChild(this.element);
  }

  componentWillUnmount() {
    modalRoot.classList.remove('is-active');
    modalRoot.removeChild(this.element);
  }

  render() {
    const { children } = this.props;
    return createPortal(children, this.element);
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
