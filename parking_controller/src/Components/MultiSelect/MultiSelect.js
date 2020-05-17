import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { selectTenants } from '../../Store/Selectors/Selectors';
import { getTenants } from '../../Store/Actions/Actions';
import classes from './MultiSelect.module.css';

const MultiSelect = () => {
  const tenants = useSelector(selectTenants);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTenants());
  }, [dispatch]); 

  return (
    <Select 
      className={classes.multiselect}
      placeholder="Hide tenants"
      isMulti
      name="multiselect"
      options={tenants}
      onChange={(hiddenTenants) => dispatch({type: 'SET_HIDDEN_TENANTS', payload: hiddenTenants})}
    />
  )
};

export default MultiSelect;