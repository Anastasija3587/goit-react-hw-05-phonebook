import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    idForImage: PropTypes.number.isRequired,
    clickImg: PropTypes.func.isRequired,
  };

  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.closeImg);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeImg);
  }

  closeImg = e => {
    const { clickImg } = this.props;
    if (e.code !== 'Escape') return;
    clickImg();
  };

  handleCloseImg = e => {
    const { clickImg } = this.props;
    if (e.target.className !== 'Overlay') return;
    clickImg();
  };

  render() {
    const { items, idForImage } = this.props;
    const itemImage = items.find(item => item.id === Number(idForImage));
    return (
      <div
        onClick={this.handleCloseImg}
        className="Overlay"
        role="presentation"
      >
        <div className="Modal">
          <img src={itemImage.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
