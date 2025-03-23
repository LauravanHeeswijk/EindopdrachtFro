import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/PageLayout/PageLayout";
import React from "react";
import Dadjoke from "../../assets/Dadjoke.png";
import "./HomePage.css"


function HomePage() {
    const navigate = useNavigate();

    return (
        <div className= "homepage-container">
        <PageLayout
            text='“ZO GOED DAT ZE SLECHT ZIJN”'
            buttonText="NEW DAD JOKE"
            buttonAction={() => navigate("/new-dadjoke")}
            image={Dadjoke}
        />
        </div>
    );
}

export default HomePage;
