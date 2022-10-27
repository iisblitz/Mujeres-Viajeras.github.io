import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./Components/Home";
import LandingPage from "./Components/LandingPage";
import Blog from "./Components/Blog";
import ShoppingCart from "./Components/ShoppingCart";
import Profile from "./Components/Profile";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
   <Router>
    <Routes>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/shop" element={<ShoppingCart/>}></Route>
    <Route path="/profile"exact element={<Profile/>}> </Route>
    <Route path="/" element={<LandingPage/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
