import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
        <Navbar collapseOnSelect expand="sm" className="navbar navbar__container" variant="dark">
            <Container className="navbar navbar__container">
            <Navbar.Brand>
                    <div className='navbar__header'>
                    <div className='ms-4 navbar__icon'></div>
                        <Link 
                            className="navbar-brand ms-2" 
                            to="/"
                        >
                            <div className='navbar__classmates-icon'></div>
                        </Link>
                    </div>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavLink 
                        className={({isActive}) => "nav-item nav-link" + (isActive ? ' active' : '')} 
                        to="/"
                    >
                        {
                            english
                            ?   "Inicio"
                            :   "Home"
                        }
                    </NavLink>
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
                            ?   "Conócenos"
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
                    <div className="navbar-collapse collapse dual-collapse2 d-flex justify-content-end">
                        <ul className="navbar-languages ml-auto">

                            
                            <button 
                                className="nav-item nav-link btn me-5"
                                onClick={engLanguage}
                            >
                                <div className="navbar__esp-icon"></div>
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
                                <div className="navbar__eng-icon"></div>
                                {
                                    english
                                    ?   "Inglés"
                                    :   "English"
                                }
                                
                            </button>
                            
                        </ul>
                    </div>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}