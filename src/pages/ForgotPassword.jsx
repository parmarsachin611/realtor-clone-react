import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import OAuth from "../components/OAuth";

export default function ForgotPassword() {

  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {

    e.preventDefault();

    try {
      
      const auth = getAuth();

      await sendPasswordResetEmail( auth, email );

      toast.success("Email Sent")

    } catch (error) {
      toast.error("Email Invalid")
    }

  }

  return (
    <section>
      <h1 className="text-center text-3xl mt-6 font-bold">Forgot Password</h1>
      <div className="flex flex-wrap justify-center items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              className="mb-6 w-full bg-white text-xl border-gray-300 px-4 py-2 rounded transition ease-in-out"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />
            
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p>
                Don't have an Account?
                <Link
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                  to="/sign-up"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                  to="/sign-in"
                >
                  Sign In Instead
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 rounded shadow-md text-white font-medium uppercase px-7 py-3 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              Send Reset Password
            </button>
            <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
