/* eslint-disable no-unused-vars */
import { useGlobalContext } from '../context/RestaurantsContext';
import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import CurrentOpenFilter from './CurrentOpenFilter';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import Loading from './Loading';

function RestaurantList() {
  const { restaurants, isLoading, category, price } = useGlobalContext();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  // Filter restaurants
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

  const resetFilter = () => {
    setIsOpen(false);
    setSelectedCategory('');
    setSelectedPriceRange('');
  };

  return (
    <section>
      <div className="mt-9 mb-5 border-y flex flex-col sm:flex-row gap-5 justify-center sm:items-center sm:justify-start sm:gap-10 py-2 ">
        <p>Filters: </p>
        <CurrentOpenFilter setIsOpen={setIsOpen} isOpen={isOpen} />
        <CategoryFilter
          categories={category}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <PriceFilter
          priceRanges={price}
          setSelectedPriceRange={setSelectedPriceRange}
          selectedPriceRange={selectedPriceRange}
        />

        <button
          onClick={() => resetFilter()}
          className="border inline py-1 px-2">
          Clear All
        </button>
      </div>

      <h2 className="text-xl font-bold  mb-5 ">All Restaurant</h2>

      {isLoading ? (
        <Loading />
      ) : (
        <article className="flex flex-wrap gap-5 lg:gap-7 justify-center xl:justify-around">
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
