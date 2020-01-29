import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ onDelete, contact }) => {
  return (
    <>
      <p className={styles.name}>{`${contact.name}: ${contact.number}`}</p>
      <button
        className={styles.btnDel}
        onClick={() => onDelete(contact.id)}
        type="button"
      >
        &#10006;
      </button>
    </>
  );
};

Contact.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contact: PropTypes.shape(PropTypes.string.isRequired).isRequired,
};

export default Contact;
