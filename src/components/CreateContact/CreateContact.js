import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateContact.module.css';

const CreateContact = ({
  name,
  nameId,
  numberId,
  number,
  onChange,
  onSubmit,
}) => {
  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.label} htmlFor={nameId}>
          Name
          <input
            className={styles.input}
            name="name"
            value={name}
            onChange={onChange}
            type="text"
          />
        </label>
        <label className={styles.label} htmlFor={numberId}>
          Number
          <input
            className={styles.input}
            name="number"
            value={number}
            onChange={onChange}
            type="number"
          />
        </label>

        <button className={styles.btnAdd} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

CreateContact.propTypes = {
  name: PropTypes.string.isRequired,
  nameId: PropTypes.string.isRequired,
  numberId: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CreateContact;
