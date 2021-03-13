import React from "react";
import senai from "./Img/senai.png";
import "./style.css";


function Header(){
    return(
        <header>
            <img src={senai} id="logo"/>
            <p>Senai Suiço-Brasileira Paulo Ernesto Tolle</p>
        </header>
    );
}

export default Header;