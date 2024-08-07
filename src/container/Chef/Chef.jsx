import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className= "app__bg app__wrapper section__padding">

    <div className="app__wrapper_img app__wrapper_img_reverse">
      <img src= {images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title= "Chef's word"/>
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-contect_quote">
          <img src= {images.quote} alt="quote" />

          <p className="p__opensans">
          At Foody Moody, we believe in crafting culinary experiences that tantalize the senses 
          and nourish the soul. Our chef's passion for fresh, locally sourced ingredients and 
          innovative techniques drives every dish. We're committed to fostering a 
          dining atmosphere where guests feel welcomed, valued, and inspired with each bite.
          </p>
        </div>

        <div className="app__chef-sign">
          <p>Arif Ur Rahman</p>
          <p className="p__opensans"> Chef & founder</p>
          <img src= {images.sign} alt="sign" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
