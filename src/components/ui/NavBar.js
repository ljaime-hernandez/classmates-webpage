import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { englishLanguage, spanishLanguage } from '../../actions/ui';

export const NavBar = () => {

    const dispatch = useDispatch();
    const {ui} = useSelector(state => state);
    const {english} = ui;

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
                        {
                            english
                            ?   "Profesores"
                            :   "Teachers"
                        }
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => "nav-item nav-link" + (isActive ? ' active' : '')} 
                        to="/about"
                    >
                        {
                            english
                            ?   "Conocenos"
                            :   "About"
                        }
                    </NavLink>
                    <NavLink 
                        className={({isActive}) => "nav-item nav-link" + (isActive ? ' active' : '')} 
                        to="/contact"
                    >
                        {
                            english
                            ?   "Contacto"
                            :   "Contact"
                        }
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <button 
                        className="nav-item nav-link btn me-5"
                        onClick={engLanguage}
                    >
                        {
                            english
                            ?   "Español"
                            :   "Spanish"
                        }
                        
                    </button>
                    <button 
                        className="nav-item nav-link btn me-5"
                        onClick={espLanguage}
                    >
                        {
                            english
                            ?   "Inglés"
                            :   "English"
                        }
                        
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