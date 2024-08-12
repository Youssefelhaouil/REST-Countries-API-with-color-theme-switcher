import React from 'react';

function Filter({ searchCountries, searchInput, isDark, countries, searchByOption }) {
  const uniqueRegions = [...new Set(countries.map((country) => country.region))];

  return (
    <div className='h-[100px] w-full pt-4 px-[80px] md:px-[20px]  flex justify-between items-center md:flex-col md:items-start md:gap-4 '>
      <div>
        <input
          type="search"
          placeholder="Search for a Country..."
          name='search'
          id='search'
          className={` md:w-[350px] px-4 ${isDark ? "text-white placeholder-gray-400 bg-dark-blue" : "text-very-dark-blue bg-white"} px-4 py-2 rounded-sm shadow`}
          value={searchInput}
          onChange={(e) => searchCountries(e.target.value)}
          autoComplete="off"
        />
      </div>
      <div>
        <select
          name="regionOption"
          id="regionOption"
          onChange={(e) => searchByOption(e.target.value)}
          className={`border-0 text-gray-400 font-bold font-sans text-[16px] ${isDark ? "text-white placeholder-gray-400 bg-dark-blue" : "text-very-dark-blue bg-white"} px-8 py-2  rounded-sm shadow`}

        >
          <option value="Select">Filter by Region</option>
          {uniqueRegions.map((region) => (
            <option className={`border-0 text-gray-400 font-bold font-sans text-[16px] h-6 ${isDark ? " placeholder-gray-400 bg-dark-blue" : "text-very-dark-blue bg-white"}`}
              key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filter;
