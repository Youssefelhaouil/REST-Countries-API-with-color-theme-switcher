import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Countries from "./compenents/Countries";
import CountryInfo from "./compenents/CountryInfo";
import Header from "./compenents/Header";




function App() {
  const [isDark, setIsDark] = useState(true);
  const url = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCountries(data));
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
        <Route path="/" element={<Countries isDark={isDark} countries={countries} />} />
        <Route path="/country/:countryName" element={<CountryInfo isDark={isDark} countries={countries} />} />
      </Routes>
    </Router>
  )
}

export default App;
