import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import style from './AppContainer.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onAddContact = contact => {
    if (this.state.contacts.some(item => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onChangeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getAddedContacts = () => {
    const { filter, contacts } = this.state;
    const toLowerCaseFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(toLowerCaseFilter)
    );
  };

  render() {
    return (
      <div className={style.appContainer}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onAddContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onChangeFilter} />
        <ContactsList
          contactsArr={this.getAddedContacts()}
          deleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
