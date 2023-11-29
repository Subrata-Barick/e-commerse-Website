import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import CheckOutPage from "./CheckOutPage";
import delImgUrl from "../assets/images/shop/del.png";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storeCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storeCartItems);
  }, []);
  //calculate prices
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };
  //handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);
    //update local storage with new cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  //handle quanity decrease;
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);

      //update locale storage with new cart items
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };
  //handel item remove
  const handleRemoveItem = (item) => {
    const updateCart = cartItems.filter((val) => val.id !== item.id);
    setCartItems(updateCart);
    updateLocalStorage(updateCart);
  };
  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  //cart subtotal
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);
  //order total
  const orderTotal = cartSubtotal;

  const [first, setfirst] = useState();

  return (
    <div>
      <PageHeader title={"Shop Cart"} curpage={"CartPage"} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/*cart top */}
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
                {/*table body */}
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to={"/shop"}>{item.name}</Link>
                        </div>
                      </td>
                      <td className="cat-price">{item.price}</td>
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
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        ${calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/*---cart top ends--- */}
            {/*cart bottom */}
            <div className="cart-bottom">
              {/*checkout box */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    name="coupon"
                    id=""
                    placeholder="coupon code....."
                  />
                  <input type="submit" value="Apply Coupon" />
                </form>
                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div>
                    <CheckOutPage/>
                  </div>
                </form>
              </div>
              {/*------checkout box end------ */}
              {/*shopping box */}
              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shiping</h3>
                      <div className="outline-select">
                        <select>
                            <option value="uk">United Kingdom(uk)</option>
                            <option value="usa">United States(USA)</option>
                            <option value="bha">Bharat</option>
                            <option value="pak">Pakistan</option>
                            <option value="nepal">Nepal</option>
                            <option value="bangladesh">Bangladesh</option>
                        </select>
                        <span className="select-icon">
                            <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <div className="outline-select shipping-select">
                      <select>
                            <option value="uk">London</option>
                            <option value="usa">New York</option>
                            <option value="bha">New Delhi</option>
                            <option value="pak">Korachi</option>
                            <option value="nepal">Kathmandu</option>
                            <option value="bangladesh">Dhaka</option>
                        </select>
                        <span className="select-icon">
                            <i className="icofont-rounded-down"></i>
                        </span>

                      </div>
                      <input type="text" name="postalCode" id="postalCode" placeholder="PostCode/ZIP" className="cart-page-input-text" />
                      <button type="submit">Update Address</button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">${cartSubtotal}</p>
                        </li>
                        <li>
                          <span className="pull-left">Shipping and Handling</span>
                          <p className="pull-right">Free Shiping</p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">${orderTotal.toFixed(2)}</p>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
