import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getCarBrands, getCarModels, postCar } from '../../Store/Actions/Actions';
import classes from './AddCarForm.module.css';

const AddCarForm = () => {

  const [carObject, setCarObject] = useState({
    car_brand: '',
    car_model: '',
    car_tenant: '',
    car_number: ''
  })

  const tenants = useSelector(state => state.tenants);
  const brands = useSelector(state => state.brands);
  const models = useSelector(state => state.models);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarBrands());
  }, [dispatch]);

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCarObject({
      ...carObject,
      [name]: value
    })
    if (name === 'car_brand') dispatch(getCarModels(value));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(postCar(carObject));
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label>
        Car number:
        <input
          className={classes.input}
          name="car_number"
          type="text"
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Tenant:
        <select 
          className={classes.input}
          name="car_tenant"
          onChange={handleInputChange}
          required>
          <option></option>
          {
            tenants.map(tenant => <option key={tenant.name} value={tenant.id}>{tenant.name}</option>)
          }
        </select>
      </label>
      <label>
        Car brand:
        <select 
          className={classes.input}
          name="car_brand"
          onChange={handleInputChange}
          required>
          <option></option>
          {
            brands.map(brand => <option key={brand.name} value={brand.id}>{brand.name}</option>)
          }
        </select>
      </label>
      <label>
        Car model:
        <select 
          className={classes.input}
          name="car_model"
          disabled={!models.length}
          onChange={handleInputChange}
          required>
        <option></option>
          {
            models.map(model => <option key={model.name} value={model.id}>{model.name}</option>)
          }
        </select>
      </label>      
      <Button variant="primary" type='submit'>Add</Button>
    </form>
  )
}

export default AddCarForm;