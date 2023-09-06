const API_KEY = 'fc4f74323bmshe51ba96da497468p1a533fjsn08f8e3f2035e';

const getRestaurants = async () => {
  const url =
    'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=60763';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response) throw new Error('Could not get any Restaurants');

    const {
      data: { data: restaurants },
    } = await response.json();

    const dataRestaurants = restaurants.map(restaurant => {
      const {
        averageRating: rating,
        currentOpenStatusCategory: currentStatus,
        currentOpenStatusText: currentStatusText,
        establishmentTypeAndCuisineTags: cuisines,
        heroImgUrl,
        name,
        parentGeoName: location,
        priceTag,
        restaurantsId,
      } = restaurant;

      const cuisine = cuisines[0];

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

    return dataRestaurants;
  } catch (error) {
    console.error(error);
  }
};

export default getRestaurants;
