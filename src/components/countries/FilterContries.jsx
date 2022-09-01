// import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useCountries } from "../../contexts/CountryContextProvider";
import React from "react";

export default function CountryContextProvider() {
  const { fetchByParams } = useCountries();

  return (
    <FormControl>
      <FormLabel
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
        id="demo-controlled-radio-buttons-group"
      >
        Category
      </FormLabel>
      <RadioGroup
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        defaultValue="all"
        onChange={(e) => fetchByParams("continent", e.target.value)}
      >
        <FormControlLabel value="Asia" control={<Radio />} label="Asia" />
        <FormControlLabel
          value="SouthAmerica"
          control={<Radio />}
          label="SouthAmerica"
        />
        <FormControlLabel value="Europe" control={<Radio />} label="Europe" />
        <FormControlLabel
          value="North America"
          control={<Radio />}
          label="North America"
        />
      </RadioGroup>
    </FormControl>
  );
}
