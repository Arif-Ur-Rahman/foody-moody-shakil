import React, { useState } from "react";
import "./Megamenu.css";
import { Link } from "react-router-dom";
import pizzaImage from "../../assets/biryani.png";
import Kacchibiriany from "../../assets/biryani.png";
import breadImage from "../../assets/biryani2.png";
import fishImage from "../../assets/biryani3.png";
import carrotImage from "../../assets/biryani2.png";
import cookieImage from "../../assets/biryani3.png";
import SubMegaCategory from "./SubMegaCategory";

// indian Menu
import H_Biriyani from "../../assets/Food_Image/IndianFood/Hydarabadi.png";
import C_Biriyani from "../../assets/Food_Image/IndianFood/ChickenBiriyani.png";
import Fish from "../../assets/Food_Image/IndianFood/Fishcurry.png";
import Kazu from "../../assets/Food_Image/IndianFood/Kajukatli.png";
import dosa from "../../assets/Food_Image/IndianFood/dosa.png";
import Halwa from "../../assets/Food_Image/IndianFood/gajarhalwa.png";
import naan from "../../assets/Food_Image/IndianFood/naan.png";
import BD_Flag from "../../assets/flag/Flag_of_Bangladesh.svg.png";
import Indian_Flag from "../../assets/flag/Flag_of_India.svg.png";
import Netharlands_Flag from "../../assets/flag/Flag_of_the_Netherlands.svg.png";
import Thailand_Flag from "../../assets/flag/Flag_of_Thailand.svg.png";
import Chinese_Flag from "../../assets/flag/Flag_of_the_People's_Republic_of_China.svg.webp";
import Japanese_Flag from "../../assets/flag/Flag_of_Japan.svg.png";

const Megamenu = () => {
  const [hovering, setHovering] = useState(null);

  const menuItems = [
    {
      name: "BD Food Menu",
      description: "Delicious Bangladeshi Items",
      icon: BD_Flag,
      link: "BanglaFood",
    },
    {
      name: "Indian Menu",
      description: "Authentic Indian flavors",
      icon: Indian_Flag,
      link: "indian-menu",
    },
    {
      name: "Netharland Food Items",
      description: "Fresh seafood from Bangladesh",
      link: "Netherlands-Food",
      icon: Netharlands_Flag,
    },
    {
      name: "Japanese Food Menu",
      description: "Healthy Japanese Delicious Items",
      link: "JapaneseMenu",
      icon: Japanese_Flag,
    },
    {
      name: "Thai Food",
      description: "Traditional Thai Food",
      link: "ThaiFood",
      icon: Thailand_Flag,
    },
    {
      name: "Chinese Items",
      description: "View Are Chainese Special Items",
      link: "ChaineseFood",
      icon: Chinese_Flag,
    },
  ];

  return (
    <div className="megamenu">
      <div className="row">
        <div className="main_category">
          {menuItems.map((item, index) => (
            <div
              className="mega-menu-item"
              id={`item-active-${index}`}
              onMouseEnter={() => setHovering(index)}
            >
              <Link className="link-main-category" to={`/${item.link}`}>
                <div>
                  <img className="flag-icon" src={item.icon} alt={item.title} />
                </div>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {hovering === 0 ? (
          <div className="mega-sub-main-menu">
            <div>
              <SubMegaCategory
                img={Kacchibiriany}
                title="Kacchi Biriyani"
                subTitle="Special Spicy Mutton With Bashmoti Rice"
              />
              <SubMegaCategory
                img={breadImage}
                title="Morog Polau"
                subTitle="Chicken Roast With Special Rice With Kebab & Borhani"
              />
              <SubMegaCategory
                img={fishImage}
                title="Beef Khichuri"
                subTitle="Tender pieces of Beef cooked in a creamy tomato-based sauce flavored with Hot Khichuri"
              />
              <SubMegaCategory
                img={carrotImage}
                title="Beef Tehari"
                subTitle="A spicy and aromatic Thai curry made with green curry paste"
              />
              <SubMegaCategory
                img={cookieImage}
                title="Chicken Jhaal Fry"
                subTitle="Spicy and numbing tofu dish cooked with minced pork"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Illish & Egg"
                subTitle="A Korean mixed rice dish topped with assorted vegetables"
              />
            </div>
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="Fish Fry & Rice"
                subTitle="Flavorful Bangladeshi fried rice cooked with Fish."
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Sheek Kebab With Naan"
                subTitle="A classic Bangladeshi dish featuring Kebab & Naan"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Mangso Parata"
                subTitle="Succulent crab cooked in a spicy and tangy tomato-based chili "
              />
            </div>
          </div>
        ) : hovering === 1 ? (
          <div className="mega-sub-main-menu">
            <div>
              <SubMegaCategory
                img={C_Biriyani}
                title="Butter Chicken"
                subTitle="A classic Indian dish with tender chicken cooked in a rich buttery tomato sauce."
              />
              <SubMegaCategory
                img={naan}
                title="Naan"
                subTitle="Soft and fluffy Indian bread baked in a tandoor oven, perfect for dipping in curry."
              />
              <SubMegaCategory
                img={Fish}
                title="Fish Curry"
                subTitle="Spicy and flavorful curry made with fish and traditional Indian spices."
              />
              <SubMegaCategory
                img={Halwa}
                title="Gajar Halwa"
                subTitle="Sweet and decadent carrot pudding, a popular Indian dessert."
              />
              <SubMegaCategory
                img={Kazu}
                title="Kaju Katli"
                subTitle="Delicious cashew nut fudge, a beloved Indian sweet treat."
              />
              <SubMegaCategory
                img={H_Biriyani}
                title="Samosa"
                subTitle="Crispy pastry filled with spiced potatoes and peas, a favorite Indian snack."
              />
            </div>
            <div>
              <SubMegaCategory
                img={dosa}
                title="Matar Paneer"
                subTitle="Here is one more dish from the neverending list of Indian Cuisines."
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Tandoori Chicken"
                subTitle="Tandoori chicken is a famous North Indian cuisine"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Masala Dosa"
                subTitle="This conventional south Indian dish is mainstream"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Hyderabadi Biriyani"
                subTitle="Hyderabadi biriyani is a finger-licking South Indian preparation"
              />
            </div>
          </div>
        ) : hovering === 2 ? (
          <div className="mega-sub-main-menu">
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="Stroopwafel"
                subTitle="A traditional Dutch treat consisting of thin waffle cookies filled with caramel syrup."
              />
              <SubMegaCategory
                img={breadImage}
                title="Bitterballen"
                subTitle="Deep-fried meat-based snack, usually filled with beef ragout, popular in the Netherlands."
              />
              <SubMegaCategory
                img={fishImage}
                title="Poffertjes"
                subTitle="Small, fluffy pancakes often served with powdered sugar and butter, a Dutch favorite."
              />
              <SubMegaCategory
                img={carrotImage}
                title="Erwtensoep"
                subTitle="Thick pea soup with pork, celery, carrots, and leeks, a hearty winter dish in the Netherlands."
              />
              <SubMegaCategory
                img={cookieImage}
                title="Kroket"
                subTitle="Deep-fried roll filled with a meat ragout, a popular snack in Dutch cuisine."
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Haring"
                subTitle="Raw herring fillet typically served with onions and pickles, a traditional Dutch delicacy."
              />
            </div>
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
            </div>
          </div>
        ) : hovering === 3 ? (
          <div className="mega-sub-main-menu">
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="Sushi"
                subTitle="Assorted bite-sized rolls of vinegared rice topped with fresh seafood or vegetables."
              />
              <SubMegaCategory
                img={breadImage}
                title="Ramen"
                subTitle="Japanese noodle soup dish with wheat noodles"
              />
              <SubMegaCategory
                img={fishImage}
                title="Okonomiyaki"
                subTitle="Savory Japanese pancake containing a variety of ingredients like cabbage"
              />
              <SubMegaCategory
                img={carrotImage}
                title="Tempura"
                subTitle="Lightly battered and deep-fried seafood or vegetables"
              />
              <SubMegaCategory
                img={cookieImage}
                title="Matcha"
                subTitle="Finely ground green tea powder, used to prepare traditional Japanese green tea."
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Mochi"
                subTitle="Chewy rice cakes made from glutinous rice, often filled with sweet bean paste or ice cream."
              />
            </div>
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="Takoyaki"
                subTitle="Octopus-filled batter balls topped with savory sauce"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Sashimi"
                subTitle="Fresh slices of raw fish or seafood served without rice"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Yakitori"
                subTitle="Grilled skewers of chicken or other meats"
              />
            </div>
          </div>
        ) : hovering === 4 ? (
          <div className="mega-sub-main-menu">
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={breadImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={fishImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={carrotImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={cookieImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
            </div>
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
            </div>
          </div>
        ) : hovering === 4 ? (
          <div className="mega-sub-main-menu">
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={breadImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={fishImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={carrotImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={cookieImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
            </div>
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
            </div>
          </div>
        ) : (
          <div className="mega-sub-main-menu">
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="Japanese Sushi Platter"
                subTitle="Assorted nigiri and maki sushi featuring fresh fish like salmon"
              />
              <SubMegaCategory
                img={breadImage}
                title="Vietnamese Pho"
                subTitle="Fragrant beef noodle soup with thinly sliced beef"
              />
              <SubMegaCategory
                img={fishImage}
                title="Indian Butter Chicken"
                subTitle="Tender pieces of chicken cooked in a creamy tomato-based sauce flavored with butter"
              />
              <SubMegaCategory
                img={carrotImage}
                title="Thai Green Curry"
                subTitle="A spicy and aromatic Thai curry made with green curry paste"
              />
              <SubMegaCategory
                img={cookieImage}
                title="Chinese Mapo Tofu"
                subTitle="Spicy and numbing tofu dish cooked with minced pork"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Korean Bibimbap"
                subTitle="A Korean mixed rice dish topped with assorted vegetables"
              />
            </div>
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="Indonesian Nasi Goreng"
                subTitle="Flavorful Indonesian fried rice cooked with shrimp, chicken"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Malaysian Roti Canai with Curry"
                subTitle="Flaky and crispy Malaysian flatbread served"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Filipino Adobo"
                subTitle="A classic Filipino dish featuring chicken or pork simmered"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Singaporean Chili Crab"
                subTitle="Succulent crab cooked in a spicy and tangy tomato-based chili "
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Megamenu;
