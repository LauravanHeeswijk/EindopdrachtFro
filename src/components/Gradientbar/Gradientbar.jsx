import React from 'react';
import Dadjoke from "../../assets/Dadjoke.png";
import './GradientBar.css';

const GradientBar = () => {
    return (
        <div className="header-container">
            <div className="gradient-bar"></div>
            <img src={Dadjoke} alt="Dad joke" className="dadjoke-image"/>
            <p className="subtitle">“ZO GOED DAT ZE SLECHT ZIJN”</p>
        </div>
    );
};

export default GradientBar;
