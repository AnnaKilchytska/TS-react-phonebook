import { nanoid } from '@reduxjs/toolkit';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import css from './ContactForm.module.css';
// import { type } from 'os';
import { TextField } from '@mui/material';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { Contact } from 'types/Contact';

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const contacts = useSelector(getContacts);

  const dispatch = useAppDispatch();

  const handleInputChange: React.EventHandler<
    React.SyntheticEvent<any, Event>
  > = event => {
    const { name, value } = event.target as HTMLInputElement;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  // type ContactItemInterface = {
  //   id: string;
  //   name: string;
  //   number: string;
  // }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const contact: Contact = {
      id: nanoid(),
      name,
      number,
    };

    const isInContacts = contacts.find(
      (item: any) => item.name.toLowerCase() === contact.name?.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contact list!`);
      return;
    }

    console.log('contact after submit', contact);

    dispatch(addContact(contact));
    //seems like I need to fix operations file and add function types
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.ContactForm}>
      {/* <label htmlFor="name" className={css.inputLabel}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
          value={name}
        />
      </label> */}
      {/* <label htmlFor="number" className={css.inputLabel}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
          value={number}
        /> */}
      {/* </label> */}

      <TextField
        id="outlined-name"
        label="Name"
        type="text"
        className={css.input}
        name="name"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
        value={name}
        size="small"
      />

      <TextField
        id="outlined-number"
        label="Number"
        type="tel"
        className={css.input}
        name="number"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleInputChange}
        value={number}
        size="small"
      />

      <button type="submit" className={css.formButton}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
