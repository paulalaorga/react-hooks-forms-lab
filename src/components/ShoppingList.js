import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(text) {
    setSearchText(text);
  }
  const handleItemFormSubmit = (newItem) => {
    console.log("Form submitted with item;", newItem);
  };

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {

    return item.name.toLowerCase().includes(searchText.toLowerCase());
  }

  return (
    item.category === selectedCategory &&
    item.name.toLowerCase.includes(searchText.toLocaleLowerCase())
    );
  });

  return (
    <div className="ShoppingList">
      <ItemForm 
      onItemFormSubmit={handleItemFormSubmit} 
      />
      <Filter 
      onCategoryChange={handleCategoryChange}
      search={searchText}
      onSearchChange={handleSearchChange} 
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
