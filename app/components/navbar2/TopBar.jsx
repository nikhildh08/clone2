"use client"
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const TopBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex justify-between p-4 me-20">
      <div className="flex">
      <h3 className="text-xl font-semibold">
        Good Evening <span className="font-bold text-indigo-500">AMMY</span>
      </h3>
      </div>

      <div className="flex  border-[rgba(0,0,0,0.15)]  focus:outline-none focus:ring-2 focus:ring-indigo-500  rounded-2xl  justify-between p-2">
      <div><input
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 bg-inherit  "
          placeholder="Search..."
          
        />
      
        </div>
        <div className='py-3'>
        <FaSearch /> 
        </div>
        {/* <i className="fa-solid fa-magnifying-glass text-gray-500" /> */}
      </div>
    </div>
  );
};

export default TopBar;
