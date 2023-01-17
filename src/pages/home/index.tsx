import React from "react";
import "./index.scss";
import car from "../../assets/car.png";

const Home = () => {
    return (
        <div className="home">
            Home
            <img className="car" src={car} alt="car" />
        </div>
    );
};

export default Home;
