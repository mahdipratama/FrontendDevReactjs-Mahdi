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
import Loading from '../components/Loading';

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
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <article className="py-7 px-6 sm:py-10 lg:px-12">
          <div className="flex items-center gap-3 justify-center lg:justify-start ">
            <h2 className="text-lg">{name} </h2>
            <span className="w-[70px] h-[30px] inline-block">
              <img
                src={ratingImageSrc}
                className="w-full h-full"
                alt="ratings"
              />
            </span>
          </div>

          <div>
            <div className="max-w-[560px] lg:max-w-[1280px] flex flex-col mx-auto lg:flex-row gap-5 lg:gap-10">
              <div className=" h-[520px] flex-1">
                <img
                  src={image}
                  alt="restaurant"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex">
                  <h3 className="font-bold text-2xl">{name}</h3>

                  <p className="ml-auto text-sm text-center">
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

                <div className="flex flex-col items-start  gap-2 mb-8">
                  <span className="w-[80px] h-[20px] inline-block">
                    <img
                      src={ratingImageSrc}
                      className="w-full h-full"
                      alt="ratings"
                    />
                  </span>
                  <p className="">Ranking: {ranking}</p>
                </div>

                <div>
                  <p className="mb-1 font-semibold">
                    Address :{' '}
                    <span className="font-normal text-base  text-zinc-700 ">
                      {address}
                    </span>
                  </p>

                  <p className="font-semibold ">
                    Description :{' '}
                    <span className=" text-base font-normal text-zinc-700">
                      {description}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div>{/* TODO: map leaflet library */}</div>
          </div>
        </article>
      )}
    </>
  );
}

export default RestaurantDetail;
