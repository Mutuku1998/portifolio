import React from "react";
import {Switch,Route, BrowserRouter,Link} from "react-router-dom"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Navbar from "./pages/Navbar";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import './App.css';
function App() { 
  return (
    
    <div className="header">
  
<hr/> 

  <BrowserRouter>
  <nav className="topnav">
    <ul>
  
    <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Skills">Skills</Link></li>
            <li><Link to="/Works">Works</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
    </ul>
  </nav>
  <Switch>
  <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Navbar">
            <Navbar />
          </Route>
          <Route path="/Skills">
            <Skills/>
            </Route>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/Works">
            <Works />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
          </Switch>
  </BrowserRouter>
    </div>
  );
}
export default App;