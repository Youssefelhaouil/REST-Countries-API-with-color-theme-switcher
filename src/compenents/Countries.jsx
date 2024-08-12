import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import Loading from './Loading';
import Pagination from './Pagination';

const Countries = ({ isDark, countries, isLoading }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filtred, setFiltred] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [optionCountries, setOptionCountries] = useState([]);
    const countriesPerPage = 8;

    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const displayedCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

    const searchCountries = (searchValue) => {
        setSearchInput(searchValue);

        if (searchValue) {
            const filteredCountries = countries.filter((country) => {
                return country.name.common.toLowerCase().startsWith(searchValue.toLowerCase());
            });
            setFiltred(filteredCountries);
        } else {
            setFiltred(countries);
        }
    };

    const searchByOption = (optionValue) => {
        const searchCountries = countries.filter((country) =>
            country.region === optionValue
        );
        setOptionCountries(searchCountries);
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <Filter countries={countries} searchByOption={searchByOption} searchCountries={searchCountries} searchInput={searchInput} isDark={isDark} />

            {
                searchInput.length > 0 ? (
                    <div className="grid grid-cols-4 md:flex md:flex-wrap px-[80px] md:px-[20px] gap-10 rounded-md pt-10">
                        {filtred.map((country, index) => (
                            <Link to={`/country/${country.name.common}`} key={index} className="cursor-pointer shadow h-full w-full grid grid-row-[1fr_1fr]">
                                <img className="h-[200px] w-full rounded-t-md" src={country.flags.png} alt={`Flag of ${country.name.common}`} />
                                <div className={`${!isDark ? "bg-white hover:bg-gray-100" : "bg-dark-blue hover:bg-opacity-80 text-white"} h-[190px] p-6 w-full rounded-b-md`}>
                                    <h1 className="font-sans font-bold text-[18px] pb-4">{country.name.common}</h1>
                                    <h3 className="font-sans font-light text-[16px] pb-1">Population: <span className="font-semibold">{country.population}</span></h3>
                                    <h3 className="font-sans font-light text-[16px] pb-1">Region: <span className="font-semibold">{country.region}</span></h3>
                                    <h3 className="font-sans font-light text-[16px] pb-1">Capital: <span className="font-semibold">{country.capital}</span></h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : optionCountries.length > 0 ? (
                    <div className="grid grid-cols-4 md:flex md:flex-wrap px-[80px] md:px-[20px] gap-10 rounded-md pt-10">
                        {optionCountries.map((country, index) => (
                            <Link to={`/country/${country.name.common}`} key={index} className="cursor-pointer shadow h-full w-full grid grid-row-[1fr_1fr]">
                                <img className="h-[200px] w-full rounded-t-md" src={country.flags.png} alt={`Flag of ${country.name.common}`} />
                                <div className={`${!isDark ? "bg-white hover:bg-gray-100" : "bg-dark-blue hover:bg-opacity-80 text-white"} h-[190px] p-6 w-full rounded-b-md`}>
                                    <h1 className="font-sans font-bold text-[18px] pb-4">{country.name.common}</h1>
                                    <h3 className="font-sans font-light text-[16px] pb-1">Population: <span className="font-semibold">{country.population}</span></h3>
                                    <h3 className="font-sans font-light text-[16px] pb-1">Region: <span className="font-semibold">{country.region}</span></h3>
                                    <h3 className="font-sans font-light text-[16px] pb-1">Capital: <span className="font-semibold">{country.capital}</span></h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-4 md:flex md:flex-wrap px-[80px] md:px-[20px] gap-10 rounded-md pt-10">
                        {displayedCountries.map((country, index) => (
                            <Link to={`/country/${country.name.common}`} key={index} className="cursor-pointer shadow h-full w-full grid grid-row-[1fr_1fr]">
                                <img className="h-[200px] w-full rounded-t-md" src={country.flags.png} alt={`Flag of ${country.name.common}`} />
                                <div className={`${!isDark ? "bg-white hover:bg-gray-100" : "bg-dark-blue hover:bg-opacity-80 text-white"} h-[190px] p-6 w-full rounded-b-md`}>
                                    <h1 className="font-sans font-bold text-[18px] pb-4">{country.name.common}</h1>
                                    <h3 className="font-sans font-light text-[16px] pb-1">Population: <span className="font-semibold">{country.population.toLocaleString()}</span></h3>
                                    <h3 className="font-sans font-light text-[16px] pb-1">Region: <span className="font-semibold">{country.region}</span></h3>
                                    <h3 className="font-sans font-light text-[16px] pb-1">Capital: <span className="font-semibold">{country.capital}</span></h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                )
            }
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} isDark={isDark} countries={countries} indexOfLastCountry={indexOfLastCountry} currentPage={currentPage}  />


        </>
    );
};

export default Countries;
