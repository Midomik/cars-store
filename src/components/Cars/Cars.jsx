import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../redux/cars/cars.reducer';
import { selectCars } from '../../redux/cars/cars.selectors';
import CarsItem from './CarsItem/CarsItem';
import css from './Cars.module.css';

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  console.log(cars);

  return (
    <div className={css.card_list_container}>
      <ul className={css.cars_list}>
        {cars.map(car => {
          const {
            id,
            make,
            img,
            address,
            rentalCompany,
            type,
            model,
            accessories,
            rentalPrice,
            functionalities,
            year,
          } = car;

          return (
            <CarsItem
              key={id}
              id={id}
              make={make}
              img={img}
              address={address}
              rentalCompany={rentalCompany}
              type={type}
              model={model}
              accessories={accessories}
              rentalPrice={rentalPrice}
              functionalities={functionalities}
              year={year}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Cars;
