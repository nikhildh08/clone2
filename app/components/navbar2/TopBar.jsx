"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const TopBar = ({ userName }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="top-main-dash flex items-center p-4 me-20 justify-between">
      <h3 className="top-greet-h3 text-xl font-semibold">
        Good Evening <span className="name-dy">{userName}</span>
      </h3>
      <span className="dash-span-inp flex items-center">
        <input
          type="search"
          className="dash-inp"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <i className="fa-solid fa-magnifying-glass">
          <FaSearch />
        </i>
      </span>
    </div>
  );
};

export default TopBar;
