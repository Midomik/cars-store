// import logo from "./logo.svg";
import { Route, Routes } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import FavoritePage from 'pages/FavoritePage/FavoritePage';

function App() {
  return (
    <SharedLayout>
      <Routes>
        <Route index path="/" element={<WelcomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />

        <Route path="*" element={<WelcomePage />} />
      </Routes>
    </SharedLayout>
  );
}

export default App;
