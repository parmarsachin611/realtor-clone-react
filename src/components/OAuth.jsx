import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { db } from '../firebase';

export default function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick() {
    
    try {
      
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // check for the user

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate("/");

    } catch (error) {
      toast.error("Could not authorize with Google");
      console.log(error);
    }

  }

  return (
    <button onClick={onGoogleClick} type="button" className='w-full flex items-center justify-center bg-red-600 text-white uppercase font-medium hover:bg-red-700 active:bg-red-800 px-7 py-3 shadow-md hover:shadow-lg active:shadow-lg rounded transition duration-150 ease-in-out'>
        <FcGoogle className='text-2xl rounded-full bg-white mr-2' />
        Continue with Google
    </button>
  )
}
