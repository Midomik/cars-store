import React, { useEffect, useRef, useState } from 'react';
import css from './CarsItem.module.css';
import { LineIcon } from 'assets/sprite';

const CarsItem = ({
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
}) => {
  const [, city, country] = address.split(', ');
  const containerRef = useRef(null);
  const [showPremium, setShowPremium] = useState(true);

  useEffect(() => {
    const containerWidthWithoutGap = 225;
    const spans = Array.from(containerRef.current.getElementsByTagName('span'));
    let totalWidth = 0;
    spans.forEach(span => {
      totalWidth += span.offsetWidth;
    });
    setShowPremium(totalWidth <= containerWidthWithoutGap);
  }, [city, country, rentalCompany]);

  const functionality = functionalities.reduce((shortest, current) => {
    return current.length < shortest.length ? current : shortest;
  }, functionalities[0]);

  return (
    <li className={css.card_item}>
      <img className={css.card_img} src={img} alt={make} />

      <div className={css.card_main_title}>
        <h3 className={css.card_make_model_year}>
          <div className={css.make_model_year_container}>
            <span className={css.card_make}>{make}</span>{' '}
            <span className={css.card_model}>{model}</span>{' '}
            <span className={css.card_year}>{year}</span>
          </div>
          <span className={css.card_rental_price}>{rentalPrice}</span>
        </h3>
      </div>

      <div className={css.card_description}>
        <p ref={containerRef} className={css.card_addres_company_premium}>
          <span className={css.card_city}>{city}</span> <LineIcon />{' '}
          <span className={css.card_country}>{country}</span> <LineIcon />
          <span className={css.card_company}>{rentalCompany}</span>
          {showPremium && <LineIcon />}
          {showPremium && <span>Premium</span>}
        </p>

        <p className={css.card_type_model_mileage_functionality}>
          <span>{type}</span> <LineIcon /> <span>{model}</span> <LineIcon />{' '}
          <span>{id}</span> <LineIcon />{' '}
          <span className={css.card_functionality}>{functionality}</span>
        </p>
      </div>

      <button className={css.card_btn_learn_more}>Learn more</button>
    </li>
  );
};

export default CarsItem;
