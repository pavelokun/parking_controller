import React from 'react';
import Table from './Components/Table';
import AddCarForm from './Components/AddCarForm';
import SearchField from './Components/SearchField';
import MultiSelect from './Components/MultiSelect';
import Checkbox from './Components/Checkbox';
import ModalWindow from './Components/ModalWindow';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.app}>
    <form className={classes.form}>
      <SearchField />
      <MultiSelect />
      <Checkbox /> 
    </form>    
    <ModalWindow
      openButtonTitle='Add car'
      heading='Add car'>
      <AddCarForm />
    </ModalWindow>
    <Table />
    </div>
  );
}

export default App;
