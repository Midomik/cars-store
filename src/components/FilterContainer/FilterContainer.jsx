import React from "react";
import css from "./FilterContainer.module.css";
import { useSelector } from "react-redux";
import {
  selectBrands,
  selectRentalPrices,
} from "../../redux/filters/filters.selectors";
import Select from "react-select";
import { customStyles } from "./selectStyles";

const FilterContainer = () => {
  const brands = useSelector(selectBrands);
  const rentalPrices = useSelector(selectRentalPrices);
  console.log(rentalPrices);

  return (
    <div className={css.filter_container}>
      <form className={css.filter_form}>
        <label className={css.select_brand_label}>
          <p className={css.select_title}>Car brand</p>
          <Select
            options={brands.map((brand) => ({
              value: brand,
              label: brand,
            }))}
            placeholder="Enter the text"
            styles={customStyles}
          />
        </label>

        <label className={css.select_rental_price_label}>
          <p className={css.select_title}>Price/ 1 hour</p>
          <Select
            className={css.filter_select}
            options={rentalPrices.map((price) => ({
              value: price,
              label: price,
            }))}
            placeholder="To $"
            heiight={48}
            styles={customStyles}
          />
        </label>

        <label>
          <p className={css.select_title}>Car mileage / km</p>

          <input
            className={css.mileage_from}
            type="text"
            name="mileage-from"
            placeholder="From"
          />

          <input
            className={css.mileage_to}
            type="text"
            name="mileage-to"
            placeholder="To"
          />
        </label>

        <button className={css.filter_btn_submit} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default FilterContainer;
