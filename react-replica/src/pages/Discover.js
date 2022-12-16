import React from "react";
import { DiscoverContainer } from "../components/atoms/Discover.elements";
import microphone from "../images/microphone.svg";
import album from "../images/albums.svg";
import more from "../images/more.svg";
import covers from "../images/covers.jpg";
import Footer from "../components/molecules/Footer";

const Discover= () => {
    return(
        <DiscoverContainer>
    <div>
        <h2>Discover new music</h2>
        <p>Cards</p>
        <p>By joining you can benefit by listening to the latest albums released.</p>
    </div>
    <div>
        <img></img>
    </div>
        </DiscoverContainer>    
        
    );
};

export default Discover;
