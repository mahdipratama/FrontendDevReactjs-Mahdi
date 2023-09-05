const url =
  'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=304554';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
  },
};

const getRestaurants = async () => {
  try {
    const response = await fetch(url, options);

    if (!response) throw new Error('Could not get any Restaurants');

    const result = await response.json();

    const { data } = result;

    const { data: restaurants } = data;

    return restaurants;
  } catch (error) {
    console.error(error);
  }
};

export default getRestaurants;
