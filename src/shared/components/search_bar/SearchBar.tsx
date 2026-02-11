import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "Italy", continent: "Europe" },
    { name: "Brazil", continent: "South America" },
  ];

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <input
          type="search"
          placeholder="Search country..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="search-input"
        />
        <FaSearch className="search-icon" />
      </div>

      {isOpen && (
        <div className="search-dropdown">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => {
                  setSearchInput(country.name);
                  setIsOpen(false);
                }}
              >
                {country.name}
              </div>
            ))
          ) : (
            <div className="dropdown-item">No result</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
