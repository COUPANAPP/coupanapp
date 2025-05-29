import React, { useState } from "react";
import "./RestaurantCard.css";
import { FaStar, FaMapMarkerAlt, FaClock, FaHeart, FaRegHeart } from "react-icons/fa";

const RestaurantCard = ({ restaurant }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="restaurant-card">
      <div className="image-container">
        <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
        <div className="favorite-icon" onClick={toggleFavorite}>
          {isFavorite ? <FaHeart className="heart-filled" /> : <FaRegHeart className="heart-outline" />}
        </div>
      </div>

      <div className="restaurant-details">
        <h3 className="restaurant-name">{restaurant.name}</h3>
        <p className="description">{restaurant.description}</p>

        <div className="info-line">
          <span className="rating"><FaStar className="icon star" /> {restaurant.rating}</span>
          <span className="distance"><FaMapMarkerAlt className="icon geo" /> {restaurant.distance} miles</span>
          <span className="time"><FaClock className="icon clock" /> {restaurant.time} mins</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
