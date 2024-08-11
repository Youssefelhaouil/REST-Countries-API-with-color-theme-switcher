import { IoMoon } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";


export default function Header({isDark,setIsDark}){

    return(
        <>
        <div className={` ${isDark? "bg-dark-blue":""} px-[80px] md:px-[20px] h-[90px] w-full flex justify-between items-center `}>
            <h1 className={`font-bold font-sans ${isDark? "text-white" :"text-very-dark-blue"} text-[22px] md:text-[16px]`}>Where is the world?</h1>
            {!isDark ? <span onClick={()=> setIsDark(!isDark)} className={`cursor-pointer flex items-center gap-2 font-semiBold font-sans  text-[16px] md:text-[14px] ${isDark? "text-white" :"text-very-dark-blue"}`} ><IoMoonOutline /> Dark Mode</span> 
            : <span onClick={()=> setIsDark(!isDark)} className={`cursor-pointer flex items-center gap-2 font-semiBold font-sans  text-[16px] md:text-[14px] ${isDark? "text-white" :"text-very-dark-blue"}`}><IoMoon /> Dark Mode</span>}
        </div>
        
        </>
    )

}