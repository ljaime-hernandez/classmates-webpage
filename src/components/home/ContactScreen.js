import React from 'react'
import validator from 'validator';
import emailjs from '@emailjs/browser';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const ContactScreen = () => {

    const dispatch = useDispatch();

    const {msgError} = useSelector( state => state.ui );

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

        emailjs.sendForm('ClassMates', 'template_ky31mjc', e.target, 'oDnNgsMZnp_PKSk3u')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
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
    <h1 className='mb-5 mt-5 d-flex justify-content-center'>En CLASSMATES tambien te ayudamos con:</h1>
      <ul className='contact__list contact__paragraph'>
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

    <h1 className='mb-5 mt-5 d-flex justify-content-center'>Demostracion Sin Compromiso!!</h1>
        
      <p className='contact__paragraph'>
      En classmates tienes la opción de solicitar una clase demo sin ningún costo para que conozcas nuestra metodología 
      y conozcas tu nivel de inglés antes de comenzar tu curso. Recuerda que tienes la opción de distrubuir las horas en 
      los horarios que mejor se acomoden a tus necesidades.
      </p>

    <div className='contact__main'>

        <div className='contact__box-container'>
                    
            <h3 className="contact__title">Contactanos</h3>

            <form 
              onSubmit={sendEmail}
              className='animate__animated animate__fadeIn' 
            >

            {
                msgError &&
                (<div className="contact__alert-error">
                {msgError}
                </div>)
            }

            <input
                type="text"
                placeholder="Name"
                name="name"
                className="contact__input"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
                
            />

            <input
                type="text"
                placeholder="Email"
                name="email"
                className="contact__input"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
            />

            <input
                type="text"
                placeholder="Phone"
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
                placeholder="write something"
                name="text"
                className="contact__input"      
                value={text}
                onChange={handleInputChange} 
            />

            <button
                type="submit"
                className="btn btn-primary btn-block mb-3 mt-3"
            >
                Enviar
            </button>

            <Link 
                className="link"
                to="/"
            >
                Volver a la pagina principal
            </Link>
            </form>

    </div>
  </div>
</>
  )
}
