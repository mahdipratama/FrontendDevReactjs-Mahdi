/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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

  return (
    <div>
      <p>name: {name}</p>
      <p>category: {cuisine}</p>
    </div>
  );
}

export default RestaurantCard;
