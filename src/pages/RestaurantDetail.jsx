import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getRestaurant from '../actions/getRestaurant';

import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import rating1 from '../assets/icons/rating1.svg';
import rating2 from '../assets/icons/rating2.svg';
import rating3 from '../assets/icons/rating3.svg';
import rating4 from '../assets/icons/rating4.svg';
import rating4point5 from '../assets/icons/rating4point5.svg';
import rating5 from '../assets/icons/rating5.svg';
import Loading from '../components/Loading';
import { Icon } from 'leaflet';

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

  const customIcon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/447/447031.png',
    iconSize: [38, 38],
  });

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
    email,
    phone,
    website,
  } = restaurant;

  const ratingImageSrc = getRatingImage(primaryRating);

  const position = [latitude, longitude];

  const hrefGoogleMaps = `http://maps.google.com/?q=${address}`;

  const hrefMailto = `mailto:${email}`;

  const hrefWebsite = { website };

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
              <div className="max-w-[560px]  h-[320px] flex-1">
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

            <div className="mt-10 mx-auto lg:mx-0 max-w-[560px]">
              <h3 className="font-bold text-2xl mb-2">Location and Contact</h3>

              <MapContainer center={position} zoom={15}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={customIcon}></Marker>
              </MapContainer>

              <div className="shadow-small p-5">
                <a
                  className="hover:underline block"
                  href={hrefGoogleMaps}
                  rel="noreferrer"
                  target="_blank">
                  <div className="flex gap-1 items-start mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <span>{address}</span>
                  </div>
                </a>

                <div className="flex ">
                  <a
                    href={hrefMailto}
                    className="hover:underline block basis-[50%] ">
                    <div className="flex gap-1 items-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-4">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                        />
                      </svg>
                      <span>Email</span>
                    </div>
                  </a>
                  <a
                    className="hover:underline block basis-[50%]"
                    href={hrefWebsite}
                    rel="noreferrer"
                    target="_blank">
                    <div className=" flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                      <span>website</span>
                    </div>
                  </a>
                </div>
                <p>{phone}</p>
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  );
}

export default RestaurantDetail;
