import React from 'react';
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

function Pagination({currentPage,setCurrentPage, isDark  , indexOfLastCountry ,countries}) {
    

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

    return (
        <>
            <div className="flex justify-center items-center gap-8 px-[80px] py-[40px]">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`h-10 w-14 flex justify-center items-center rounded-full ${isDark ? "bg-dark-blue hover:bg-very-dark-blue" : "bg-gray-300 hover:bg-gray-400"}`}
                >
                    <GrLinkPrevious className={`${isDark ? "text-white" : "text-dark-blue"} font-bold text-[30px]`} />
                </button>
                <h1 className={`font-bold font-sans text-[20px] ${isDark ? "text-white" : "text-very-dark-blue"}`}>{currentPage}</h1>
                <button
                    onClick={handleNext}
                    disabled={indexOfLastCountry >= countries.length}
                    className={`h-10 w-14 flex justify-center items-center rounded-full ${isDark ? "bg-dark-blue hover:bg-very-dark-blue" : "bg-gray-300 hover:bg-gray-400"}`}
                >
                    <GrLinkNext className={`${isDark ? "text-white" : "text-dark-blue"} font-bold text-[30px]`} />
                </button>
            </div>
        </>
    )
}

export default Pagination
