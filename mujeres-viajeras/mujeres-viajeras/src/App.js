import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./Components/Home";
import LandingPage from "./Components/LandingPage";
import Blog from "./Components/Blog";
import Profile from "./Components/Profile";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Catalogo from "./Components/Catalogo";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  return (
   <Router>
    <Routes>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/Perfil"exact element={<Profile/>}> </Route>
    <Route path="/Carrito"exact element={<ShoppingCart/>}> </Route>
    <Route path="/" element={<LandingPage/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
