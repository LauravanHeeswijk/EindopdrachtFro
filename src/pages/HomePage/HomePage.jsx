import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import NavButton from "../../components/Button/NavButton";
// import opaImage from "../../assets/dad-image.png";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="homepage-container">
            {/*<img src={opaImage} alt="Dad Jokes Opa" className="homepage-image" />*/}
            <h2 className="homepage-text">
                "ZO <i>GOED</i> DAT ZE <i>SLECHT</i> ZIJN"
            </h2>
            <NavButton text="NEW DAD JOKE" path="/new-dadjoke" isPrimary={true} />
        </div>
    );
}

export default HomePage;
