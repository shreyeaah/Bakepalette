import React from "react";
import Logo from "../assets/logo_nobg.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';

function Navbar() {
  return (
    <div>
      {/* Top Thin Navbar */}
      <div className="topnav">

        <div  className="topnav-left">
          <p>Homemade Cakes at your Doorstep</p>
        </div>
        
        <div className="topnav-right">
          <input type="text" placeholder="Search cakes..." className="search-bar" />
          <button className="icon-button">
            <i className="bi bi-person-circle"></i>  {/* Profile Icon */}
          </button>
          <button className="icon-button">
            <i className="bi bi-cart3"></i>  {/* Cart Icon */}
          </button>
          <button className="icon-button">
            <i className="bi bi-trophy-fill"></i>  {/* Trophy Icon */}
          </button>
          <button className="icon-button">
            <i className="bi bi-instagram"></i>  {/* Instagram Icon */}
          </button>
        </div>     
      </div>

      {/* Main Navbar */}
      <div className="navbar">
        <div className="leftnav">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="rightnav">
          <Link to="/">Home</Link>
          <Link to="/">Order Now</Link>
          <Link to="/">Build Your Cake</Link>
          <Link to="/">Gallery</Link>
          <Link to="/">Reviews</Link>
          <Link to="/">Contact Us</Link>
          <button>
          <ReorderOutlinedIcon />
          </button>      
        </div>
      </div>
    </div>
  );
}

export default Navbar;