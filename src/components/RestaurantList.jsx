/* eslint-disable no-unused-vars */
import { useGlobalContext } from '../context/RestaurantsContext';
import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import CurrentOpenFilter from './CurrentOpenFilter';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';

function RestaurantList() {
  const { restaurants, isLoading, cagetory, price } = useGlobalContext();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  // Filter restaurants based on selected criteria
  const filteredRestaurants = restaurants
    .filter(restaurant => !isOpen || restaurant.currentStatus === 'OPEN')
    .filter(
      restaurant =>
        selectedCategory === '' || restaurant.cuisine === selectedCategory
    )
    .filter(
      restaurant =>
        selectedPriceRange === '' ||
        (restaurant.priceTag && restaurant.priceTag === selectedPriceRange)
    );

  return (
    <section>
      <h2 className="text-xl font-bold mt-9 mb-5">All Restaurant</h2>

      <CurrentOpenFilter onSelectOpenStatus={setIsOpen} />
      <CategoryFilter
        categories={cagetory}
        onSelectCategory={setSelectedCategory}
      />
      <PriceFilter
        priceRanges={price}
        onSelectPriceRange={setSelectedPriceRange}
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <article className="flex flex-wrap gap-5 justify-center">
          {filteredRestaurants.length === 0 ? (
            <p>No restaurants match the selected filters.</p>
          ) : (
            filteredRestaurants.map(restaurant => (
              <RestaurantCard
                key={restaurant.restaurantsId}
                restaurant={restaurant}
              />
            ))
          )}
        </article>
      )}
    </section>
  );
}

export default RestaurantList;
