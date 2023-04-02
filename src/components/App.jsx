// import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useSelector } from "react-redux";
import { getContacts } from 'redux/selectors';


export default function App() {

  // const [contacts, setContacts] = useState(() => {
  //    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts]);


  // const addContact = (newContact) => {
  //   const arrayOfContactsName = contacts.map(contact => contact.name);

  //   if (arrayOfContactsName.includes(newContact.name)) {
  //    alert (`${newContact.name} is already in contacts`);
  //     return;
  //   }
  //   setContacts([...contacts, newContact])
  // };

  // const addNameFilter = (event) => {
  //   setFilter(event.currentTarget.value );
  // };

  // const deleteContact = (name) => {
  //   setContacts(contacts.filter(contact => contact.name !== name));
  // };

  const contacts = useSelector(getContacts);
  // const normalizedFilter = filter.toLowerCase();
  // const filtredComponents = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    
    return (
      <div>
         <GlobalStyle />
         <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        {contacts.length > 0 && <ContactList />}
      </div>
    );
  
  // return (
  //     <div>
  //        <GlobalStyle />
  //        <h1>Phonebook</h1>
  //       <ContactForm onSubmit={addContact} />

  //       <h2>Contacts</h2>
  //       <Filter filter={filter} onChange={addNameFilter} />
  //       {filtredComponents.length > 0 && <ContactList items={filtredComponents} onDelete={deleteContact} />}
  //     </div>
  //   );
};
