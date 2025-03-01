import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner">
            <p>Even geduld, de grap wordt geladen...</p>
            <div className="spinner"></div>
        </div>
    );
};

export default LoadingSpinner;
