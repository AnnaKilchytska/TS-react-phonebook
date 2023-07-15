import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact, fetchContacts } from 'redux/operations';
import { getError, getFilteredContacts, getIsLoading } from 'redux/selectors';
import { useEffect, useState } from 'react';
import { Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EditingForm from 'components/EditingForm/EditingForm';

function ContactList() {
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [id, setId] = useState(null);

  const toggleIsBeingEdited = () => setIsBeingEdited(!isBeingEdited);

  const handleEdit = id => {
    toggleIsBeingEdited();
    setId(id);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <>
      {isLoading === true && <div className={css.isLoading}>Loading...</div>}
      {error && <div className={css.error}>{error}...Try again!</div>}
      <ul className={css.contactList}>
        {filteredContacts.map(contact => {
          return (
            <li
              key={contact.id}
              id={contact.id}
              className={css.contactListItem}
            >
              <span className={css.contactListName}>{contact.name}</span>
              <span className={css.contactListNumber}>{contact.number}</span>

              <button
                className={css.deleteButton}
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </button>
              <Fab
                style={{ backgroundColor: '#4242e5' }}
                className={css.fab}
                onClick={() => handleEdit(contact.id)}
                size="small"
                color="secondary"
                aria-label="edit"
              >
                <EditIcon />
              </Fab>
              {id === contact.id && isBeingEdited && (
                <EditingForm
                  id={contact.id}
                  nameProp={contact.name}
                  numberProp={contact.number}
                  onSubmit={toggleIsBeingEdited}
                />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ContactList;
