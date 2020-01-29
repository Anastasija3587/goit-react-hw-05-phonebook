import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ item: { webformatURL, id }, clickImg }) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => clickImg(id)}
      role="presentation"
    >
      <img
        id={id}
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  clickImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
