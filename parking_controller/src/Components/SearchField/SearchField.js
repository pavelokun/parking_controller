import React from 'react';
import { useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';
import classes from './SearchField.module.css';

const SearchField = () => {
  const dispatch = useDispatch();
  return (
      <TextField
        className={classes.search}
        label="Search car number"
        variant="outlined"
        color="primary"
        size="small"
        onChange={(event) => dispatch({type: 'SET_SEARCH', payload: event.target.value})}
      />
  )
};

export default SearchField;