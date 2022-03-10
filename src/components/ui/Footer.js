import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export const Footer = () => {

  const {ui} = useSelector(state => state);
  const {english} = ui;

  return (
    <div className="container">
      <footer className="row row-cols-5 py-5 border-top footer__navigation">

      <div className="col footer__col">
        <div className='mt-3 mb-2 footer__header'>
        <div className='ms-4 navbar__icon'></div>
        <div className='ms-2 navbar__classmates-icon'></div>
        </div>

          <ul className="nav flex-column footer__flex-column">

            <Link 
                to="/"
            >
              <li className="nav-item mb-2 nav-link p-0">
                {
                    english
                    ?   "Inicio"
                    :   "Home"
                }
              </li>
            </Link>

            <Link 
                to="teachers"
            >
              <li className="nav-item mb-2 nav-link p-0">
                {
                  english
                  ?   "Profesores"
                  :   "Teachers"
                }
              </li>
            </Link>

            <Link 
                to="about"
            >
              <li className="nav-item mb-2 nav-link p-0">
                {
                    english
                    ?   "Conocenos"
                    :   "About"
                }
              </li>
            </Link>

            <Link 
                to="contact"
            >
              <li className="nav-item mb-2 nav-link p-0">
                {
                    english
                    ?   "Contacto"
                    :   "Contact"
                }
              </li>
            </Link>

          </ul>
      </div>

      <div className="col footer__col">
        <p className="mb-3">
          {
              english
              ?   "Siguenos"
              :   "Follow us"
          }
          </p>
        <a href="https://www.facebook.com/classmatesclub.english"><i className="fa-brands fa-facebook fa-3x me-2"></i></a>
        <a href="https://www.instagram.com/classmateslessons"><i className="fa-brands fa-instagram fa-3x me-2"></i></a>
        <a href="https://wa.me/573223348472?text=Me%20interesan%20las%20clases%20de%20ingles"><i className="fa-brands fa-whatsapp fa-3x"></i></a>
      </div>

      </footer>

      <div className='col footer__whatsapp'>
        <a href="https://wa.me/573223348472?text=Me%20interesan%20las%20clases%20de%20ingles">
          <i className="fa-brands fa-whatsapp fa-3x"></i>
        </a>
      </div>

    </div>
  )
}
