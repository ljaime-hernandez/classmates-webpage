import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar__container">
            
            <Link 
                className="navbar-brand ms-5" 
                to="/"
            >
                ClassMates
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    {/* <NavLink 
                        className={({isActive}) => "nav-item nav-link" + (isActive ? ' active' : '')} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink> */}
             
                    <NavLink 
                        className={({isActive}) => "nav-item nav-link" + (isActive ? ' active' : '')} 
                        to="/teachers"
                    >
                        Teachers
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => "nav-item nav-link" + (isActive ? ' active' : '')} 
                        to="/about"
                    >
                        About
                    </NavLink>
                    <NavLink 
                        className={({isActive}) => "nav-item nav-link" + (isActive ? ' active' : '')} 
                        to="/contact"
                    >
                        Contactanos
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span
                        className='nav-item nav-link text-info'
                    >
                        { }
                    </span>

                    <button 
                        className="nav-item nav-link btn me-5" 
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}