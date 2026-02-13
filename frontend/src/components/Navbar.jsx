import { useState } from "react";
import { delay, motion, spring } from "motion/react";
import { useNavigate } from "react-router-dom";

const Navbar = () =>{

    const navigate = useNavigate();

    const handleLogin=()=>{
        navigate('/login');
    }

    const handleSignin=()=>{
        navigate('/register');
    }

    const transation={
        duration: 2,
        delay:0.5,
        ease:[0, 0.71, 0.2, 1.01]
    }

    const buttonTransation={
        duration:0.5,
    }

    const[isOpen,setIsOpen] = useState(false);
    const buttonClasses="text-gray-100 font-bold text-sm px-2 py-1 border-2 border-gray-100 hover:bg-gray-100 hover:text-emerald-500 rounded-lg transation duration-200";
    const buttons =(
        <>
        {/*Login button */}
        <motion.button 
        animate={{y:5}}
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={buttonTransation}
        onClick={handleLogin} className={buttonClasses}>Login</motion.button>
        {/*Register button */}
        <motion.button 
        animate={{y:5}}
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={buttonTransation}
        onClick={handleSignin} className={buttonClasses}>Register</motion.button>
        {/*Register button */}
        <motion.button 
        animate={{y:5}}
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={buttonTransation}
        className={buttonClasses}>About</motion.button>
        </>
    )

    return(
        <motion.nav 
        animate={{ y:5 }}
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        transition={transation}

        className="bg-gradient-to-l from-black to-emerald-950 backdrop:blur-3xl top-0 sticky w-screen z-50">
            <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                <div className="flex flex-row w-full justify-between">
                    <div className="mt-2 text-xl font-bold">
                        
                        <span className="font-bold text-emerald-300"> <a className="hover:cursor-pointer" href="/"></a> Ez</span><span className="font-mono text-lime-100">Document</span>
                        {/* <img className="h-50 w-50" src="../images/logoEz.png" alt="" /> */}
                    </div>
                    <div className="hidden md:block">
                        <div className="flex ml-10 items-baseline space-x-2">
                            {buttons}
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <button onClick={()=>{setIsOpen(!isOpen)}} type="button" className="fill-green-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
                    </button>
                </div>
                </div>
            </div>
            {
                isOpen && (
                    <div className="flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2">
                        {buttons}
                    </div>
                )
            }
        </motion.nav>
    );
}

export default Navbar;