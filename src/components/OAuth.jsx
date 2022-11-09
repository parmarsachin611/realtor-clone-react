import React from 'react'
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button className='w-full flex items-center justify-center bg-red-600 text-white uppercase font-medium hover:bg-red-700 active:bg-red-800 px-7 py-3 shadow-md hover:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out'>
        <FcGoogle className='text-2xl rounded-full bg-white mr-2' />
        Continue with Google
    </button>
  )
}
