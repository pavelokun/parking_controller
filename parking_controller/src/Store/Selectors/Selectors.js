import { createSelector } from 'reselect';
const _ = require('lodash');

const filterAndSortCars = (cars, carsOnTerritory, sort, search, isCarsOnTerritoryOnly, hiddenTenantsList) => {
  let carsArray = [...cars];
  if (isCarsOnTerritoryOnly) {
    const carsOnTerritoryIds = carsOnTerritory.map(car => car.car);
    carsArray = carsArray.filter(car => carsOnTerritoryIds.includes(car.id))
  }

  if (hiddenTenantsList.length) {
    const values = hiddenTenantsList.map(tenant => tenant.value);
    carsArray = carsArray.filter(car => !values.includes(car.car_tenant.name))
  }

  if (search.length) {
    // try {
      const searchRegex = new RegExp(search, 'i');
      carsArray = carsArray.filter(car => [car.car_number].find((str) => searchRegex.test(str)));
    // } catch (e) {
    //   return carsArray;
    // }
  }

  if (sort.length) {
    carsArray = _.orderBy(carsArray, sort[0], sort[1]);
  }

  return carsArray;
}

export const selectTenants = createSelector(
  state => state.tenants,
  tenants => tenants.map(tenant => ({value: tenant.name, label: tenant.name})) 
)

export const selectCars = createSelector(
  state => state.cars,
  state => state.carsOnTerritory,
  state => state.sort,
  state => state.search,
  state => state.isCarsOnTerritoryOnly,
  state => state.hiddenTenantsList,
  (cars, carsOnTerritory, sort, search, isCarsOnTerritoryOnly, hiddenTenantsList) => filterAndSortCars(cars, carsOnTerritory, sort, search, isCarsOnTerritoryOnly, hiddenTenantsList)
)