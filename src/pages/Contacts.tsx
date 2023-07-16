import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';

const Contacts: React.FC = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>

      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
