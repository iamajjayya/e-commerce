import { useState } from "react";
import { Link } from "react-router-dom";
import productData from "../products.json";
import SelectedCategory from "../Components/SelectedCategory";

const title = (
  <h2>Search from <span>Thousands</span> of products</h2>
);

const desc = "We have the largest collection of products";

const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1000 Customers"
  },
  {
    iconName: "icofont-notification",
    text: "More than 200 Merchants",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = e => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    const filtered = productData.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCategory select={"all"} />
            <input 
              type="text" 
              name="search" 
              id="search" 
              placeholder="Search your Product"  
              value={searchInput} 
              onChange={handleSearch} 
            />
            <button className="submit"> 
            <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput && filteredProducts.map((product, i) => (
              <li key={i}>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
