/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getRestaurant from '../actions/getRestaurant';

import rating1 from '../assets/icons/rating1.svg';
import rating2 from '../assets/icons/rating2.svg';
import rating3 from '../assets/icons/rating3.svg';
import rating4 from '../assets/icons/rating4.svg';
import rating4point5 from '../assets/icons/rating4point5.svg';
import rating5 from '../assets/icons/rating5.svg';

function RestaurantDetail() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [restaurant, setRestaurant] = useState('');

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const restaurant = await getRestaurant(id);

        setRestaurant(restaurant);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRestaurant();
  }, [id]);

  const getRatingImage = rating => {
    if (rating === 1) return rating1;
    if (rating === 2) return rating2;
    if (rating === 3) return rating3;
    if (rating === 4) return rating4;
    if (rating === 4.5) return rating4point5;
    return rating5;
  };
  const {
    name,
    primaryRating,
    latitude,
    longitude,
    image,
    address,
    description,
    ranking,
    openStatusText,
    openStatus,
  } = restaurant;

  const ratingImageSrc = getRatingImage(primaryRating);

  return (
    <article className="mt-10">
      <div className="flex items-center gap-3">
        <h2 className="text-lg">{name} </h2>
        <span className="w-[70px] h-[30px] inline-block">
          <img src={ratingImageSrc} className="w-full h-full" alt="ratings" />
        </span>
      </div>

      <div>
        <div>
          <div className="w-[500px] h-[520px]">
            <img
              src={image}
              alt="restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <h3>{name}</h3>
          <div className="flex items-center gap-2">
            <span className="w-[70px] h-[30px] inline-block">
              <img
                src={ratingImageSrc}
                className="w-full h-full"
                alt="ratings"
              />
            </span>
            <p>Ranking: {ranking}</p>
          </div>

          <div>
            <p>{description}</p>
            <span>address: {address}</span>

            <p className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 48 48"
                fill={openStatus?.includes('CLOSED') ? 'red' : 'green'}
                className="inline-block -mt-1 -mr-2"
                id="bullet">
                <path d="M24 30c-3.312 0-6-2.688-6-6s2.688-6 6-6 6 2.688 6 6-2.688 6-6 6z"></path>
              </svg>
              {openStatusText}
            </p>
          </div>
        </div>

        <div>{/* TODO: map leaflet library */}</div>
      </div>
    </article>
  );
}

export default RestaurantDetail;
