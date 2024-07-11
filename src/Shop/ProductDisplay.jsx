import { useState } from "react";

const desc =
  "Transform your daily routine with our innovative solution, offering unparalleled convenience and efficiency";

const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, quantity } = item;
  const [preQuantity, setQuantity] = useState(quantity);
  const [coupen, setCoupen] = useState("");
  const [size, setSize] = useState(" Select size");
  const [color, setColer] = useState("Select Color");

  const handleSizechange = (e) => {
    setSize(e.target.value);
  };

  const handleColorchange = (e) => {
    setColer(e.target.value);
  }

const  handleDecrease = () => {
  if (preQuantity > 1 ) {
      setQuantity( preQuantity -1) ;
  }

}

const handleIncerse = () => {
     setQuantity(preQuantity + 1)
   
}
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span> {ratingsCount} review </span>
        </p>
        <h4>Rs {price} </h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>
      {/* cart componets  */}
      <div>
        <form>
          <div className="select-product size">
            <select value={size} onChange={handleSizechange}>
              <option> Select Size</option>
              <option value="SM">SM</option>
              <option value="MD">MD</option>
              <option value="LG">LG</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          <div className="select-product size">
            <select value={color} onChange={handleColorchange}>
              <option> Select color</option>
              <option>Red</option>
              <option>Pink</option>
              <option>White</option>
              <option>Black</option>
              <option>Yellow</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* plus  minus */}

          <div className="cart-plus-minus">
               <div className="dec qtybutton" onClick={handleDecrease}>-</div>
               <input className="cart-plus-minus-box" type="text" name="qtyButton" id="qtyButton"  value={preQuantity} onChange={ (e) => setQuantity(parseInt(e.target.value))} />
               <p className="inc qtybutton" onClick={handleIncerse}>+</p>
          </div>

          {/* coupen filed  */}
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
