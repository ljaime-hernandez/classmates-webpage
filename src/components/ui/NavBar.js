import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { englishLanguage, spanishLanguage } from '../../actions/ui';

export const NavBar = () => {

    const dispatch = useDispatch();

    const engLanguage = () => {
        dispatch(englishLanguage());
    }

    const espLanguage = () => {
        dispatch(spanishLanguage());
    }

    return (
        <nav className="navbar navbar-expand-sm navbar__container">
            
            <div className='navbar__header'>
                <div className='ms-2 navbar__icon'></div>
                <Link 
                    className="navbar-brand ms-2" 
                    to="/"
                >
                    ClassMates
                </Link>
            </div>

            <div className="navbar-collapse">
                <div className="navbar-nav">
             
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
                    <NavLink 
                        className={({isActive}) => "nav-item nav-link" + (isActive ? ' active' : '')} 
                        to="/rates"
                    >
                        Tarifas
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
                        onClick={engLanguage}
                    >
                        Espanol
                    </button>
                    <button 
                        className="nav-item nav-link btn me-5"
                        onClick={espLanguage}
                    >
                        English
                    </button>
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