import { Component } from "react";
import { nanoid } from 'nanoid'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
    const localData = localStorage.getItem('contacts')
    if (localData) {
      this.setState({contacts: JSON.parse(localData)})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
}

  addContact = (e) => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const isDuplicateName = this.state.contacts.some(contact => contact.name === name.value);
    if (isDuplicateName) {
      alert(`${name.value} is already in contacts`);
    } else {
      const newContact = {
        id: nanoid(),
        name: name.value,
        number: number.value
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact]
      }));
    }
  }

  removeContact = (id) => {
    this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  }

  addFilter = (e) => {
    this.setState({ filter: e.target.value })
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter addFilter={this.addFilter} />
        <ContactList contacts={this.state.contacts} filter={this.state.filter} deleter={this.removeContact} />
      </>
    )
  };
};
