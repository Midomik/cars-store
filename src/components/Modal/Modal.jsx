import React, { useEffect } from 'react';
import css from './Modal.module.css';
import { CloseModalIcon, LineIcon } from 'assets/sprite';
import { useDispatch, useSelector } from 'react-redux';
import { setCloseModal } from '../../redux/modal/modal.reducer';
import { selectModalData } from '../../redux/modal/modal.selector';

const Modal = () => {
  const dispatch = useDispatch();
  const cardInfo = useSelector(selectModalData);

  const closeModal = () => {
    dispatch(setCloseModal());
    document.body.style.overflow = 'auto';
  };

  const closeModalFromOverlay = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const closeModalFromEsc = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModalFromEsc);
    console.log(1313);
    return () => {
      window.removeEventListener('keydown', closeModalFromEsc);
    };
  }, []);

  if (!cardInfo) {
    return;
  }
  const {
    make,
    id,
    model,
    year,
    address,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
    img,
  } = cardInfo;
  const [, city, country] = address.split(', ');
  return (
    <div onClick={closeModalFromOverlay} className={css.modal_owerlay}>
      <div className={css.modal}>
        <button onClick={closeModal} className={css.close_btn}>
          <CloseModalIcon />
        </button>

        <img className={css.car_img} src={img} alt={make} />

        <h2 className={css.car_make_model_year}>
          {' '}
          <span>{make}</span> <span className={css.card_model}>{model}</span>,{' '}
          <span>{year}</span>
        </h2>

        <p className={css.car_city_country_id_year_type}>
          <span>{city}</span>
          <LineIcon />
          <span>{country}</span>
          <LineIcon />
          <span>{id}</span>
          <LineIcon />
          <span>{year}</span>
          <LineIcon />
          <span>{type}</span>
        </p>

        <p className={css.car_fuel_engine}>
          <span>Fuel Consumption: {fuelConsumption}</span>
          <LineIcon />
          <span>Engine Size: {engineSize}</span>
        </p>

        <h3 className={css.car_descr}>{description}</h3>

        <h3 className={css.car_title_access_function}>
          Accessories and functionalities:
        </h3>

        <div className={css.car_access_function}>
          <p className={css.car_accessories}>
            {accessories.map((item, index) => [
              <span key={index}>{item}</span>,
              index !== accessories.length - 1 && <LineIcon key={index + 1} />,
            ])}
          </p>

          <p className={css.car_functionalities}>
            {functionalities.map((item, index) => [
              <span key={index}>{item}</span>,
              index !== functionalities.length - 1 && (
                <LineIcon key={index + 1} />
              ),
            ])}
          </p>
        </div>

        <h3 className={css.title_rental_conditions}>Rental Conditions: </h3>

        <div className={css.rental_conditions}>
          {rentalConditions.split('\n').map((part, index) => {
            const match = part.match(/\d+/);
            if (match) {
              const age = match[0];
              const [before, after] = part.split(age);
              return (
                <p key={index} className={css.car_rental_condition}>
                  {before}
                  <span className={css.car_number}>{age}</span>
                  {after}
                </p>
              );
            } else {
              return (
                <p key={index} className={css.car_rental_condition}>
                  {part}
                </p>
              );
            }
          })}

          <p className={css.car_rental_condition}>
            Mileage: <span className={css.car_number}>{mileage}</span>{' '}
          </p>

          <p className={css.car_rental_condition}>
            Price: <span className={css.car_number}>{rentalPrice}</span>
          </p>
        </div>

        <a href="tel:+380730000000" className={css.car_rental_btn}>
          Rental car
        </a>
      </div>
    </div>
  );
};

export default Modal;
