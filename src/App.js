import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AddNewUserPage from "./pages/AddNewUserPage";
import AddNewSitePage from "./pages/AddNewSite";
import AddNewInventoryPage from "./pages/AddNewInventory";

import UsersPage from "./pages/UsersPage";
import SitesPage from "./pages/SitesPage";
import InventoriesPage from "./pages/InventoriesPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/add-user" element={<AddNewUserPage />} />
          <Route path="/add-site" element={<AddNewSitePage />} />
          <Route path="/add-inventory" element={<AddNewInventoryPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/sites" element={<SitesPage />} />
          <Route path="/inventories" element={<InventoriesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
