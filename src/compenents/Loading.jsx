import React from 'react'

function Loading({isDark}) {
    return (
        <div className={`flex space-x-2 justify-center items-center  h-screen ${isDark?"bg-very-dark-blue":"bg-gray-100"}  `}>
            <span className='sr-only'>Loading...</span>
            <div className={`h-8 w-8  ${isDark? "bg-white":"bg-very-dark-blue"} rounded-full animate-bounce [animation-delay:-0.15s]`}></div>
            <div className={`h-8 w-8  ${isDark? "bg-white":"bg-very-dark-blue"} rounded-full animate-bounce [animation-delay:-0.15s]`}></div>
            <div className={`h-8 w-8  ${isDark? "bg-white":"bg-very-dark-blue"} rounded-full animate-bounce `}></div>
        </div>
    )
}

export default Loading
