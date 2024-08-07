import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../container/Footer/Footer";
import "./Cart.css";
import { FaTrash, FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons
import { CartContext } from "../../context/rootContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const handleDeleteItem = (id) => {
    const updatedCartItems = cart.filter((item) => item.id !== id);
    setCart(updatedCartItems);
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCartItems = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, newQuantity) }; // Ensure quantity is never less than 1
      }
      return item;
    });
    setCart(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      if (
        typeof item.newPrice === "number" &&
        typeof item.quantity === "number" &&
        !isNaN(item.newPrice) &&
        !isNaN(item.quantity)
      ) {
        totalPrice += item.newPrice * item.quantity;
      }
    });
    return totalPrice.toFixed(2);
  };

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="Sorry">Sorry, You Didn't Add Any Food To Cart</p>
        ) : (
          <div className="cart-table">
            <table>
              <thead>
                <tr>
                  <th>Food Number</th>
                  <th>Food Image</th>
                  <th>Food Name</th>
                  <th>Food Price</th>
                  <th>Food Quantity</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={item.image} alt="Foods" />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.newPrice ? item.newPrice.toFixed(2) : "N/A"}</td>
                    <td>
                      <div className="quantity-control">
                        <FaChevronLeft
                          className="quantity-button"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                        />
                        <input
                          type="number"
                          value={item.quantity || 1}
                          min={1}
                          onChange={(e) =>
                            handleQuantityChange(item.id, parseInt(e.target.value))
                          }
                        />
                        <FaChevronRight
                          className="quantity-button"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                        />
                      </div>
                    </td>
                    <td>
                      ${item.newPrice && item.quantity
                        ? (item.newPrice * item.quantity).toFixed(2)
                        : item.newPrice}
                    </td>
                    <td>
                      <FaTrash
                        className="delete-icon"
                        onClick={() => handleDeleteItem(item.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Order Total Table */}
        <div className="order-total">
          <h3>Order Total</h3>
          <table>
            <tbody>
              <tr>
                <td>Total:</td>
                <td>${calculateTotalPrice()}</td>
              </tr>
            </tbody>
          </table>
          {/* <Link to="/payment" className="proceed-to-pay">
            Proceed to Pay
          </Link> */}
        </div>
        {/* Order More Button */}
        <div className="order-more">
        <Link to="/payment" className="proceed-to-pay">
            Proceed to Pay
          </Link>
          <Link to="/menu" className="order-more-btn">
            Order More
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
