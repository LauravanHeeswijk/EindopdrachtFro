import React from "react";
import "./PageLayout.css";
import DadjokeImage from "../../assets/Dadjoke.png";

const PageLayout = ({ text, buttonText, buttonAction }) => {
    return (
        <div className="page-layout-container">
            <img src={DadjokeImage} alt="Dad Jokes" className="page-layout-image"/>
            <div className="page-layout-content">
                <h2 className="page-layout-text">{text}</h2>
                <button className="page-layout-button" onClick={buttonAction}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default PageLayout;