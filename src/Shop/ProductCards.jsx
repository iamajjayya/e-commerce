import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Ratting from "../Components/Ratting";

const ProductCards = ({ gridlist, products }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCartClick = () => {
    if (!user) {
      navigate("/login", { state: { from: "/cart-page" } });
    } else {
      navigate("/cart-page");
    }
  };

  return (
    <div className={`shop-product-wrap row justify-content-center ${gridlist ? "grid" : "list"}`}>
      {products.map((product, i) => (
        <div key={i} className="col-lg-4 col-md-6 col-12">
          <div className="product-list-item">
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="product-action-link">
                <Link to={`/shop/${product.id}`}><i className="icofont-eye"></i></Link>
                <a href="#"><i className="icofont-heart"></i></a>
                <a href="#" onClick={handleCartClick}><i className="icofont-cart-alt"></i></a>
              </div>
            </div>
            <div className="product-content">
              <h5><Link to={`/shop/${product.id}`}>{product.name}</Link></h5>
              <p className="productrating"><Ratting /></p>
              <h6>Rs {product.price}</h6>
            </div>
          </div>
          <div className="product-item">
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="product-action-link">
                <Link to={`/shop/${product.id}`}><i className="icofont-eye"></i></Link>
                <a href="#"><i className="icofont-heart"></i></a>
                <a href="#" onClick={handleCartClick}><i className="icofont-cart-alt"></i></a>
              </div>
            </div>
            <div className="product-content">
              <h5><Link to={`/shop/${product.id}`}>{product.name}</Link></h5>
              <p className="productrating"><Ratting /></p>
              <h6>Rs {product.price}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
