import { async } from '@firebase/util';
import { getAuth, updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { db } from '../firebase';

export default function Profile() {

  const [ changeDetail, setChangeDetail ] = useState(false);

  const navigate = useNavigate();

  const auth = getAuth();

  const [ formData, setFormData ] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  });

  const { name, email } = formData;

  function onLogout() {

    auth.signOut();
    navigate("/");

  }

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        //update display name in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // update name in the firestore

        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
      }
      toast.success("Profile details updated");
    } catch (error) {
      toast.error("Could not update the profile details");
    }
  }

  return (
    <>
      <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
        <h1 className="text-3xl text-center font-bold mt-6">My Profile</h1>

        <div className="w-full mt-6 md:w-[50%] px-3">

          <form>

            {/* Name Input */}

            <input
              type="text"
              id="name"
              value={name}
              disabled={!changeDetail}
              onChange={onChange}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                changeDetail && "bg-red-200 focus:bg-red-200"
              }`}
            />

            {/* Email Input */}

            <input type="email" value={email} id={email} className = " w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6" disabled />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">

              <p className='flex items-center'>Do You Want To Update Profile? 
              <span
                  onClick={() => {
                    changeDetail && onSubmit();
                    setChangeDetail((prevState) => !prevState);
                  }}
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
                >
                  {changeDetail ? "Apply change" : "Edit"}
                </span>
              </p>
              <p onClick={onLogout} className='text-blue-600 hover:text-blue-700 transition ease-in-out duration-200 cursor-pointer'>Sign Out</p>

            </div>


          </form>

        </div>

      </section>
    </>
  )
}
