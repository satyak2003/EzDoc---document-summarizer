import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth,db } from "../components/firebase";
import { setDoc,doc } from "firebase/firestore";
import { toast } from "react-toastify";

function Signin(){

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[username,setUsername] = useState("");

    const handelRegister=async(e)=>{
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth,email,password);
            const currentUser = auth.currentUser;
            console.log(currentUser);
            if(currentUser){
                await setDoc(doc(db,"Users",currentUser.uid),{
                    email:currentUser.email,
                    displayName:currentUser.username
                });
            }
            console.log("Succesfully registered");
            toast.success("Registration succesfull",{
                position:"top-right",
                draggable:true,
                pauseOnFocusLoss:true,
                pauseOnHover:true,
                
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    return(
        <section>
            <div className="flex relative items-center justify-center min-w-screen min-h-screen">
                <div className="absolute top-20 right-120 bg-green-900 h-30 w-30 rounded-tr-full">
                </div>
                <div className="bg-lime-800/50 z-10 w-120 h-118 rounded-2xl backdrop-blur-sm">
                    <div className="flex justify-center items-center p-8 font-audiowide text-2xl text-green-500">
                        Signup
                    </div>
                    <div>
                        <form className="gap-y-7" onSubmit={handelRegister}>
                            <div className="ml-5">
                                <label htmlFor="username" className="font-semibold text-lime-300 block mb-2">
                                Username:
                                </label>
                                <input
                                id="username"
                                type="text"
                                placeholder="Username"
                                required
                                onChange={(e)=>setUsername(e.target.value)}

                                className="border-2 border-lime-700 p-1 w-110 mb-4"
                                />
                            </div>
                            <div className="ml-5">
                                <label htmlFor="email" className="font-semibold text-lime-300 block mb-2">
                                Email:
                                </label>
                                <input
                                id="email"
                                type="email"
                                placeholder="example@email.com"
                                autoComplete="email"
                                required
                                onChange={(e)=>setEmail(e.target.value)}

                                className="border-2 border-lime-700 p-1 w-110 mb-4"
                                />
                            </div>

                            <div className="ml-5">
                                <label htmlFor="password" className="font-semibold text-lime-300 block mb-2">
                                Password
                                </label>
                                <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                required
                                onChange={(e)=>setPassword(e.target.value)}

                                className="border-2 border-lime-700 p-1 w-110 mb-4"
                                />
                            </div>
                            <div className="flex justify-center items-center p-5">
                                <button type="sumbit">SingUp</button>
                            </div>
                        </form>
                    </div>
                    <p className="flex justify-center items-center font-semibold text-lime-400">
                        Already an user?
                        <Link to='/login'>Login</Link>
                    </p>
                </div>
            </div>
        </section>
    )

}

export default Signin;