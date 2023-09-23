import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AddNewUserPage from "./pages/AddNewUserPage";
import AddNewSitePage from "./pages/AddNewSite";
import AddNewInventoryPage from "./pages/AddNewInventory";

import UsersPage from "./pages/UsersPage";
import SitesPage from "./pages/SitesPage";
import InventoriesPage from "./pages/InventoriesPage";

import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";

import UpdateUserPage from "./pages/UpdateUserPage";
import UpdateSitePage from "./pages/UpdateSitePage";

import LogsPage from "./pages/LogsPage";
import SideBar from "./components/SideBar";

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex">
          <SideBar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/"
              element={<Navigate to={isAuth ? "/home" : "/login"} />}
            />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <LoginPage />}
            />
            <Route
              path="/add-user"
              element={isAuth ? <AddNewUserPage /> : <LoginPage />}
            />
            <Route
              path="/add-site"
              element={isAuth ? <AddNewSitePage /> : <LoginPage />}
            />
            <Route
              path="/add-inventory"
              element={isAuth ? <AddNewInventoryPage /> : <LoginPage />}
            />
            <Route
              path="/users"
              element={isAuth ? <UsersPage /> : <LoginPage />}
            />
            <Route
              path="/sites"
              element={isAuth ? <SitesPage /> : <LoginPage />}
            />
            <Route
              path="/inventories"
              element={isAuth ? <InventoriesPage /> : <LoginPage />}
            />
            <Route
              path="/update-user/:id"
              element={isAuth ? <UpdateUserPage /> : <LoginPage />}
            />
            <Route
              path="/update-site/:id"
              element={isAuth ? <UpdateSitePage /> : <LoginPage />}
            />
            <Route
              path="/logs"
              element={isAuth ? <LogsPage /> : <LoginPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
