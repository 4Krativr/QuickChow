/* eslint-disable jsx-a11y/anchor-is-valid */
import quickchowLogo from '../assets/quick-chow-logo.png';
import React, { useState, useEffect} from "react";
import '../styles/general-styles.scss'
import '../styles/LandingPage-styles/navbar.scss';
import { useNavigate } from 'react-router-dom';
import UserRole from './userRole';


function Navbar(){
    const [showUserRole, setShowUserRole] = useState(false);
    const handleButtonClick = () => {
    // Toggle the state
    setShowUserRole((prevState) => !prevState);
    };
    const navigate = useNavigate()
    return(
        <nav className={`nav navbar navbar-expand-lg container`}>
            <div className="container">
                <a className="navbar-brand col-lg-3 me-0" href="#">
                        <img src={quickchowLogo} alt="QuickChow logo" className= "quick-chow-logo" loading='lazy'/>
                </a>
                <button className="navbar-toggler collapse-btn ms-auto d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg"
                aria-controls="navbarOffcanvasLg"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-end d-flex flex-column flex-lg-row px-3" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                            <img src={quickchowLogo} alt="QuickChow logo" className= "quick-chow-logo"/>
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <ul className="navbar-nav col-lg-7 justify-content-lg-evenly">
                        <li className="nav-item dropdown services-dropdown">
                            <a className="nav-link active  dropdown-toggle" href="services" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Deliveries</a></li>
                                <li><a className="dropdown-item" href="#">Restaurants</a></li>
                                <li><a className="dropdown-item" href="#">Couriers</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Testomonials</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-disabled="true" href='#'>Contact</a>
                        </li>
                    </ul>
                    <div className="d-lg-flex nav-btn-div col-lg-5 justify-content-lg-end">
                        {/* <button className="nav-btn-login" onClick={() => navigate('authentication')}>Log in</button>
                        <button className="nav-btn-signup" onClick={handleButtonClick}>Sign Up</button> */}
                        <a href="https://chat.whatsapp.com/IMhX7SXWv9n3CEpzaFnjds" target='_blank'>
                            <button className='nav-btn-signup'>
                                Order Now
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            {showUserRole && <UserRole />}
        </nav>
    )
}
export default Navbar;