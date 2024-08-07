import React, { useContext, useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaShoppingCart, FaUser, FaEye } from "react-icons/fa";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import Megamenu from "../Megamenu/Megamenu";
import SubscriptionMegamenu from "../SubscriptionMegamenu/SubscriptionMegamenu";
import { CartContext } from "../../context/rootContext";
import prof from "../../assets/Me.jpg";

const Navbar = () => {
  const { cart, setCart } = useContext(CartContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSubscriptionMegamenu, setShowSubscriptionMegamenu] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const cartModalRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (showCartModal && cartModalRef.current) {
      cartModalRef.current.scrollTop = cartModalRef.current.scrollHeight;
    }
  }, [cart, showCartModal]);

  useEffect(() => {
    if (cart.length > 0 ) {
      if(location.pathname === "/BanglaFood" || location.pathname === "/indian-menu" || location.pathname ==="/JapaneseMenu" || location.pathname ==="/Netherlands-Food" || location.pathname ==="/ThaiFood" || location.pathname ==="/ChaineseFood"){
        setShowCartModal(true);
      }
      
    } else {
      setShowCartModal(false);
    }
  }, [cart, location.pathname]);

  const calculateTotal = (cart) => {
    return cart
      .reduce((total, item) => total + item.newPrice * item.quantity, 0)
      .toFixed(2);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const [isUserLogin, setIsUserLogin] = useState(true);
  const toggleShowHide = () => {
    setShowLogin(!showLogin);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.foodymoody} alt="app__logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="/">Home</a>
        </li>
        <li className="p__opensans">
          <Link to="/About">About Us</Link>
        </li>
        <li
          className="p__opensans"
          onMouseEnter={() => setToggleMenu(true)}
          onMouseLeave={() => setToggleMenu(false)}
        >
          <Link to="/menu">Menu</Link>
          {toggleMenu && <Megamenu />}
        </li>
        <li className="p__opensans">
          <Link to="/Feature">Featured-Bonus</Link>
        </li>
        <li
          className="p__opensans"
          onMouseEnter={() => setShowSubscriptionMegamenu(true)}
          onMouseLeave={() => setShowSubscriptionMegamenu(false)}
        >
          <Link to="/Subscription">Subscription</Link>
          {showSubscriptionMegamenu && <SubscriptionMegamenu />}
        </li>
        <li className="p__opensans">
          <Link to="/shef">Chef-At-Home</Link>
        </li>
      </ul>

      <div className="app__navbar-icons">
        <div className="icon" onClick={() => setShowCartModal(!showCartModal)}>
          <div className="cart-icon">
            <FaShoppingCart color="white" fontSize={"25px"} />
          </div>

          {showCartModal && (
            <div
              className="cart-modal-container"
              onClick={() => setShowCartModal(false)}
            >
              <div
                className="cart-modal"
                ref={cartModalRef}
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  {cart && Array.isArray(cart) && cart.length > 0 ? (
                    cart.map((item) => (
                      <div key={item.id} className="cart-item">
                        <div className="cart-item-image">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className="cart-item-details">
                          <span>{item.title}</span>
                        </div>
                        <div className="cart-item-quantity">
                          <span
                            className="quantity-control"
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                          >
                            -
                          </span>
                          <span>{item.quantity}</span>
                          <span
                            className="quantity-control"
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </span>
                        </div>
                        <div className="cart-item-price">
                          <span>{item.newPrice * item.quantity}</span>
                        </div>
                        <div className="cart-item-remove">
                          <Link to="/cart">
                            <FaEye />
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <span className="empty-cart-message">Cart is Empty!</span>
                  )}
                </div>
                <div className="cart-summary-total">
                  <span>Total:</span>
                  <span>{calculateTotal(cart)}</span>
                </div>
                <div className="btn">
                  <div
                    className="close-modal-link"
                    onClick={() => setShowCartModal(false)}
                  >
                    <span>Close</span>
                  </div>
                  <div className="proceed-to-checkout">
                    <Link to="/cart">Proceed to Checkout</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className="icon notification-icon-div"
          onClick={() => setShowCartModal(!showCartModal)}
        >
          {cart && Array.isArray(cart) && cart.length > 0 ? cart.length : 0}
        </div>
        {isUserLogin === true ? (
          <div className="anonymous-user">
            <div className="profile-div" onClick={toggleShowHide}>
              <img className="profile" src={prof} alt="sakib-images" />
            </div>
            {showLogin && (
              <div className="login-user">
                <Link to="/UserProfile">Profile</Link>
                {/* <Link to="/settings">Settings</Link>
                <Link to="/privacy">Privacy</Link>
                <Link to="/log-out">LogOut</Link> */}
              </div>
            )}
          </div>
        ) : (
          <div className="anonymous-user">
            <div className="click-icons icon" onClick={toggleShowHide}>
              <FaUser />
            </div>
            {showLogin && (
              <div className="login-user">
                <Link to="/login">LogIn</Link>
                <Link to="/signup">SignUp</Link>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="/">Home</a>
              </li>
              <li className="p__opensans">
                <Link to="/About">About Us</Link>
              </li>
              <li className="p__opensans">
                <Link to="/menu">Menu</Link>
              </li>
              <li className="p__opensans">
                <Link to="/Feature">Featured-Bonus</Link>
              </li>
              <li className="p__opensans">
                <Link to="/Subscription">Subscription</Link>
              </li>
              <li className="p__opensans">
                <Link to="/shef">Chef-At-Home</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
