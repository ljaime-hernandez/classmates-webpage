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
    <h1 className='mb-5 mt-5 d-flex justify-content-center'>
      {
          english
          ?   "En CLASSMATES tambien te ayudamos con:"
          :   "In CLASSMATES we also help you with:"
      }   
    </h1>
    {
      english
      ?   <ul className='contact__list contact__paragraph'>
            <li><i className="fa-solid fa-bullseye me-3"></i>
              Preparación para la presentación de exámenes internacionales tales
              como: IELTS, TOEFL, CAMBRIDGE, MET.
            </li>
            <li><i className="fa-solid fa-bullseye me-3"></i>
              Traducciones de documentos oficiales y no oficiales tales como;
              Tesis, textos escolares y/o universitarios, libros, diplomas, actas de
              grado, etc.
            </li>
            <li><i className="fa-solid fa-bullseye me-3"></i>
              Participación en clubs de conversación para que practiques lo
              aprendido con tus tutores, interactúes con otros estudiantes y pierdas
              del miedo a hablar en otro idioma.
            </li>
          </ul>
      :   <ul className='contact__list contact__paragraph'>
            <li><i className="fa-solid fa-bullseye me-3"></i>
              Preparation for international exams such as: IELTS, TOEFL, CAMBRIDGE, 
              MET.
            </li>
            <li><i className="fa-solid fa-bullseye me-3"></i>
              Translations of official and unofficial documents such as; Theses, school 
              and/or university texts, books, diplomas, degree certificates, etc.
            </li>
            <li><i className="fa-solid fa-bullseye me-3"></i>
              Participation in conversation clubs so that you can practice what you have 
              learned with your tutors, interact with other students and lose the fear 
              of speaking in another language.
            </li>
          </ul>
    }   
    
    <h1 className='mb-5 mt-5 d-flex justify-content-center'>
      {
          english
          ?   "Demostracion Sin Compromiso!!"
          :   "Demonstration Without Commitment!! "
      }
    </h1>
           
    {
        english
        ?   <p className='contact__paragraph'>
              En classmates tienes la opción de solicitar una clase demo sin ningún costo para que conozcas nuestra metodología 
              y conozcas tu nivel de inglés antes de comenzar tu curso. Recuerda que tienes la opción de distribuir las horas en 
              los horarios que mejor se acomoden a tus necesidades.
            </p>
        :   <p className='contact__paragraph'>
              In classmates you have the option to request a demo class at no cost so that you can learn about our methodology
              and know your English level before starting your course. Remember, you have the option to distribute the class 
              hours to your comodity
            </p>
    }

    <div className='contact__main'>

      <div className='contact__box-container'>
                  
        <h3 className="contact__title">
          { english ? "Contactanos" : "Contact us"}
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
              placeholder={english ? "Telefono" : "Phone"}
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
              placeholder={english ? "Escribenos" : "Write your inquiry here"}
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
            {english ? "Volver a la pagina principal" : "Return to home page" }
          </Link>
        </form>

    </div>
  </div>
</>
  )
}
