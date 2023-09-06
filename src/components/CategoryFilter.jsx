/* eslint-disable react/prop-types */

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  const handleChange = event => {
    const category = event.target.value;
    setSelectedCategory(category);
  };

  return (
    <div>
      <label className="text-sm sm:text-base">Categories : </label>
      <select value={selectedCategory} onChange={handleChange}>
        <option value="" className="text-sm sm:text-base">
          All Categories
        </option>
        {categories.map(category => (
          <option
            key={category}
            value={category}
            className="text-sm sm:text-base">
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
