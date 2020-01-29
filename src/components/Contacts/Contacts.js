import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './Contact.module.css';
import Contact from './Contact';
import slide from '../../transitions/slide.module.css';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      <TransitionGroup component="ul">
        {contacts.map(contact => (
          <CSSTransition
            key={contact.id}
            unmountOnExit
            classNames={slide}
            timeout={250}
          >
            <li className={styles.item}>
              <Contact onDelete={onDelete} contact={contact} />
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
