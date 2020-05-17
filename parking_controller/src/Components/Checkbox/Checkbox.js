import React from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox as Box, FormControlLabel } from '@material-ui/core';

const Checkbox = () => {
  const dispatch = useDispatch();
  return (
    <FormControlLabel 
      control={
        <Box
          onChange={() => dispatch({type: 'SET_TERRITORY_ONLY'})}
          name="carsOnTerritory"
          color="primary"
        />
      }
      label='Cars on territory'
    />
  );
}

export default Checkbox;