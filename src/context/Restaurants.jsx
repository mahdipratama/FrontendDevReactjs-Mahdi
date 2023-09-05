/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { useEffect, useState, useContext, createContext } from 'react';
import getRestaurants from '../actions/getRestaurants';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const restaurants = await getRestaurants();

        const dataRestaurants = restaurants.map(restaurant => {
          const {
            averageRating: rating,
            currentOpenStatusCategory: currentStatus,
            currentOpenStatusText: currentStatusText,
            establishmentTypeAndCuisineTags: cuisine,
            heroImgUrl,
            name,
            parentGeoName: location,
            priceTag,
            restaurantsId,
          } = restaurant;

          return {
            rating,
            currentStatus,
            currentStatusText,
            cuisine,
            heroImgUrl,
            name,
            location,
            priceTag,
            restaurantsId,
          };
        });

        setRestaurants(dataRestaurants);

        isLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        restaurants,
      }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
