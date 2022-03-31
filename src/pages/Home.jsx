import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>This is home </h1>
            <div>
                <Link to="/second">
                    <button>Click heere to change page</button>
                </Link>
            </div>
        </>
    );
};

export default Home;
