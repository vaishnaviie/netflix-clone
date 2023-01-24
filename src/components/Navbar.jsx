import React from 'react';
import netflixLogo from '../netflix-logo.png';
import { Link } from 'react-router-dom';
import "./Navbar.scss";
import {ImSearch} from "react-icons/im"

const Header = () => {
  return (
    
    <nav className='header'>
        <img src={netflixLogo} alt="Logo" />
        <div>
            <Link to={"/tvshows"}> TV shows </Link>
            <Link to={"/movies"}> Movies </Link>
            <Link to={"/popular"}> Popular </Link>
            <Link to={"/recent"}> Recently Added </Link>
            
        </div>
        <ImSearch/>
    </nav>
  )
}

export default Header