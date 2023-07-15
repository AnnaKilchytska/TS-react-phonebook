import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

import css from './Filter.module.css';
import { TextField } from '@mui/material';

function Filter() {
  const dispatch = useDispatch();
  return (
    <div className={css.filterContainer}>
      {/* <input
        type="text"
        onChange={e => dispatch(filterContacts(e.target.value))}
        placeholder="Start typing to find a contact"
      /> */}

      <TextField
        fullWidth
        size="small"
        id="outlined-filter"
        label="Start typing to find a contact"
        type="text"
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </div>
  );
}

export default Filter;
