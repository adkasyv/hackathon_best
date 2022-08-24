import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailsPage from "./pages/CountryDeatils";
import EditCountryPage from "./pages/EditCountryPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ErrorPage from "./pages/ErrorPage";
import TicketsPage from "./pages/TicketsPage";

const MainRoutes = () => {
  // const ALL_ROUTES = [
  //   {
  //     link: "/register",
  //     element: <RegistrationPage />,
  //     id: 1,
  //   },
  //   {
  //     link: "/login",
  //     element: <LoginPage />,
  //     id: 2,
  //   },
  //   {
  //     link: "*",
  //     element: <ErrorPage />,
  //     id: 3,
  //   },
  //   {
  //     link: "/admin",
  //     element: <AdminPage />,
  //     id: 4,
  //   },
  //   {
  //     link: "/countries",
  //     element: <CountriesPage />,
  //     id: 5,
  //   },
  //   {
  //     link: "/edit/:id",
  //     element: <EditCountryPage />,
  //     id: 6,
  //   },
  //   {
  //     link: "/details/:id",
  //     element: <CountryDetailsPage />,
  //     id: 7,
  //   },
  //   {
  //     link: "/",
  //     element: <HomePage />,
  //     id: 8,
  //   },
  //   {
  //     link: "/tickets",
  //     element: <TicketsPage />,
  //     id: 9,
  //   },
  // ];
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/countries" element={<CountriesPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/tickets" element={<TicketsPage />} />
    </Routes>
  );
};

export default MainRoutes;
