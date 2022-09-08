import React from "react";

import Navbar from "./navbar";
import Tagline from "./tagline";
import CardGrid from "./card-grid";
import Footer from "./footer";
//create your first component
const Home = () => {
	return (
		<div className="main-contain">
                <Navbar/>
                
                <Tagline/>

                <CardGrid/>

                <Footer/>
    </div>
	);
};

export default Home;
