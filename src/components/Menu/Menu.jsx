// Menu.jsx

import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../../container/Footer/Footer';
import './Menu.css';
import { Link } from 'react-router-dom';

// Images:
import BD from '../../assets/Food_Image/Food1.jpg';
import IND from '../../assets/Food_Image/food2.jpg';
import JP from '../../assets/Food_Image/food3.jpg';
import NL from '../../assets/Food_Image/food4.jpeg';

const Menu = () => {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="title">
          <h2>
            Fresh food for good health
          </h2>
        </div>

        <div className="menu">
          <div className="single-menu">
            <img src={IND} width="162px" height="211px" alt="" />
            
            <Link to="/indian-menu" className="menu-link">
              View Indian Menu
            </Link>
          </div>

          <div className="single-menu">
            <img src={BD} width="162px" height="211px" alt="" />
            
            <Link to="/BanglaFood" className="menu-link">
              View BD Menu
            </Link>
          </div>

          <div className="single-menu">
            <img src={JP} width="162px" height="211px" alt="" />
            
            <Link to="/Netherlands-Food" className="menu-link">
              View Dutch Menu
            </Link>
          </div>

          <div className="single-menu">
            <img src={NL} width="162px" height="211px" alt="" />
            
            <Link to="/JapaneseMenu" className="menu-link">
              View Japanese Menu
            </Link>
          </div>

          <div className="single-menu">
            <img src={BD} width="162px" height="211px" alt="" />
            
            <Link to="/ThaiFood" className="menu-link">
              View ThaiFood Menu
            </Link>
          </div>

          <div className="single-menu">
            <img src={IND} width="162px" height="211px" alt="" />
            
            <Link to="/ChaineseFood" className="menu-link">
              View Chainese Food
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
