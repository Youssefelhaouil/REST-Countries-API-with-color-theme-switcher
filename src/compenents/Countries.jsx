import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import Filter from './Filter';

const Countries = ({ isDark, countries }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filtred, setFiltred] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [optionCountries, setOptionCountries] = useState([])
    const countriesPerPage = 8;




    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const displayedCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

    const handleNext = () => {
        if (indexOfLastCountry < countries.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const searchCountries = (searchValue) => {
        setSearchInput(searchValue);

        if (searchValue) {
            const filteredCountries = countries.filter((country) => {
                return country.name.common.toLowerCase().startsWith(searchValue.toLowerCase());
            });
            setFiltred(filteredCountries);
        } else if (searchValue.toLowerCase().startsWith("israel")) {
            return <div>it is Not A countries </div>
        } else {
            setFiltred(countries);

        }
    };
    const searchByOption = (optionValue) => {
        const searchCountries = countries.filter((country) =>
            country.region === optionValue
        );
        setOptionCountries(searchCountries)
    }




    return (
        <>
            <Filter countries={countries} searchByOption={searchByOption} searchCountries={searchCountries} searchInput={searchInput} isDark={isDark}></Filter>

            {
                searchInput.length > 0 ? <div className="grid grid-cols-4 md:flex md:flex-wrap px-[80px] md:px-[20px] gap-10 rounded-md pt-10">
                    {filtred.map((country, index) => (
                        <Link to={`/country/${country.name.common}`} key={index} className="cursor-pointer shadow h-full w-full grid grid-row-[1fr_1fr]">
                            <img
                                className="h-[200px] w-full rounded-t-md"
                                src={country.flags.png}
                                alt={`Flag of ${country.name.common}`}
                            />
                            <div className={`${!isDark ? "bg-white hover:bg-gray-100" : "bg-dark-blue hover:bg-opacity-80 text-white"} h-[190px] p-6 w-full rounded-b-md`}>
                                <h1 className="font-sans font-bold text-[18px] pb-4">{country.name.common}</h1>
                                <h3 className="font-sans font-light text-[16px] pb-1">Population: <span className="font-semibold">{country.population}</span></h3>
                                <h3 className="font-sans font-light text-[16px] pb-1">Region: <span className="font-semibold">{country.region}</span></h3>
                                <h3 className="font-sans font-light text-[16px] pb-1">Capital: <span className="font-semibold">{country.capital}</span></h3>
                            </div>
                        </Link>
                    ))}
                </div> : optionCountries.length > 1 ?
                    <div className="grid grid-cols-4 md:flex md:flex-wrap px-[80px] md:px-[20px] gap-10 rounded-md pt-10">
                        {optionCountries.map((country, index) => (
                            <Link to={`/country/${country.name.common}`} key={index} className="cursor-pointer shadow h-full w-full grid grid-row-[1fr_1fr]">
                                <img
                                    className="h-[200px] w-full rounded-t-md"
                                    src={country.flags.png}
                                    alt={`Flag of ${country.name.common}`}
                                />
                                <div className={`${!isDark ? "bg-white hover:bg-gray-100" : "bg-dark-blue hover:bg-opacity-80 text-white"} h-[190px] p-6 w-full rounded-b-md`}>
                                    <h1 className="font-sans font-bold text-[18px] pb-4">{country.name.common}</h1>
                                    <h3 className="font-sans font-light text-[16px] pb-1">Population: <span className="font-semibold">{country.population}</span></h3>
                                    <h3 className="font-sans font-light text-[16px] pb-1">Region: <span className="font-semibold">{country.region}</span></h3>
                                    <h3 className="font-sans font-light text-[16px] pb-1">Capital: <span className="font-semibold">{country.capital}</span></h3>
                                </div>
                            </Link>
                        ))}
                    </div> : <div className="grid grid-cols-4 md:flex md:flex-wrap px-[80px] md:px-[20px] gap-10 rounded-md pt-10">
                        {displayedCountries.map((country, index) => (
                            <Link to={`/country/${country.name.common}`} key={index} className="cursor-pointer shadow h-full w-full grid grid-row-[1fr_1fr]">
                                <img
                                    className="h-[200px] w-full rounded-t-md"
                                    src={country.flags.png}
                                    alt={`Flag of ${country.name.common}`}
                                />
                                <div className={`${!isDark ? "bg-white hover:bg-gray-100" : "bg-dark-blue hover:bg-opacity-80 text-white"} h-[190px] p-6 w-full rounded-b-md`}>
                                    <h1 className="font-sans font-bold text-[18px] pb-4">{country.name.common}</h1>
                                    <h3 className="font-sans font-light text-[16px] pb-1">Population: <span className="font-semibold">{country.population}</span></h3>
                                    <h3 className="font-sans font-light text-[16px] pb-1">Region: <span className="font-semibold">{country.region}</span></h3>
                                    <h3 className="font-sans font-light text-[16px] pb-1">Capital: <span className="font-semibold">{country.capital}</span></h3>
                                </div>
                            </Link>
                        ))}
                    </div>

            }
            <div className="flex justify-center items-center gap-8 px-[80px] py-[40px]">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`h-10 w-14 flex justify-center items-center rounded-full ${isDark ? "bg-dark-blue hover:bg-very-dark-blue" : "bg-gray-300 hover:bg-gray-400"}`}
                >
                    <GrLinkPrevious className={`${isDark ? "text-white" : "text-dark-blue"} font-bold text-[30px]`} />
                </button>
                <h1 className={`font-bold font-sans text-[20px] ${isDark ? "text-white" : "text-very-dark-blue"}`}>{currentPage} </h1>
                <button
                    onClick={handleNext}
                    disabled={indexOfLastCountry >= countries.length}
                    className={`h-10 w-14 flex justify-center items-center rounded-full ${isDark ? "bg-dark-blue hover:bg-very-dark-blue" : "bg-gray-300 hover:bg-gray-400"}`}
                >
                    <GrLinkNext className={`${isDark ? "text-white" : "text-dark-blue"} font-bold text-[30px]`} />
                </button>
            </div>


        </>
    );
};

export default Countries;
