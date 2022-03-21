import React from 'react';
import { useSelector } from 'react-redux';

export const FirstSlide = () => {

    const {ui} = useSelector(state => state);
    const {english} = ui;

  return (
    <div className='row animate__animated animate__fadeIn home__first-page'>
        <div className='col-12 col-md-6'>
            <div className='slide__pic1'>
            </div>
            <div className='slide__img1'>
            </div>
            <h5 className='mb-5 d-flex slide__slogan'>
                {
                    english
                    ? "¡SIEMPRE GUIÁNDOTE, SIEMPRE APOYÁNDOTE!"
                    : "ALWAYS GUIDING YOU, ALWAYS SUPPORTING YOU!"
                }
            </h5>
        </div>
                            
        {
            english
            ?   <div className='col-12 col-md-6 mt-5'>
                    <h1 className='mb-5 mt-5 d-flex justify-content-center home__slide-title'>
                        Clase demo de cortesía
                    </h1>
                    <p className='slide__paragraph'>
                    En CLASSMATES tienes la opción de solicitar una clase DEMO sin ningún costo para que conozcas el nivel en el que te 
                    encuentras, en el idioma que quieres aprender antes de comenzar tu curso. Recuerda que tienes la opción de distribuir 
                    tus clases en los horarios que mejor se acomoden a tus necesidades.
                    </p>
                </div>
            :   <div className='col-12 col-md-6 mt-5'>
                    <h1 className='mb-5 mt-5 d-flex justify-content-center home__slide-title'>
                        Enjoy a free trial class
                    </h1>
                    <p className='slide__paragraph'>
                        In CLASSMATES you have the option to request a demo class at no cost so that you can learn about our methodology
                        and know your Spanish level before starting your course. Remember, you have the option to distribute the class 
                        hours to your commodity
                    </p>
                </div>
        }
    </div>
  )
}
