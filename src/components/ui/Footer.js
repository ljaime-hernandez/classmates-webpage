import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="container">
  <footer className="row row-cols-5 py-5 border-top footer__navigation">

  <div className="col">
      <h5>Section</h5>
      <ul className="nav flex-column">

            <Link 
                to="/"
            >
                      <li className="nav-item mb-2 nav-link p-0 text-muted">Home</li>
            </Link>

            <Link 
                to="teachers"
            >
                      <li className="nav-item mb-2 nav-link p-0 text-muted">Teachers</li>
            </Link>

            <Link 
                to="about"
            >
                      <li className="nav-item mb-2 nav-link p-0 text-muted">About</li>
            </Link>

            <Link 
                to="contact"
            >
                      <li className="nav-item mb-2 nav-link p-0 text-muted">Contact</li>
            </Link>

      </ul>
    </div>

    <div className="col">
        <p className="text-muted mb-3">Follow us</p>
      <a href="https://www.facebook.com/classmatesclub.english"><i className="fa-brands fa-facebook fa-3x me-2"></i></a>
      <a href="https://www.instagram.com/classmateslessons"><i className="fa-brands fa-instagram fa-3x me-2"></i></a>
      <a href="https://wa.me/16475630998?text=Me%20interesan%20las%20clases%20de%20ingles"><i className="fa-brands fa-whatsapp fa-3x"></i></a>
    </div>
  </footer>

  <div className='col footer__whatsapp'>
      <a href="https://wa.me/16475630998?text=Me%20interesan%20las%20clases%20de%20ingles">
          <i className="fa-brands fa-whatsapp fa-3x"></i>
      </a>
  </div>

</div>

  )
}
