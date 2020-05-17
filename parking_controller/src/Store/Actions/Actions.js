// const _ = require('lodash');

const setCars = (cars) => {
  return {type: 'SET_CARS', payload: cars};
}

const setCarsOnTerritory = (cars) => {
  return {type: 'SET_CARS_ON_TERRITORY', payload: cars};
}

const setTenants = (tenants) => {
  return {type: 'SET_TENANTS', payload: tenants};
}

const setCarBrands = (brands) => {
  return {type: 'SET_CAR_BRANDS', payload: brands};
}

const setCarModels = (models) => {
  return {type: 'SET_CAR_MODELS', payload: models};
}

export const getCars = () => {
  return async dispatch => {
    const response = await fetch('http://80.249.84.47:11000/api/cars/');
    const data = await response.json();
    dispatch(setCars(data))
  }
}

export const getCarsOnTerritory = () => {
  return async dispatch => {
    const response = await fetch('http://80.249.84.47:11000/api/stat/here/');
    const data = await response.json();
    dispatch(setCarsOnTerritory(data))
  }
}

export const getTenants = () => {
  return async dispatch => {
    const response = await fetch('http://80.249.84.47:11000/api/tenants/');
    const data = await response.json();
    dispatch(setTenants(data))
  }
}

export const getCarBrands = () => {
  return async dispatch => {
    const response = await fetch('http://80.249.84.47:11000/api/cars/brands/');
    const data = await response.json();
    dispatch(setCarBrands(data));
  }
}

export const getCarModels = (id) => {
  return async dispatch => {
    console.log(id);
    
    if (id) {
      const response = await fetch(`http://80.249.84.47:11000/api/cars/brands/${id}/`);
      const data = await response.json();
      dispatch(setCarModels(data));
      return;
    }
    dispatch(setCarModels([]));
  }
}

export const postCar = (data) => {
  return async dispatch => {
    console.log(JSON.stringify(data));
    
    const url = 'http://80.249.84.47:11000/api/cars/add/';
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.ok);
      const json = await response.json();
      console.log('Успех:', json);
      dispatch(getCars());
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }
}