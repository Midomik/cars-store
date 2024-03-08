import React from "react";
import css from "./CatalogPage.module.css";
import FilterContainer from "../../components/FilterContainer/FilterContainer";

const CatalogPage = () => {
  return (
    <main className={css.main_catalog_page}>
      <div className={`container ${css.catalog_container}`}>
        <FilterContainer />
      </div>
    </main>
  );
};

export default CatalogPage;
