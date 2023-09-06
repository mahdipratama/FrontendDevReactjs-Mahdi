/* eslint-disable react/prop-types */
// PriceFilter.js
import { useState } from 'react';

function PriceFilter({ priceRanges, onSelectPriceRange }) {
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const handleChange = event => {
    const priceRange = event.target.value;
    setSelectedPriceRange(priceRange);
    onSelectPriceRange(priceRange);
  };

  return (
    <div>
      <label>Filter by Price:</label>
      <select value={selectedPriceRange} onChange={handleChange}>
        <option value="">All Prices</option>
        {priceRanges.map(range => (
          <option key={range} value={range}>
            {range}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PriceFilter;
