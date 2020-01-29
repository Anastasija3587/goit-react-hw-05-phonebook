import React, { Component } from 'react';
import shortid from 'shortid';
import { CSSTransition } from 'react-transition-group';
import CreateContact from './CreateContact/CreateContact';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import './App.css';
import PopUp from './PopUp/PopUp';
import slide from '../transitions/slide.module.css';
import PopUpFillForm from './PopUpFillForm/PopUpFillForm';

const filterContactsByQuery = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
    toggleExist: false,
    toggleFullForm: false,
  };

  inputIds = {
    nameId: shortid.generate(),
    numberId: shortid.generate(),
    filterId: shortid.generate(),
  };

  componentDidMount() {
    try {
      const persistedContacts = localStorage.getItem('contacts');
      if (persistedContacts) {
        const contacts = JSON.parse(persistedContacts);

        this.setState({ contacts });
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    try {
      const { contacts } = this.state;
      if (prevState.contacts !== contacts) {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  closePopUp = () => {
    if (this.state.toggleExist || this.state.toggleFullForm) {
      this.setState({ toggleExist: false, toggleFullForm: false });
    }
  };

  handleSubmit = e => {
    const { name, number, contacts } = this.state;
    e.preventDefault();
    const createContact = {
      id: shortid.generate(),
      name,
      number,
    };
    if (contacts.find(contact => contact.name === name)) {
      this.setState(prevState => ({ toggleExist: !prevState.toggleExist }));
    } else if (
      createContact.name.trim() === '' ||
      createContact.number.trim() === ''
    ) {
      this.setState(prevState => ({
        toggleFullForm: !prevState.toggleFullForm,
      }));
    } else {
      this.setState(state => ({
        contacts: [...state.contacts, createContact],
      }));
    }

    this.resetForm();
  };

  handleDelete = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const {
      name,
      contacts,
      number,
      filter,
      toggleExist,
      toggleFullForm,
    } = this.state;
    const { nameId, numberId, filterId } = this.inputIds;
    const filtedContacts = filterContactsByQuery(contacts, filter);
    return (
      <div onClick={this.closePopUp} role="presentation">
        <CSSTransition in timeout={500} appear classNames="title">
          <h1 className="title">Phonebook</h1>
        </CSSTransition>
        <CSSTransition
          in={toggleExist}
          timeout={250}
          unmountOnExit
          classNames={slide}
        >
          <PopUp />
        </CSSTransition>
        <CSSTransition
          in={toggleFullForm}
          timeout={250}
          unmountOnExit
          classNames={slide}
        >
          <PopUpFillForm />
        </CSSTransition>
        <CreateContact
          name={name}
          nameId={nameId}
          number={number}
          numberId={numberId}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <h2 className="title">Contacts</h2>
        <Filter
          contacts={contacts}
          filter={filter}
          onChange={this.handleChange}
          filterId={filterId}
        />
        <Contacts contacts={filtedContacts} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
