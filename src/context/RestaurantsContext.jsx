/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { useEffect, useState, useContext, createContext } from 'react';
import getRestaurants from '../actions/getRestaurants';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const restaurants = await getRestaurants();

        setRestaurants(restaurants);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRestaurants();
  }, []);

  const cagetory = [
    ...new Set(restaurants.map(restaurant => restaurant.cuisine)),
  ];

  const price = [
    ...new Set(
      restaurants
        .map(restaurant => restaurant?.priceTag)
        .filter(priceTag => priceTag !== undefined && priceTag !== null) //
    ),
  ];

  return (
    <AppContext.Provider
      value={{
        isLoading,
        restaurants,
        cagetory,
        price,
      }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
