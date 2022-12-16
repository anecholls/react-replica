import React from "react";
import Button from 'react-bootstrap/Button';
import { HomeContainer, HomeWrapped1, HomeWrapped2 } from "../components/atoms/Home.elements";
import Photo from "../images/landing-page-girl.png";


const Home= () => {
    return(
    <HomeContainer>
        <HomeWrapped1>
       {/*<Photo/> */}
        </HomeWrapped1>
        <HomeWrapped2>
            <div className="home-wrapped-2">
            <h1>Feel the music</h1>
            <h2>Stream over 20 thousand songs with one click.</h2>
            <Button variant="primary">Primary</Button>{' '}
            </div>
        </HomeWrapped2>
     </HomeContainer>     
    
    );
};

export default Home;