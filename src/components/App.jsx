import React, { Component } from "react";
import ContactsList from "./Contacts-list/Contacts-list";
import Form from "./Form";
import Filter from "./Filter";
import Section from './Section';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  handleFormSubmit = data => {
    if (this.state.contacts.some(({ name }) => name === data.name)) {
      alert(`${data.name} is already in contacts!`);
      return;
    }
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, data] }
    })
  }

  handleDeleteBtn = idToDelete => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(({ id }) => id !== idToDelete) }
    })
  }

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value })
  }

  render() {
    const { contacts, filter } = this.state;
    const optimizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({name}) => name.toLowerCase().includes(optimizedFilter))

    return (
      <div>
        <h1>Phonebook</h1>
        <Section>
          <Form onSubmit={this.handleFormSubmit} />
        </Section>
        <Section>
          <h2>Contacts</h2>
          <Filter filter={filter} filterHandler={this.handleFilter} />
          <ContactsList contacts={filteredContacts} onDeleteBtn={this.handleDeleteBtn} />
        </Section>
      </div>
    );
  }
};
