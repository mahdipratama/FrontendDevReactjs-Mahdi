/* eslint-disable no-unused-vars */
import { useGlobalContext } from '../context/Restaurants';
import RestaurantCard from './RestaurantCard';

function RestaurantList() {
  const { restaurants, loading } = useGlobalContext();

  return (
    <div>
      {restaurants.map(restaurant => (
        <RestaurantCard
          key={restaurant.restaurantsId}
          restaurant={restaurant}
        />
      ))}
    </div>
  );
}

export default RestaurantList;
