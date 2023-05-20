import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from "./Filter/Filter";

export const App = () => {

  const[contacts, setContacts] = useState([])
  const[filter, setFilter] = useState('')

  useEffect(() => {
    const localData = localStorage.getItem('contacts')
    if (localData) {
      setContacts(JSON.parse(localData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const addContact = (e) => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const isDuplicateName = contacts.some(contact => contact.name === name.value);
    if (isDuplicateName) {
      alert(`${name.value} is already in contacts`);
    } else {
      const newContact = {
        id: nanoid(),
        name: name.value,
        number: number.value
      };
      setContacts(prevState => [...prevState, newContact]);
    }
  }

  const removeContact = (id) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  }

  const addFilter = (e) => {
    setFilter(e.target.value)
  }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter addFilter={addFilter} />
      <ContactList contacts={contacts} filter={filter} onDelete={removeContact} />
    </>
  )
};
