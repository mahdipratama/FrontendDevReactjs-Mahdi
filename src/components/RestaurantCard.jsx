/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import rating1 from '../assets/icons/rating1.svg';
import rating2 from '../assets/icons/rating2.svg';
import rating3 from '../assets/icons/rating3.svg';
import rating4 from '../assets/icons/rating4.svg';
import rating4point5 from '../assets/icons/rating4point5.svg';
import rating5 from '../assets/icons/rating5.svg';

function RestaurantCard({ restaurant }) {
  const {
    rating,
    currentStatus,
    currentStatusText,
    cuisine,
    heroImgUrl,
    name,
    location,
    priceTag,
    restaurantsId,
  } = restaurant;

  const getRatingImage = rating => {
    if (rating === 1) return rating1;
    if (rating === 2) return rating2;
    if (rating === 3) return rating3;
    if (rating === 4) return rating4;
    if (rating === 4.5) return rating4point5;
    return rating5;
  };

  const ratingImageSrc = getRatingImage(rating);

  return (
    <div>
      <div className="w-[275px] h-[250px]">
        <img
          className="w-full h-full object-cover"
          src={heroImgUrl}
          alt="restaurant picture"
        />
      </div>
      <h3 className="text-md font-semibold ">{name}</h3>
      <div className="w-[70px] h-[30px]">
        <img src={ratingImageSrc} className="w-full h-full" alt="ratings" />
      </div>
      <div className="flex gap-2 items-center">
        <span>{cuisine}</span> - <span>{priceTag ? `${priceTag}` : '$'}</span>
        <p className="ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 48 48"
            fill={currentStatus.includes('CLOSED') ? 'red' : 'green'}
            className="inline-block -mt-1 -mr-2"
            id="bullet">
            <path d="M24 30c-3.312 0-6-2.688-6-6s2.688-6 6-6 6 2.688 6 6-2.688 6-6 6z"></path>
          </svg>
          {currentStatusText}
        </p>
      </div>

      <Link to={`/restaurant/${restaurantsId}`}>
        <button className="mx-auto block bg-zinc-500 text-white px-6 py-2 mt-5">
          More detail
        </button>
      </Link>
    </div>
  );
}

export default RestaurantCard;
