import React, { useContext, useState } from "react";
import styles from "./Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faEye } from "@fortawesome/free-solid-svg-icons";
import SweetCake from "../../assets/NetherlandsFood/Breakfast Cake.png";
import Chicken_Roll from "../../assets/NetherlandsFood/Chicken Roll.png";
import ChocolatePettis from "../../assets/NetherlandsFood/Chocolate Pettis.png";
import Kazu from "../../assets/Food_Image/IndianFood/Kajukatli.png";
import halwa from "../../assets/Food_Image/IndianFood/gajarhalwa.png";
import fish from "../../assets/Food_Image/IndianFood/Fishcurry.png";
import dosa from "../../assets/Food_Image/IndianFood/dosa.png";
import Salad from "../../assets/Food_Image/IndianFood/Salad.png";
import { CartContext } from "../../context/rootContext";

const products = [
  {
    id: 301,
    image: SweetCake,
    title: "Sweet Cake",
    oldPrice: 280,
    newPrice: 220,
    ingredients: "Sweet Cake with Red Fruits",
    quantity: 1,
  },
  {
    id: 302,
    image: Chicken_Roll,
    title: "Chicken Roll",
    oldPrice: 20,
    newPrice: 18,
    ingredients: "Chicken Roll & Evening Snakes",
    quantity: 1,
  },
  {
    id: 303,
    image: ChocolatePettis,
    title: "Chocolate Pettis",
    oldPrice: 100,
    newPrice: 95,
    ingredients: "Chocolate Pettis with mouth watering chocolate flabour",
    quantity: 1,
  },
  {
    id: 304,
    image: fish,
    title: "Fish Curry",
    oldPrice: 300,
    newPrice: 270,
    ingredients: "Rice with Fish Curry",
    quantity: 1,
  },
  {
    id: 305,
    image: Kazu,
    title: "Kazu Katli",
    oldPrice: 20,
    newPrice: 18,
    ingredients: "Rice, Chicken, Vegetables",
    quantity: 1,
  },
  {
    id: 306,
    image: Salad,
    title: "Fish Curry",
    oldPrice: 20,
    newPrice: 18,
    ingredients: "Rice, Chicken, Vegetables",
    quantity: 1,
  },
  {
    id: 307,
    image: halwa,
    title: "Delicious Food 7",
    oldPrice: 20,
    newPrice: 18,
    ingredients: "Rice, Chicken, Vegetables",
    quantity: 1,
  },
  {
    id: 8,
    image: ChocolatePettis,
    title: "Delicious Food 8",
    oldPrice: 20,
    newPrice: 18,
    ingredients: "Rice, Chicken, Vegetables",
    quantity: 1,
  },
  {
    id: 9,
    image: dosa,
    title: "Delicious Food 9",
    oldPrice: 20,
    newPrice: 18,
    ingredients: "Rice, Chicken, Vegetables",
    quantity: 1,
  },
];

function Menu() {
  const { cart, setCart } = useContext(CartContext);

  // Function to add item to the cart
  const addToCart = (foodItem) => {
    const existingItem = cart.find((item) => item.id === foodItem.id);

    if (existingItem) {
      // If item already exists in cart, increase quantity
      const updatedCart = cart.map((item) =>
        item.id === foodItem.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If item is not in cart, add with quantity 1
      setCart([...cart, { ...foodItem, quantity: 1 }]);
    }
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.foodItems}>
        {products.map((data) => (
          <FoodCard
            key={data.id}
            image={data?.image}
            title={data?.title}
            oldPrice={data?.oldPrice}
            newPrice={data?.newPrice}
            ingredients={data?.ingredients}
            addToCart={() => addToCart(data)}
          />
        ))}
      </div>
    </div>
  );
}

function FoodCard({
  image,
  title,
  oldPrice,
  newPrice,
  ingredients,
  addToCart,
}) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className={styles.foodCard}>
      <img src={image} alt="Food" className={styles.foodImage} />
      <div className={styles.details}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.price}>
          <div className={`${styles.oldPriceCircle} ${styles.priceCircle}`}>
            <span className={styles.oldPrice}>${oldPrice}</span>
          </div>
          <div className={`${styles.newPriceCircle} ${styles.priceCircle}`}>
            <span className={`${styles.newPrice} ${styles.biggerPrice}`}>
              ${newPrice}
            </span>
          </div>
        </div>
        <div className={styles.ingredients}>
          <span>Main Ingredients: {ingredients}</span>
        </div>
        <div className={styles.icons}>
          <div className={styles.iconContainer} onClick={addToCart}>
            <FontAwesomeIcon icon={faCartPlus} className={styles.icon} />
          </div>
          <div className={styles.iconContainer} onClick={toggleModal}>
            <FontAwesomeIcon icon={faEye} className={styles.icon} />
          </div>
        </div>
      </div>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span onClick={toggleModal} className={styles.close}>
              &times;
            </span>
            <img src={image} alt="Food" className={styles.modalImage} />
            <h2>{title}</h2>
            <div>
              <span>Old Price: ${oldPrice}</span>
              <span>New Price: ${newPrice}</span>
            </div>
            <div>Main Ingredients: {ingredients}</div>
            <button onClick={addToCart}>Buy</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
