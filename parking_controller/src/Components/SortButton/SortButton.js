import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './SortButton.module.css';

const SortButton = ({ icon, column, direction }) => {
  const sort = useSelector(state => state.sort);
  const dispatch = useDispatch();
  
  return (
    <button
      className={(sort[0] === column && sort[1] === direction) ? classes.active : classes.button}
      onClick={() => dispatch({type: 'SET_SORT', payload: [column, direction]})}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  )
}

export { SortButton };