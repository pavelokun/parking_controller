import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Table as TableBootstrap, Spinner } from 'react-bootstrap';
import { getCars, getCarsOnTerritory } from '../../Store/Actions/Actions';
import { selectCars } from '../../Store/Selectors/Selectors';
import {
  faArrowDown,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import classes from './Table.module.css';
import { SortButton } from '../SortButton/SortButton';

const Table = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
    dispatch(getCarsOnTerritory());
  }, [dispatch]);

  return (
    <>
    { cars.length 
      ? <TableBootstrap bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>
            <div className={classes.sort_th}>
              Car number
              <div>
                <SortButton 
                  icon={faArrowUp}
                  column='car_number'
                  direction='asc'
                />
                <SortButton 
                  icon={faArrowDown}
                  column='car_number'
                  direction='desc'
                />
              </div>              
            </div>            
          </th>
          <th>
            <div className={classes.sort_th}>
              Tenant
              <div>
                <SortButton 
                  icon={faArrowUp}
                  column='car_tenant.name'
                  direction='asc'
                />
                <SortButton 
                  icon={faArrowDown}
                  column='car_tenant.name'
                  direction='desc'
                />
              </div>
            </div>
            
          </th>
          <th>Brand</th>
          <th>Model</th>
        </tr>
      </thead>
      <tbody>
        {
          cars.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.car_number}</td>
                <td>{item.car_tenant.name}</td>
                <td>{item.car_brand ? `${item.car_brand.name}` : null}</td>
                <td>{item.car_model ? `${item.car_model.name}` : null}</td>
              </tr>
            );
          })
        }
      </tbody>
    </TableBootstrap>
    : <Spinner className={classes.spinner} animation="border" variant="secondary" />
    }
  </>   
  );
}

export default Table;