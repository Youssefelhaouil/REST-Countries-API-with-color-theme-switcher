import React from 'react'


function Filter({searchCountries,searchInput}) {
  return (
    <div className='h-[100px] w-full pt-4 px-[80px] flex justify-between items-center'>
        <div>
            <input type="search" 
                placeholder={`Search for a Country...`}
                name='search'
                id='search'
                className='px-4 py-2 rounded-sm shadow '
                value={searchInput}
                onChange={(e)=>searchCountries(e.target.value)}
            />
        </div>
      
    </div>
  )
}

export default Filter
