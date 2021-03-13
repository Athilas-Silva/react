import React from "react";
import "./App.css";

import Header from "./componentes/Header/";
import Footer from "./componentes/Footer/";
import Card from "./componentes/Card/";

function App(){
  return(
    <div className="App">
      <Header />
      <Card />
      <Footer />
      </div>
  );
}

export default App;