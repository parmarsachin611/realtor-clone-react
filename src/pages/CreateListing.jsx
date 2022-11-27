import React, { useState } from "react";

export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
  });

  const {
    type,
    name,
    bathrooms,
    bedrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
  } = formData;

  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="mt-6 text-3xl font-bold text-center">Create a Listing</h1>
      <form>
        <p className="text-lg font-semibold mt-6">Sell / Rent</p>
        <div className="flex">
          <button
            type="button"
            onClick={onChange}
            id="type"
            value="sale"
            className={`mr-3 text-sm font-medium uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out px-7 py-3 w-full ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
          >
            sell
          </button>
          <button
            type="button"
            onClick={onChange}
            id="type"
            value="rent"
            className={`ml-3 text-sm font-medium uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out px-7 py-3 w-full ${
              type === "sale"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
          >
            rent
          </button>
        </div>
        <p className="text-lg font-semibold mt-6">Name</p>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
          maxLength="30"
          minLength="10"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <div className="flex space-x-6 mb-6">
          <div className="">
            <p className="text-lg font-semibold mt-6">Beds</p>
            <input
              type="number"
              id="bedrooms"
              placeholder="Bedroom"
              value={bedrooms}
              onChange={onChange}
              max="50"
              min="1"
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6 text-center"
            />
          </div>
          <div className="">
            <p className="text-lg font-semibold mt-6">Baths</p>
            <input
              type="number"
              id="bathrooms"
              placeholder="Bathrooms"
              value={bathrooms}
              onChange={onChange}
              max="50"
              min="1"
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6 text-center"
            />
          </div>
        </div>
        <p className="text-lg font-semibold mt-6">Parking Spot</p>
        <div className="flex">
          <button
            type="button"
            onClick={onChange}
            id="parking"
            value={true}
            className={`mr-3 text-sm font-medium uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out px-7 py-3 w-full ${
              !parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            onClick={onChange}
            id="parking"
            value={false}
            className={`ml-3 text-sm font-medium uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out px-7 py-3 w-full ${
              parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            no
          </button>
        </div>
        <p className="text-lg font-semibold mt-6">Furnished</p>
        <div className="flex">
          <button
            type="button"
            onClick={onChange}
            id="furnished"
            value={false}
            className={`mr-3 text-sm font-medium uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out px-7 py-3 w-full ${
              !furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            yes
          </button>
          <button
            type="button"
            onClick={onChange}
            id="furnished"
            value={true}
            className={`ml-3 text-sm font-medium uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out px-7 py-3 w-full ${
              furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            no
          </button>
        </div>
        <p className="text-lg font-semibold mt-6">Address</p>
        <textarea
          type="text"
          id="address"
          placeholder="Address"
          value={address}
          onChange={onChange}
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Description</p>
        <textarea
          type="text"
          id="description"
          placeholder="Description"
          value={description}
          onChange={onChange}
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Offer</p>
        <div className="flex mb-6">
          <button
            type="button"
            onClick={onChange}
            id="offer"
            value={false}
            className={`mr-3 text-sm font-medium uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out px-7 py-3 w-full ${
              !offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            yes
          </button>
          <button
            type="button"
            onClick={onChange}
            id="offer"
            value={true}
            className={`ml-3 text-sm font-medium uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out px-7 py-3 w-full ${
              offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            no
          </button>
        </div>
        <div className="flex items-center mb-6">
          <div className="">
            <p className="text-lg font-semibold">Regular price</p>
            <div className="flex w-full justify-center items-center space-x-6">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                min="50"
                max="400000000"
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
              />
              {type === "rent" && (
                <div className="">
                  <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>
        { offer && (
          <div className="flex items-center mb-6">
               <div className="">
               <p className="text-lg font-semibold">Discounted price</p>
                 <div className="flex w-full justify-center items-center space-x-6">
                   <input
                     type="number"
                     id="discountedPrice"
                     value={discountedPrice}
                     onChange={onChange}
                     min="50"
                     max="400000000"
                     required={offer}
                     className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                   />
                   {type === "rent" && (
                     <div className="">
                       <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                     </div>
                   )}
                 </div>
               </div>
             </div>
        ) }
        <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600">The First Image will be cover (max 6)</p>
          <input 
            type="file" 
            id="images" 
            accept=".jpg,.png,.jpeg"
            onChange={onChange}
            required
            multiple
            className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded transition duration-150 
                        ease-in-out focus:bg-white focus:border-slate-600"
          />
        </div>
        <button type="submit" className="mb-6 w-full px-7 py-3 text-sm uppercase bg-blue-600 text-white font-medium rounded shadow-sm hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Create Listing</button>
      </form>
    </main>
  );
}
