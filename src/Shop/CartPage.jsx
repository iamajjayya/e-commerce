import { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png"

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
                             <a href="#" onClick={ () =>  handleremoveItem(item)}> <img src={delImgUrl} /></a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* cart bottom  */}
            <div>
            
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CartPage;
