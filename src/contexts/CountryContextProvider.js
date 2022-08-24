import React, { createContext, useReducer, useContext } from "react";
import axios from "axios";
import { ACTIONS, JSON_API_COUNTRIES } from "../helpers/consts";
import { useNavigate, useLocation } from "react-router-dom";

export const countryContext = createContext();

export const useCountries = () => useContext(countryContext);

const INIT_STATE = {
  countries: [],
  countryDetails: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_COUNTRIES:
      return { ...state, countries: action.payload };
    case ACTIONS.GET_COUNTRY_DETAILS:
      return { ...state, countryDetails: action.payload };
    default:
      return state;
  }
};

const CountryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();
  const location = useLocation();

  // add country
  const addCountry = async (newCountry) => {
    await axios.post(JSON_API_COUNTRIES, newCountry);
    getCountries();
  };

  // get all countries
  const getCountries = async () => {
    const { data } = await axios(
      `${JSON_API_COUNTRIES}/${window.location.search}`
    );
    dispatch({
      type: ACTIONS.GET_COUNTRIES,
      payload: data,
    });
  };

  // edit&details country
  const getCountryDetails = async (id) => {
    const { data } = await axios(`${JSON_API_COUNTRIES}/${id}`);
    dispatch({
      type: ACTIONS.GET_COUNTRY_DETAILS,
      payload: data,
    });
  };

  const saveEditedCountry = async (newCountry) => {
    await axios.patch(`${JSON_API_COUNTRIES}/${newCountry.id}`, newCountry);
    getCountries();
  };

  // delete country
  const deleteCountry = async (id) => {
    await axios.delete(`${JSON_API_COUNTRIES}/${id}`);
    getCountries();
  };

  const values = {
    countries: state.countries,
    countryDeatils: state.countryDetails,
    getCountries,
    addCountry,
    getCountryDetails,
    saveEditedCountry,
    deleteCountry,
  };

  return (
    <countryContext.Provider value={values}>{children}</countryContext.Provider>
  );
};

export default CountryContextProvider;
