/* eslint-disable react/prop-types */
// PriceFilter.js

function PriceFilter({
  priceRanges,
  selectedPriceRange,
  setSelectedPriceRange,
}) {
  const handleChange = event => {
    const priceRange = event.target.value;
    setSelectedPriceRange(priceRange);
  };

  return (
    <div>
      <label className="text-sm sm:text-base">Price : </label>
      <select value={selectedPriceRange} onChange={handleChange}>
        <option value="" className="text-sm sm:text-base">
          All Prices
        </option>
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
