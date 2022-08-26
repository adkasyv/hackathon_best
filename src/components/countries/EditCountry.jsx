import React, { useState, useEffect } from "react";
import { useCountries } from "../../contexts/CountryContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const EditCountry = () => {
  const { getCountryDetails, countryDetails, saveEditedCountry } =
    useCountries();

  const navigate = useNavigate();

  const { id } = useParams();

  const [country, setCountry] = useState(countryDetails);

  useEffect(() => {
    setCountry(countryDetails);
  }, [countryDetails]);

  useEffect(() => {
    getCountryDetails(id);
  }, []);

  const handleInp = (e) => {
    if (e.target.name === "population") {
      let obj = {
        ...country,
        [e.target.name]: Number(e.target.value),
      };
      setCountry(obj);
    } else {
      let obj = {
        ...country,
        [e.target.name]: e.target.value,
      };
      setCountry(obj);
    }
  };
  return (
    <div>
      <h2>Change Country Information</h2>
      <input
        type="text"
        value={country.name}
        placeholder="Name"
        name="name"
        onChange={handleInp}
      />
      <input
        type="text"
        value={country.capital}
        placeholder="Capital"
        name="capital"
        onChange={handleInp}
      />
      <input
        type="text"
        value={country.continent}
        placeholder="Continent"
        name="continent"
        onChange={handleInp}
      />
      <input
        type="text"
        value={country.population}
        placeholder="Population"
        name="population"
        onChange={handleInp}
      />
      <input
        type="text"
        value={country.picture}
        placeholder="Picture"
        name="picture"
        onChange={handleInp}
      />
      <input
        type="text"
        value={country.flag}
        placeholder="Flag"
        name="flag"
        onChange={handleInp}
      />
      <button
        onClick={() => {
          saveEditedCountry(country);
          navigate("/countries");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default EditCountry;
