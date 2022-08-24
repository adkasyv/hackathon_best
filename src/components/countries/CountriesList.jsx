import React, { useEffect, useState } from "react";
import CountryCard from "../countries/CountryCard";
import { useCountries } from "../../contexts/CountryContextProvider";
import { useProducts } from "../../contexts/CountryContextProvider";
import { useSearchParams } from "react-router-dom";

const CountriesList = () => {
  const { countries, getCountries } = useCountries();

  useEffect(() => {
    getCountries();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getCountries();
  }, [searchParams]);

  return (
    <div>
      <div className="countries-container">
        {countries.map((item) => (
          <CountryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
