import React from 'react';

import CarsItem from './CarsItem/CarsItem';
import css from './Cars.module.css';

const Cars = ({ cars }) => {
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
            // fuelConsumption,
            // engineSize,
            // description,
            // rentalConditions,
            // mileage,
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
              //   fuelConsumption={fuelConsumption}
              //   engineSize={engineSize}
              //   description={description}
              //   rentalConditions={rentalConditions}
              //   mileage={mileage}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Cars;
