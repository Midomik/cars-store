import React, { useEffect, useState } from 'react';
import css from './CatalogPage.module.css';
import FilterContainer from '../../components/FilterContainer/FilterContainer';
import Cars from 'components/Cars/Cars';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars, getCars } from '../../redux/cars/cars.reducer';
import { selectCars, selectTotalCars } from '../../redux/cars/cars.selectors';
import Modal from 'components/Modal/Modal';
import { selectIsOpenModal } from '../../redux/modal/modal.selector';
// import { setOpenModal } from '../../redux/modal/modal.reducer';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const totalHits = useSelector(selectTotalCars);
  const isOpenModal = useSelector(selectIsOpenModal);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(getCars({ page: page, limit: 12 }));
    console.log('dasc');
  }, [dispatch, page]);

  const handlerLoadMore = () => {
    setPage(page + 1);
  };

  let isVisibleLoadMore = false;
  if (totalHits > 12 && Math.ceil(totalHits / 12) > page) {
    isVisibleLoadMore = true;
  }

  return (
    <div className={`container ${css.catalog_container}`}>
      <FilterContainer />
      <Cars cars={cars} />
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
