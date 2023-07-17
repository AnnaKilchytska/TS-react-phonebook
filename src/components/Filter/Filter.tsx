import { filterContacts } from 'redux/filterSlice';

import css from './Filter.module.css';
import { TextField } from '@mui/material';
import { useAppDispatch } from 'hooks/useAppDispatch';

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
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
};

export default Filter;
