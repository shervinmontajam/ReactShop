import React from 'react';
import { Route, BrowserRouter , Switch } from 'react-router-dom';
import Header from '../shared/layout-components/header/Header';
import Footer from '../shared/layout-components/footer/Footer';
import Notfound from '../shared/errors/not-found/NotFound';
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";

const App = () => {
    return(
<div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route component={Notfound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
    );
}

export default App;