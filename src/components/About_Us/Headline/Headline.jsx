import React from 'react';
import './Headline.css';

const Headline = () => {
    return (
        <section className="headline">
            <div className="headline-container">
                <div className="headline-list">
                    <div className="headline-list-item">
                        <div className="headline-icon-div">
                            <i className="fa fa-clock-o headline-icon"></i>
                        </div>
                        <div className="headline-list-div">
                            <span>Fresh Food All-Time</span>
                            <span className="headline-sub-text">We Serve To Your Satisfaction</span>
                        </div>
                    </div>

                    <div className="headline-list-item">
                        <div className="headline-icon-div">
                            <i className="fa fa-map-marker headline-icon"></i>
                        </div>
                        <div className="headline-list-div">
                            <span>Multi-National Food</span>
                            <span className="headline-sub-text">Foods From All Over The World</span>
                        </div>
                    </div>

                    <div className="headline-list-item">
                        <div className="headline-icon-div">
                            <i className="fa fa-phone headline-icon"></i>
                        </div>
                        <div className="headline-list-div">
                            <span>Chef At Your Home</span>
                            <span className="headline-sub-text">Our Chef Will Cook At Your Home</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Headline;