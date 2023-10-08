import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [formData, setFormData] = useState({ name: "", category: "Produce" });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newItem = {
      id: uuid(),
      ...formData,
    };
    
    props.onItemFormSubmit(newItem);
    setFormData({ name:"", category: "Produce" });
  };
  
  
  return (
    <form className="NewItem"
    onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
        type="text" 
        name="name"
        value={formData.name}
        onChange={handleInputChange} 
        />
      </label>

      <label>
        Category:
        <select 
        name="category"
        value={formData.category}
        onChange={handleInputChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
  }

export default ItemForm;
