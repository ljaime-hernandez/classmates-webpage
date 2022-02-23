import React from 'react'
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const ContactScreen = () => {

    const dispatch = useDispatch();

    const {msgError} = useSelector( state => state.ui );

    const [values, handleInputChange] = useForm({
        name: '',
        email: '',
        phone: '',
        text: '',
      })
    
      const {name, email, phone, text} = values;
    
      const handleRegister = (e) => {
        e.preventDefault();
    
        if(isFormValid()){
          //startRegisterWithEmailPasswordName(email, password, name)
        }
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
    <div className='contact__main'>
        <div className='contact__box-container'>
                    
            <h3 className="contact__title">Contactanos</h3>

            <form 
            onSubmit={handleRegister}
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
  )
}
