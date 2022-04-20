import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as React from 'react';

const SearchBar = ({ query, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <TextField id="outlined-basic" label="Masukan GIPHY" variant="outlined" type="text" name="query" value={query} onChange={onChange} />
      <br/>
      <Button type="submit" variant="contained">Search</Button>
    </form>
  );
};

export default SearchBar;
