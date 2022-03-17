import React from 'react'
import { useSelector } from 'react-redux';

export const SecondSlide = () => {

    const {ui} = useSelector(state => state);
    const {english} = ui;
    
  return (
    <div className='row animate__animated animate__fadeIn home__first-page'>
        <div className='col-12 col-md-6 slide__pic2'>
        </div>
                            
        {
            english
            ?   <div className='col-12 col-md-6 mt-5'>
                    <h1 className='mb-5 mt-5 d-flex justify-content-center home__slide-title'>
                        En CLASSMATES también te ayudamos con:
                    </h1>
                    <ul className='contact__list slide__paragraph'>
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
                </div>
            :   <div className='col-12 col-md-6 mt-5'>
                    <h1 className='mb-5 mt-5 d-flex justify-content-center home__slide-title'>
                        In CLASSMATES we also help you with:
                    </h1>
                    <ul className='contact__list slide__paragraph'>
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
                </div>
        }
    </div>
  )
}