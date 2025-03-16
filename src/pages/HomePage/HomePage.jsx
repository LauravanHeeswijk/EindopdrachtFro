import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/PageLayout/PageLayout";
import React from "react";

function HomePage() {
    const navigate = useNavigate();

    return (
        <PageLayout
            text='“ZO GOED DAT ZE SLECHT ZIJN”'
            buttonText="NEW DAD JOKE"
            buttonAction={() => navigate("/new-dadjoke")}
        />
    );
}

export default HomePage;
