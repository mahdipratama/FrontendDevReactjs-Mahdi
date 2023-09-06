/* eslint-disable no-unused-vars */
import { useGlobalContext } from '../context/Restaurants';
import RestaurantCard from './RestaurantCard';

function RestaurantList() {
  const { restaurants, isLoading } = useGlobalContext();

  return (
    <section>
      <h2 className="text-xl font-bold mt-9 mb-5">All Restaurant</h2>

      <article className="flex flex-wrap gap-5 justify-center">
        {restaurants.map(restaurant => (
          <RestaurantCard
            key={restaurant.restaurantsId}
            restaurant={restaurant}
          />
        ))}
      </article>
    </section>
  );
}

export default RestaurantList;
