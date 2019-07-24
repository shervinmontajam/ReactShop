import React from "react";
import { BrowserRouter } from "react-router-dom";
import '@progress/kendo-theme-bootstrap/dist/all.css';

import Header from "../shared/layout-components/header/Header";
import Footer from "../shared/layout-components/footer/Footer";
import MenuHorizontal from "../menu/MenuHorizontal";
import RouteList from "../menu/RouteList";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <MenuHorizontal />
          <RouteList />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
