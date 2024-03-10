import React, { useEffect, useState } from 'react';
import css from './CatalogPage.module.css';
import FilterContainer from '../../components/FilterContainer/FilterContainer';
import Cars from 'components/Cars/Cars';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars, getCars, loadMore } from '../../redux/cars/cars.reducer';
import { selectCars, selectTotalCars } from '../../redux/cars/cars.selectors';
import Modal from 'components/Modal/Modal';
import { selectIsOpenModal } from '../../redux/modal/modal.selector';
import { selectFilteredCars } from '../../redux/filters/filters.selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const totalHits = useSelector(selectTotalCars).length;
  const isOpenModal = useSelector(selectIsOpenModal);
  const filteredCars = useSelector(selectFilteredCars);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(getCars({ page: page, limit: 12 }));
    // eslint-disable-next-line
  }, [dispatch]);

  const handlerLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(loadMore({ page: nextPage, limit: 12 }));
  };

  const visibleCars = filteredCars === null ? cars : filteredCars;

  let isVisibleLoadMore = false;

  if (totalHits > 12 && Math.ceil(totalHits / 12) > page) {
    isVisibleLoadMore = true;
  }
  return (
    <div className={`container ${css.catalog_container}`}>
      <FilterContainer />
      <Cars cars={visibleCars} />
      {isVisibleLoadMore && (
        <button className={css.load_more_btn} onClick={handlerLoadMore}>
          Load more
        </button>
      )}
      {isOpenModal && <Modal />}
    </div>
  );
};

export default CatalogPage;
