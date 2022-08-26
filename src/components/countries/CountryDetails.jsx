import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCountries } from "../../contexts/CountryContextProvider";

const CountryDetails = () => {
  const { id } = useParams();

  const { getCountryDetails, countryDetails } = useCountries();

  useEffect(() => {
    getCountryDetails(id);
  }, []);

  return (
    <div>
      <h1>Welcome to {countryDetails.name}!</h1>
      <h2>Столица: {countryDetails.capital}</h2>
    </div>
  );
};

export default CountryDetails;
