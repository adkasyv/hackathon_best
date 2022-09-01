import React, { useEffect, useState } from "react";
import CountryCard from "../countries/CountryCard";
import { useCountries } from "../../contexts/CountryContextProvider";
import { useSearchParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import FilterContries from "./FilterContries";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

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

  const [page, setPage] = useState(1);
  const itemsOnPage = 6;
  const count = Math.ceil(countries.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return countries.slice(begin, end);
  }

  return (
    <div>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "70ch" },
        }}
      >
        <TextField
          id="filled-search"
          label="Search..."
          type="search"
          variant="filled"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <div>
        <FilterContries />
      </div>
      <div className="countries-container">
        {currentData().map((item) => (
          <CountryCard key={item.id} item={item} />
        ))}
      </div>
      <Pagination count={count} page={page} onChange={handlePage} />
    </div>
  );
};

export default CountriesList;
