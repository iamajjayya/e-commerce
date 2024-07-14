import { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";
import CheckoutPage from "./CheckoutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storeCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storeCartItems);
  }, []);

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  const handleIncerease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    //  update storegae values
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  const handleremoveItem = (item) => {
    const updateCart = cartItems.filter(
      (cartItems) => cartItems.id !== item.id
    );
    //
    setCartItems(updateCart);
    updateLocalstorage(updateCart);
  };

  const updateLocalstorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const cartSubTotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  //   order total

  const ordertotal = cartSubTotal;

  return (
    <>
      <Header title={"Shop Cart "} curPage={"Cart Page"} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <section className="section-wrapper">
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="product-item cart-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>
                      <td className="cart-price">Rs {item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncerease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        {" "}
                        Rs {calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleremoveItem(item)}>
                          {" "}
                          <img src={delImgUrl} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* cart bottom  */}
            <div className="cart-bottom">
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupen code .."
                  />
                  <input type="submit" value="Apply Coupen" />
                </form>
                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div>
                    <CheckoutPage />
                  </div>
                </form>
              </div>
              {/* Checkout box end  */}
              {/*  shopping box */}
              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shiping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="india">India</option>
                          <option value="usa">Usa</option>
                          <option value="uk">UK</option>
                          <option value="england">England</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>

                        <div className="outline -select shipping select">
                          <select>
                            <option value="india">Delhi</option>
                            <option value="usa">New York</option>
                            <option value="uk">Paris</option>
                            <option value="england">England</option>
                          </select>
                          <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                        </div>
                        <input type="text" name="postalCode" id="postalCode" className="cart-page-input-text"  placeholder="Post Code / ZIP *" />
                       <div> <button type="submit">Update Address</button> </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                          <h3>Cart Totals </h3>
                          <ul className="lab-ul">
                               <li>
                                <span className="pull-left"> Cart SubTotal </span>
                                 <p className="pull-right"> Rs {cartSubTotal}</p>

                               </li>
                               <li>
                                <span className="pull-left"> Shiping and Handling </span>
                                 <p className="pull-right"> Free Shiping  </p>

                               </li>
                               <li>
                                <span className="pull-left"> Order Total </span>
                                 <p className="pull-right"> Rs  {ordertotal.toFixed(2)} </p>

                               </li>

                          </ul>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CartPage;
