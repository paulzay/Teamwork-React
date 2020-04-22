import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
    <div className="jumbotron">
        <h1>Welcome To Teamwork!</h1>
        <p>Because Teamwork makes the dream work.</p>
        <Link to="signup" className="btn btn-primary btn-lg">
            Signup
        </Link>
    </div>
    
);

export default Home;