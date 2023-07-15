import { useDispatch } from 'react-redux';
import { editContact } from 'redux/operations';
import { TextField } from '@mui/material';
import css from './EditindForm.module.css';

const EditingForm = ({ id, nameProp, numberProp, onSubmit }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements.name.value === '' && form.elements.number.value === ``) {
      onSubmit();
      return;
    }

    if (form.elements.name.value === '') {
      dispatch(
        editContact({
          id,
          body: {
            number: form.elements.number?.value,
          },
        })
      );
    }
    if (form.elements.number.value === '') {
      dispatch(
        editContact({
          id,
          body: {
            name: form.elements.name?.value,
          },
        })
      );
    }

    dispatch(
      editContact({
        id,
        body: {
          name: form.elements.name?.value,
          number: form.elements.number?.value,
        },
      })
    );
    form.reset();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className={css.EditingForm}>
      {/* <label htmlFor="name" className={css.inputLabel}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={nameProp}
        />
      </label>
      <label htmlFor="number" className={css.inputLabel}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={numberProp}
        />
      </label> */}

      <TextField
        id="outlined-name"
        label="Change contact name"
        type="text"
        className={css.input}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        defaultValue={nameProp}
        size="small"
      />

      <TextField
        id="outlined-number"
        label="Change contact number"
        type="tel"
        className={css.input}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        defaultValue={numberProp}
        size="small"
      />

      <button type="submit" className={css.formButton}>
        Update contact
      </button>
    </form>
  );
};

export default EditingForm;
