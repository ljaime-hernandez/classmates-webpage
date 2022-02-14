import React from 'react';



export const HomeScreen = () => {

    const handleContact = () => {

    }

  return (
    <div>
        <div className='row mt-5'>
            <div className='col-6 home__main-content'>
                <h1>
                    Aprende ingles facil!
                </h1>
                <ul>
                    <li><i className="fa-solid fa-bullhorn me-3"></i>1-on-1 lessons in more than 150 languages</li>
                    <li><i className="fa-solid fa-bullhorn me-3"></i>Practice for free with the ClassMate community</li>
                    <li><i className="fa-solid fa-bullhorn me-3"></i>Take learning beyond the classroom</li>
                </ul>
                <button
                    className='btn btn-primary'
                    onClick={handleContact}
                >
                    Contactanos!
                </button>
            </div>

            <div className='col-6 home__picture'>
            </div>

        </div>

        <div className='row mt-5'>
           <h1 className='mb-5 d-flex justify-content-center'>Docentes Expertos</h1>
           <h4 className='home__paragraph'>
                Contamos con docentes titulados, cuidadosamente seleccionados por sus
                excelentes habilidades pedagógicas y su gran trayectoria en enseñanza,
                quienes gracias a su compromiso y pasión por el mundo de la educación
                hacen de las tutorías online una excelente experiencia en todos los
                aspectos, cumpliendo siempre tus expectativas, resolviendo todas tus
                dudas y motivándote a mejorar.
            </h4>
        </div>

        <div className='row mt-5'>
           <div className='col-4'>

            <i class="fa-solid fa-chalkboard-user fa-8x d-flex justify-content-center"></i>
            <p className='home__paragraph mt-5'> Realizamos un seguimiento pedagógico y periódico del avance en tu
                proceso de aprendizaje</p>
           </div>
           <div className='col-4'>
            <i class="fa-solid fa-school fa-8x d-flex justify-content-center"></i>
            <p className='home__paragraph mt-5'> Realizamos un seguimiento pedagógico y periódico del avance en tu
                proceso de aprendizaje</p>
           </div>
           <div className='col-4'>
           <i class="fa-solid fa-graduation-cap fa-8x d-flex justify-content-center"></i>
           <p className='home__paragraph mt-5'> Realizamos un seguimiento pedagógico y periódico del avance en tu
                proceso de aprendizaje</p>
           </div>
        </div>
    </div>
  )
}
