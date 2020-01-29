import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import pop from '../../transitions/slide.module.css';
import styles from './Filter.module.css';

const Filter = ({ filterId, onChange, filter, contacts }) => {
  return (
    <CSSTransition
      in={contacts.length > 1}
      timeout={250}
      classNames={pop}
      unmountOnExit
    >
      <label htmlFor={filterId}>
        filter contacts by name
        <input
          className={styles.input}
          id={filterId}
          value={filter}
          name="filter"
          type="text"
          onChange={onChange}
        />
      </label>
    </CSSTransition>
  );
};

Filter.propTypes = {
  filterId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Filter;
