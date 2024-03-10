import React, { useState } from 'react';
import css from './FilterContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBrands,
  selectRentalPrices,
} from '../../redux/filters/filters.selectors';
import Select from 'react-select';
import { customStyles } from './selectStyles';
import { filterCars } from '../../redux/filters/filters.reducer';
import { selectTotalCars } from '../../redux/cars/cars.selectors';

const FilterContainer = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const rentalPrices = useSelector(selectRentalPrices);
  const cars = useSelector(selectTotalCars);
  const [modelChoice, setModelChoice] = useState('');
  const [rentalPriceChoice, setRentalPriceChoice] = useState('');

  const handlerFormFilter = e => {
    e.preventDefault();
    const { from, to } = e.target.elements;
    const barnd = modelChoice.value === undefined ? '' : modelChoice.value;
    const rentalPrice =
      rentalPriceChoice.value === undefined ? '' : rentalPriceChoice.value;
    const mileageFrom = from.value;
    const mileageTo = to.value;
    const data = {
      cars,
      filterInfo: { barnd, rentalPrice, mileageFrom, mileageTo },
    };
    dispatch(filterCars(data));
  };

  return (
    <div className={css.filter_container}>
      <form onSubmit={handlerFormFilter} className={css.filter_form}>
        <label className={css.select_brand_label}>
          <p className={css.select_title}>Car brand</p>
          <Select
            options={brands.map(brand => ({
              value: brand,
              label: brand,
            }))}
            placeholder="Enter the text"
            styles={customStyles}
            onChange={choice => setModelChoice(choice)}
          />
        </label>

        <label className={css.select_rental_price_label}>
          <p className={css.select_title}>Price/ 1 hour</p>
          <Select
            className={css.filter_select}
            options={rentalPrices.map(price => ({
              value: price,
              label: price,
            }))}
            placeholder="To $"
            heiight={48}
            styles={customStyles}
            onChange={choice => setRentalPriceChoice(choice)}
          />
        </label>

        <label>
          <p className={css.select_title}>Car mileage / km</p>

          <input
            className={css.mileage_from}
            type="text"
            name="from"
            placeholder="From"
          />

          <input
            className={css.mileage_to}
            type="text"
            name="to"
            placeholder="To"
          />
        </label>

        <button className={css.filter_btn_submit}>Search</button>
      </form>
    </div>
  );
};

export default FilterContainer;
