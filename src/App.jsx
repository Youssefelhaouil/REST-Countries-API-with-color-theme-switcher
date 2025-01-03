import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Countries from "./compenents/Countries";
import CountryInfo from "./compenents/CountryInfo";
import Header from "./compenents/Header";
import axios from 'axios';




function App() {
  const [isDark, setIsDark] = useState(false);
  const url = "https://restcountries.com/v3.1/all";
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading]=useState(false)

   const countries=data.filter(countrie=>countrie.name.common !== "Israel")
   

  useEffect(() => {
    setIsLoading(true); 
    axios.get(url)
      .then(res => {
        setData(res.data);
        setIsLoading(false); 
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setIsLoading(false); 
      });
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
        <Route path="/" element={<Countries isLoading={isLoading} isDark={isDark} countries={countries} />} />
        <Route path="/country/:countryName" element={<CountryInfo   isDark={isDark} countries={countries} />} />
      </Routes>
    </Router>
  )
}

export default App;
