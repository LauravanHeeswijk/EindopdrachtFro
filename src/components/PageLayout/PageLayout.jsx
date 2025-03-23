import React from "react";
import "./PageLayout.css";

const PageLayout = ({ text, buttonText, buttonAction, image, children }) => {
    return (
        <div className="page-layout-container">
            <img src={image} alt="Dad Jokes" className="page-layout-image" />
            <div className="page-layout-content">
                <h2 className="page-layout-text">{text}</h2>
                <button className="page-layout-button" onClick={buttonAction}>
                    {buttonText}
                </button>
                {children}
            </div>
        </div>
    );
};

export default PageLayout;