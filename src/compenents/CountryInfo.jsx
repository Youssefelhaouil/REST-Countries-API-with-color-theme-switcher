import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";


const CountryInfo = ({ isDark, countries , isLoading }) => {
    const { countryName } = useParams();
    const country = countries.find(country => country.name.common === countryName);

    if (!country) return <div>Country not found!</div>;

    return (
        <>
            <div className='px-[100px] py-[20px] md:px-4 md:py-4  '>
                <Link className={`px-3 py-2 rounded-lg h-8 w-[100px] flex gap-2 items-center font-semibold font-sans text-lg ${isDark? "bg-dark-blue hover:bg-very-dark-blue text-white" : "bg-gray-200 hover:bg-gray-100 text-very-dark-blue"} `} to={"/"}> <IoMdArrowBack /> Back</Link>

                <div className={`pt-8 flex md:flex-col gap-[40px] rounded-xl ${isDark ? "text-white " : "text-very-dark-blue "}`}>
                    <img src={country.flags?.png} alt={`Flag of ${country.name.common}`} className="w-full rounded-xl h-[450px] md:h-[300px] max-w-lg mb-6" />
                    <div className='flex flex-col gap-10 md:px-8 justify-center my-[20px] md:py-0'>
                        <h1 className="font-bold text-4xl mb-6">{country.name.common}</h1>
                        <div className='flex justify-between gap-[100px] md:flex-col md:justify-normal md:gap-4'>
                            <div>
                                <p className="mb-4"><strong>Native Name:</strong> {country.nativeName}</p>
                                <p className="mb-4"><strong>Population:</strong> {country.population?.toLocaleString()}</p>
                                <p className="mb-4"><strong>Region:</strong> {country.region}</p>
                                <p className="mb-4"><strong>Sub Region:</strong> {country.subregion}</p>
                                <p className="mb-4"><strong>Capital:</strong> {country.capital}</p>
                            </div>
                            <div className=''>
                                <p className="mb-4"><strong>Top Level Domain:</strong> {country.tld?.join(', ') || 'N/A'}</p>

                                <p className="mb-4"><strong>Currencies:</strong> {
                                    country.currencies
                                        ? Object.values(country.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ')
                                        : 'N/A'
                                }</p>
                                <p className="mb-4"><strong>Languages:</strong> {
                                    country.languages
                                        ? Object.values(country.languages).join(', ')
                                        : 'N/A'
                                }</p>

                            </div>

                        </div>
                        <p className="mb-4"><strong>Border Countries:</strong> {country.borders?.length ? country.borders.join(', ') : 'None'}</p>
                    </div>



                </div>

            </div>


        </>
    );

}

export default CountryInfo;
