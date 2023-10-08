import React, { useState } from "react";

function Filter({ onCategoryChange, search, onSearchChange }) {

  const handleSearchChange = (event) => {
    const text = event.target.value;
    onSearchChange(text);
  };

  return (
    <div className="Filter">
      <input 
      type="text" 
      name="search" 
      placeholder="Search..."
      value={search}
      onChange={handleSearchChange} 
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
