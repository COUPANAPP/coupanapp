import React, { useState } from "react";
import "./Restaurant.css";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { restaurantData } from "../../assets/assets";
import Pagination from "../../components/Pagination/Pagination";

const RestaurantPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedDistances, setSelectedDistances] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchText, setSearchText] = useState("");
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const handleCheckboxChange = (value, setState, state) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  // Filter restaurants based on selections
  const filteredRestaurants = restaurantData.filter((restaurant) => {
    const matchesRating =
      selectedRatings.length === 0 ||
      selectedRatings.some((r) => restaurant.rating >= parseFloat(r));
    const matchesDistance =
      selectedDistances.length === 0 ||
      selectedDistances.some((d) => parseFloat(restaurant.distance) <= parseFloat(d));
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(restaurant.category);
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchText.toLowerCase());

    return matchesRating && matchesDistance && matchesCategory && matchesSearch;
  });

  // Pagination logic
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = filteredRestaurants.slice(start, end);

  return (
    <div className="restaurant-page">
      <button className="filter-toggle-btn" onClick={() => setShowFilters(!showFilters)}>{showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      <div className="content">
        <aside className={`filter-sidebar ${showFilters ? "show" : ""}`}>
          <div className="filter-group">
            <h4>Search</h4>
            <input type="text" placeholder="Search restaurants..."value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
          </div>

          <div className="filter-group">
            <h4>Rating</h4>
            {[4, 3, 2, 1].map((rating) => (
              <label key={rating}>
                <input type="checkbox" value={rating} checked={selectedRatings.includes(rating.toString())} onChange={(e) => handleCheckboxChange(e.target.value, setSelectedRatings, selectedRatings) }/>
                {rating} & Up
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h4>Distance (miles)</h4>
            {[1, 5, 10, 20, 50].map((distance) => (
              <label key={distance}>
                <input type="checkbox" value={distance} checked={selectedDistances.includes(distance.toString())} onChange={(e) => handleCheckboxChange(e.target.value, setSelectedDistances, selectedDistances) }/>
                Within {distance} mi
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h4>Category</h4>
            {[...new Set(restaurantData.map((item) => item.category))].map((cat) => (
              <label key={cat}>
                <input type="checkbox" value={cat} checked={selectedCategories.includes(cat)} onChange={(e) => handleCheckboxChange(e.target.value, setSelectedCategories, selectedCategories) }/>
                {cat}
              </label>
            ))}
          </div>
        </aside>

        <div className="restaurant-content-container">
          <div className="restaurant-grid">
            {currentItems.length > 0 ? (
              currentItems.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))
            ) : (
              <p>No restaurants match the selected filters.</p>
            )}
          </div>
          <Pagination totalItems={filteredRestaurants.length} itemsPerPage={itemsPerPage} currentPage={currentPage} onPageChange={(page) => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: "smooth" }); }}/>
          {/* <Pagination totalItems={filteredRestaurants.length} itemsPerPage={itemsPerPage} currentPage={currentPage} onPageChange={setCurrentPage}/> */}
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
