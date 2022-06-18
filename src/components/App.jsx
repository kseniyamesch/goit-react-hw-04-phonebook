import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts'))
  );
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      return alert(`${data.name} is already in Contact List`);
    }

    setContacts(state => [...state, contact]);
  };

  const deleteItem = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  const onFilter = evt => {
    const { value } = evt.currentTarget;
    setFilter(value.trim);
  };

  const renderContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler}></ContactForm>
      <h2>Contacts</h2>
      <Filter filter={filter} onFilter={onFilter}></Filter>
      <ContactList contacts={renderContact()} handleDelete={deleteItem} />
    </div>
  );
}
