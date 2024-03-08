import React from 'react';
import css from './CatalogPage.module.css';
import FilterContainer from '../../components/FilterContainer/FilterContainer';
import Cars from 'components/Cars/Cars';

const CatalogPage = () => {
  return (
    <main className={css.main_catalog_page}>
      <div className={`container ${css.catalog_container}`}>
        <FilterContainer />
        <Cars />
      </div>
    </main>
  );
};

export default CatalogPage;
