import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "../shared/layout-components/header/Header";
import Footer from "../shared/layout-components/footer/Footer";
import MenuHorizontal from "../shared/menu/MenuHorizontal";
import RouteList from "../shared/menu/RouteList";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <MenuHorizontal />
        <div class="main-content">
          <RouteList />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
