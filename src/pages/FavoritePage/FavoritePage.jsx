import React, { useEffect, useState } from 'react';
import css from './FavoritePage.module.css';
import Cars from 'components/Cars/Cars';
import FilterContainer from 'components/FilterContainer/FilterContainer';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectFavorites } from '../../redux/cars/cars.selectors';
import { getCars } from '../../redux/cars/cars.reducer';
import { selectIsOpenModal } from '../../redux/modal/modal.selector';
import Modal from 'components/Modal/Modal';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const favoritesIds = useSelector(selectFavorites);
  const isOpenModal = useSelector(selectIsOpenModal);
  const favoriteCars = cars.filter(car =>
    favoritesIds.includes(car.id.toString())
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = favoriteCars.slice(0, endIndex);

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    dispatch(getCars({}));
  }, [dispatch]);
  return (
    <div className={`container ${css.favorite_container}`}>
      <FilterContainer />
      <Cars cars={currentItems} />

      {isOpenModal && <Modal />}
      {endIndex < favoriteCars.length && (
        <button className={css.load_more_btn} onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default FavoritePage;
