import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '@material-ui/core';
import { setFilters } from '../actions';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilters(value));
    // then maybe call dispatch on fetchBooks again
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Input
        id="search"
        placeholder="Search"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
