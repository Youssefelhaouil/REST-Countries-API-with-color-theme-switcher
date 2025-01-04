import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Countries from "./compenents/Countries";
import CountryInfo from "./compenents/CountryInfo";
import Header from "./compenents/Header";
import { useDispatch, useSelector } from 'react-redux';
import { countryData } from './App/Data/CountryData';
function App() {
  const dispatch=useDispatch();
  const {country,loading}=useSelector(state=>state.country);
  const [isDark, setIsDark] = useState(false);


  useEffect(() => {
    dispatch(countryData())
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('bg-very-dark-blue');
      document.body.classList.remove('bg-light-gray');
    } else {
      document.body.classList.add('bg-light-gray');
      document.body.classList.remove('bg-very-dark-blue');
    }
  }, [isDark]);

  return (
    <Router>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Routes>
        <Route path="/" element={<Countries isLoading={loading} isDark={isDark} countries={country} />} />
        <Route path="/country/:area" element={<CountryInfo   isDark={isDark} countries={country} />} />
      </Routes>
    </Router>
  )
}

export default App;
