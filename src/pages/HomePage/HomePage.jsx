import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/PageLayout/PageLayout";
import React from "react";
import Dadjoke from "../../assets/Dadjoke.png";


function HomePage() {
    const navigate = useNavigate();

    return (
        <PageLayout
            text='“ZO GOED DAT ZE SLECHT ZIJN”'
            buttonText="NEW DAD JOKE"
            buttonAction={() => navigate("/new-dadjoke")}
            image={Dadjoke}
        />
    );
}

export default HomePage;
