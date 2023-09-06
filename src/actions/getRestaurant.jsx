const API_KEY = 'fc4f74323bmshe51ba96da497468p1a533fjsn08f8e3f2035e';

const getRestaurant = async id => {
  const url =
    'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails?restaurantsId=' +
    id;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response) throw new Error('Could not get any Restaurant');

    const result = await response.json();

    const { data } = result;

    const {
      overview: { name },
      overview: {
        rating: { primaryRating },
      },
      overview: {
        location: { latitude, longitude },
      },
      location: {
        photo: {
          caption,
          images: {
            large: { url: image },
          },
        },
      },
      location: { address, description, ranking, email, phone, website },
      hours: { openStatusText, openStatus },
    } = data;

    console.log(data);

    return {
      name,
      primaryRating,
      latitude,
      longitude,
      caption,
      image,
      address,
      description,
      ranking,
      openStatusText,
      openStatus,
      email,
      phone,
      website,
    };
  } catch (error) {
    console.error(error);
  }
};

export default getRestaurant;
