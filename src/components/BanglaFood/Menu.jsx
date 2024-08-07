import React, { useContext, useState } from "react";
import styles from "./Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faEye } from "@fortawesome/free-solid-svg-icons";
import food1 from "../../assets/Food_Image/Food1.jpg";
import food2 from "../../assets/Food_Image/food2.jpg";
import food3 from "../../assets/Food_Image/food3.jpg";
import food4 from "../../assets/Food_Image/food4.jpeg";
import { CartContext } from "../../context/rootContext";

const products = [
  {
    id: 1,
    image: food4,
    title: "Delicious Food 1",
    oldPrice: 20,
    newPrice: 18,
    quantity:1,
    ingredients: "Rice, Chicken, Vegetables",
  },
  {
    id: 2,
    image: food3,
    title: "Delicious Food 2",
    oldPrice: 20,
    newPrice: 18,
    quantity:1,
    ingredients: "Rice, Chicken, Vegetables",
  },
  {
    id: 3,
    image: food2,
    title: "Delicious Food 3",
    oldPrice: 20,
    newPrice: 18,
    quantity:1,
    ingredients: "Rice, Chicken, Vegetables",
  },
  {
    id: 4,
    image: food1,
    title: "Delicious Food 4",
    oldPrice: 20,
    newPrice: 18,
    quantity:1,
    ingredients: "Rice, Chicken, Vegetables",
  },
  {
    id: 5,
    image: food4,
    title: "Delicious Food 5",
    oldPrice: 20,
    newPrice: 18,
    quantity:1,
    ingredients: "Rice, Chicken, Vegetables",
  },
  {
    id: 6,
    image: food4,
    title: "Delicious Food 6",
    oldPrice: 20,
    newPrice: 18,
    quantity:1,
    ingredients: "Rice, Chicken, Vegetables",
  },
  {
    id: 7,
    image: food4,
    title: "Delicious Food 7",
    oldPrice: 20,
    newPrice: 18,
    quantity:1,
    ingredients: "Rice, Chicken, Vegetables",
  },
  {
    id: 8,
    image: food4,
    title: "Delicious Food 8",
    oldPrice: 20,
    newPrice: 18,
    quantity:1,
    ingredients: "Rice, Chicken, Vegetables",
  },
  {
    id: 9,
    image: food4,
    title: "Delicious Food 9",
    oldPrice: 20,
    newPrice: 18,
    quantity:1,
    ingredients: "Rice, Chicken, Vegetables",
  },
];

function Menu() {
  const { cart, setCart } = useContext(CartContext);

  // Function to add item to the cart
  const addToCart = (foodItem) => {
    const existingItemIndex = cart.findIndex((item) => item.id === foodItem.id);
  
    if (existingItemIndex !== -1) {
      // If item already exists in cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If item is not in cart, add it with quantity 1
      const updatedCart = [...cart, { ...foodItem }];
      setCart(updatedCart);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.foodItems}>
        {products.map((data) => (
          <FoodCard
            key= {data.id}
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
