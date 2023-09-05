/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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
      <div className="flex gap-2">
        <span>{cuisine}</span> - <span>{priceTag ? `${priceTag}` : '$'}</span>
        <p className="ml-auto">{currentStatusText}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
