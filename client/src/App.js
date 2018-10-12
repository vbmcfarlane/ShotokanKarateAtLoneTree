import React, {Component} from "react";
// import './App.css';
import { Switch, Link, BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Classes from "./components/pages/Classes";
import Instructors from "./components/pages/Instructors";
import Contact from "./components/pages/Contact";

const NotFoundPage = () => (
    <div> <center>
      <h1> 404 page not found </h1>
      <br />
      <h3>
      <Link to ="/"> Home Page </Link> 
      </h3>
      </center>
    </div>
    );
class App extends Component{
  render() { 
    return ( 
      <Router>
          <Switch>
            <Route exact path="/" component={Home}  />
            <Route exact path="/about" component={About} />
            <Route exact path="/classes" component={Classes} />
            <Route exact path="/instructors" component={Instructors}     />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFoundPage} />
         </Switch>
      </Router>
      );
  }
}
export default App;
