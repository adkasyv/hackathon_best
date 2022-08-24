import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import MainRoutes from "./MainRoutes";
import CountryContextProvider from "./contexts/CountryContextProvider";

function App() {
  return (
    <div>
      <CountryContextProvider>
        <NavBar />
        <MainRoutes />
        <Footer />
      </CountryContextProvider>
    </div>
  );
}

export default App;
