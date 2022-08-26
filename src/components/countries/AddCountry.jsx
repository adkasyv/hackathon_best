import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCountries } from "../../contexts/CountryContextProvider";

const AddCountry = () => {
  const { addCountry } = useCountries();

  const navigate = useNavigate();

  const [country, setCountry] = useState({
    name: "",
    capital: "",
    continent: "",
    population: "",
    picture: "",
    flag: "",
  });

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
      <input type="text" placeholder="Name" name="name" onChange={handleInp} />
      <input
        type="text"
        placeholder="Capital"
        name="capital"
        onChange={handleInp}
      />
      <input
        type="text"
        placeholder="Continent"
        name="continent"
        onChange={handleInp}
      />
      <input
        type="text"
        placeholder="Population"
        name="population"
        onChange={handleInp}
      />
      <input
        type="text"
        placeholder="Picture"
        name="picture"
        onChange={handleInp}
      />
      <input type="text" placeholder="Flag" name="flag" onChange={handleInp} />
      <button
        onClick={() => {
          addCountry(country);
          navigate("/countries");
        }}
      >
        AddCountry
      </button>
    </div>
  );
};

export default AddCountry;
