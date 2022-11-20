import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Header() {

    const [ pageState, setPageState ] = useState("Sign in")

    const auth = getAuth();

    useEffect(()=> {

        onAuthStateChanged(auth, (user)=> {

            if (user) {
                setPageState("Profile")
            } else {
                setPageState("Sign in")
            }

        }

        )

    }, [auth])

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.pathname);
    function pathMatchRoute(route) {
        if (route === location.pathname) {
            return true
        }
    }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className="h-5 cursor-pointer" onClick={()=> navigate("/")}/>
            </div>
            <div className="">
                <ul className="flex space-x-10">
                    <li className={`cursor-pointer py-3 font-semibold text-sm text-gray-400 border-b-[3px] border-b-transparent ${ pathMatchRoute("/") && "text-black border-b-red-400 text" }`} onClick={()=> navigate("/")}>Home</li>
                    <li className={`cursor-pointer py-3 font-semibold text-sm text-gray-400 border-b-[3px] border-b-transparent ${ pathMatchRoute("/offers") && "text-black border-b-red-400 text" }`} onClick={()=> navigate("/offers")}>Offers</li>
                    <li className={`cursor-pointer py-3 font-semibold text-sm text-gray-400 border-b-[3px] border-b-transparent ${ (pathMatchRoute("/sign-in") || pathMatchRoute("/profile") ) && "text-black border-b-red-400 text" }`}  onClick={() => navigate("/profile")}>
                        { pageState }
                    </li>
                </ul>
            </div>
        </header>
    </div>
  )
}
