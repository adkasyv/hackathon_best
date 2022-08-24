import React from "react";
import { useNavigate } from "react-router-dom";
import { useCountries } from "../../contexts/CountryContextProvider";

const CountryCard = ({ item }) => {
  const { deleteCountry } = useCountries();
  const navigate = useNavigate();
  console.log("test");

  return (
    <div>
      <div className="country-card">
        <img src={item.picture} className="country-img" />
        <h3 className="county-name">{item.name}</h3>
        <img src={item.flag} className="flag-img" />
        <div className="country-info">
          <h5 className="continent">Continent: {item.continent}</h5>
          <h5 className="capital">Capital: {item.capital}</h5>
          <h5 className="population">Population: {item.population}</h5>
          <button onClick={() => navigate(`/details/${item.id}`)}>
            Details
          </button>
          <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
          <button onClick={() => deleteCountry(item.id)}>Delete</button>
          <button>Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
