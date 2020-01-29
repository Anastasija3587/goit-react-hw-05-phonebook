import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ items, clickImg }) => {
  return (
    <ul className="ImageGallery">
      {items.map(item => (
        <ImageGalleryItem key={item.id} item={item} clickImg={clickImg} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  clickImg: PropTypes.func.isRequired,
};

export default ImageGallery;
