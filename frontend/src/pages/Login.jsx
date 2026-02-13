import React,{useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";


function Login(){

    


    return(
        <section>
            <div className="flex relative justify-center items-center min-w-screen min-h-screen">
                <div className="absolute top-25 left-135 bg-green-600 w-20 h-20 rounded-full">
                </div>
                <div className="bg-green-800/30 backdrop-blur-sm z-10 w-100 h-110 rounded-2xl">
                    <div className="flex justify-center items-center p-10 text-2xl font-audiowide text-green-300">
                        Login
                    </div>
                    <div>
                        <form className="space-y-7">
                            <div className="ml-5">
                                <label htmlFor="email" className="block pb-1 font-bold text-lime-300">
                                Email:
                                </label>
                                <input
                                id="email"
                                type="email"
                                placeholder="example@email.com"
                                autoComplete="email"

                                className="border-2 border-green-800 p-2 rounded-sm w-90"
                                />
                            </div>
                            <div className="ml-5">
                                <label htmlFor="password" className="block pb-1 font-bold text-lime-300">
                                Password:
                                </label>
                                <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                autoComplete="current-password"

                                className="border-2 border-green-800 p-2 rounded-sm w-90"
                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <button type="sumbit">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                    <p className="p-5 flex items-center justify-center font-semibold text-lime-400">
                        New to EzDoc?
                        <Link to='/register' className="text-red-300 font-semibold">Click here to Signup</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Login;