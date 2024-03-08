// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<WelcomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/favorites" element={<FavoritePage />} />

      <Route path="*" element={<WelcomePage />} />
    </Routes>
  );
}

export default App;
