import React from 'react'
import validator from 'validator';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const ContactScreen = () => {

    const dispatch = useDispatch();

    const {msgError, english} = useSelector( state => state.ui );
    

    const [values, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        phone: '',
        text: '',
      })
    
      const {name, email, phone, text} = values;
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        if (isFormValid()){

        emailjs.sendForm(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_TEMPLATEID, e.target, process.env.REACT_APP_EMAILJSID)
          .then((result) => {
              console.log("Message sent successfully");

              let confirm;
              let message;

                if(english) { 
                  confirm="Enviado";
                  message="Tu mensaje fue enviado! por favor espera a que uno de nuestros profesores se contacten contigo"
                }else{
                  confirm="Sent";
                  message="Your message was correctly sent! please wait patiently for one of our teachers to contact you shortly"
                }

               Swal.fire(confirm, message, 'success');
              },(error) => {
              console.log(error.text);
          });
          reset();
      };
    }
    
      const isFormValid = () => {
    
        if(name.trim().length === 0){
          dispatch(setError("The name input is incorrect"))
          return false;
        } else if ( !validator.isEmail(email)){
          dispatch(setError("The email input is incorrect"))
          return false;
        } else if( !validator.isMobilePhone(phone)){
          dispatch(setError("The phone input is incorrect"))
          return false;
        }
    
        dispatch(removeError())
        return true;
      }

  return (
  <>

    <div className='contact__main animate__animated animate__fadeIn'>

      <div className='contact__box-container'>

        <h3 className="contact__title">
          { english ? "Llámanos" : "Call us"}
        </h3>
        
        <div className="card-body">
          <p className="card-text contact__card-text"><small className="text-muted">+1 (347) 610-0577 </small>
            <span className='contact__us-icon'/></p>
          <p className="card-text contact__card-text"><small className="text-muted">+57 (301) 405-8318 </small>
          <span className='contact__colombia-icon'/></p>
        </div>
                  
        <h3 className="contact__title">
          { english ? "Contáctanos" : "Contact us"}
        </h3>

        <form 
          onSubmit={sendEmail}
          className='animate__animated animate__fadeIn' 
        >

          {
              msgError &&
              (
                <div className="contact__alert-error">
                  {msgError}
                </div>
              )
          }

          <input
              type="text"
              placeholder={english ? "Nombre" : "Name"}
              name="name"
              className="contact__input"
              value={name}
              onChange={handleInputChange}
              
          />

          <input
              type="text"
              placeholder="Email"
              name="email"
              className="contact__input"
              value={email}
              onChange={handleInputChange}
          />

          <input
              type="text"
              placeholder={english ? "Teléfono" : "Phone"}
              name="phone"
              className="contact__input"
              value={phone}
              onChange={handleInputChange}       
          />

          <textarea
              rows="4" 
              cols="50"
              maxLength="500"
              type="text"
              placeholder={english ? "Escríbenos" : "Write your inquiry here"}
              name="text"
              className="contact__input"      
              value={text}
              onChange={handleInputChange} 
          />

          <button
              type="submit"
              className="btn btn-primary btn-block mb-3 mt-3"
          >
            {english ? "Enviar" : "Send"}
          </button>

          <Link 
            className="link"
            to="/"
          >
            {english ? "Volver a la página principal" : "Return to home page" }
          </Link>
        </form>

    </div>
  </div>
</>
  )
}
