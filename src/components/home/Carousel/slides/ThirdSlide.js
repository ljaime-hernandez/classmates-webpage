import React from 'react'
import { useSelector } from 'react-redux';

export const ThirdSlide = () => {

    const {ui} = useSelector(state => state);
    const {english} = ui;

  return (
    <div className='row animate__animated animate__fadeIn home__first-page'>
        <div className='col-6 slide__pic3'>
        </div>
                            
        {
            english
            ?   <div className='col-6 mt-5'>
                    <h1 className='mb-5 mt-5 d-flex justify-content-center'>
                        Clase demo de cortesía!!
                    </h1>
                    <p className='contact__paragraph'>
                        En classmates tienes la opción de solicitar una clase demo sin ningún costo para que conozcas en el nivel en el 
                        que te encuentras, en el idioma que quieres aprender antes de comenzar tu curso. Recuerda que tienes la opción 
                        de distribuir las horas en los horarios que mejor se acomoden a tus necesidades.
                    </p>
                </div>
            :   <div className='col-6 mt-5'>
                    <h1 className='mb-5 mt-5 d-flex justify-content-center'>
                        Demonstration Without Commitment!!
                    </h1>
                    <p className='contact__paragraph'>
                        In classmates you have the option to request a demo class at no cost so that you can learn about our methodology
                        and know your English level before starting your course. Remember, you have the option to distribute the class 
                        hours to your commodity
                    </p>
                </div>
        }
    </div>
  )
}
