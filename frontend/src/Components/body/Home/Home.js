import React from "react";
import bg1 from "../../../Images/bg2.jpg"
import "./Home.css";
const Home = () => {

    return (

        <div className="landing-page">
            <div className="container">
                <div className="info">
                <h1>Welcome to BridgeConnect Feedback Portal! 🌟</h1>
<h6>Get answers within a few days, with our cutting-edge technology features! 💻🚀</h6>

                    <button className="btn btn-success"  >Get Started Now</button>
                </div>
                <div className="image">
                    <img src={bg1} />
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    );
};
export default Home;
