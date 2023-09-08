import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter';
import { Header } from './App.styled';

const getCommonContacts = () => {
  return (
    JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
};

export const App = () => {
  const [contacts, setContacts] = useState(getCommonContacts);
  const [filter, setFilter] = useState('');

  const createContact = data => {
    if (
      contacts.find(newContact =>
        newContact.name.toLowerCase().includes(data.name.toLowerCase())
      )
    ) {
      alert(`${data.name} already in contacts`);
      return;
    }
    setContacts(prev => [...prev, data]);
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = () => {
    return contacts.filter(newContact =>
      newContact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    return setContacts(prev =>
      prev.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Header>Phonebook</Header>
      <ContactForm createContact={createContact} />
      <Header>Contacts</Header>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList options={filteredContacts()} onDelete={deleteContact} />
    </div>
  );
};
