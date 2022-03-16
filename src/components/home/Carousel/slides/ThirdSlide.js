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
                    <h1 className='mb-5 mt-5 d-flex justify-content-center home__slide-title'>
                        Aprender idiomas con Classmates es tu mejor decisión!
                    </h1>
                    <p className='slide__paragraph'>
                        Estudiar en CLASSMATES, es elegir la mejor opción para aprender inglés, francés o español. Avanzamos a tu ritmo de 
                        aprendizaje y creamos contenido especial para ti dependiendo de tus objetivos.
                    </p>
                </div>
            :   <div className='col-6 mt-5'>
                    <h1 className='mb-5 mt-5 d-flex justify-content-center home__slide-title'>
                        Learning languages with CLASSMATES is your best decision!
                    </h1>
                    <p className='slide__paragraph'>
                        Studying at CLASSMATES is choosing the best option to learn English, French or Spanish. We advance at your learning pace 
                        and create special content for you depending on your goals.
                    </p>
                </div>
        }
    </div>
  )
}
