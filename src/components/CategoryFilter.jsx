/* eslint-disable react/prop-types */
import { useState } from 'react';

function CategoryFilter({ categories, onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = event => {
    const category = event.target.value;
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div>
      <label>Filter by Category:</label>
      <select value={selectedCategory} onChange={handleChange}>
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
