import React from "react";
import './home.css'

import Header from "../Header/header";
import Footer from "../Footer/footer";
import Body from "../Body/body";

const Home = () => {
    return (
        <div className='home'>
            <div>
                <Header />
            </div>
            <div>
                <Body />
            </div>
        </div>
    );
}

export default Home;
