import React from 'react';
import { Link } from 'react-router-dom';



export const HomeScreen = () => {


  return (
    <div>
        <div className='row'>
            <div className='col-6 mt-5 home__main-content'>
                <h1>
                    Aprende ingles facil!
                </h1>
                <ul>
                    <li><i className="fa-solid fa-bullhorn me-3"></i>1-on-1 lessons in more than 150 languages</li>
                    <li><i className="fa-solid fa-bullhorn me-3"></i>Practice for free with the className community</li>
                    <li><i className="fa-solid fa-bullhorn me-3"></i>Take learning beyond the className</li>
                </ul>
                <Link 
                to="contact"
            >
                <div className='home__button'>
                    <button
                        className='btn btn-primary'
                    >
                        Contactanos!
                    </button>
                </div>
            </Link>
            </div>

            <div className='col-6 mt-3 mb-2 home__picture'>
            </div>

        </div>

        <div className='row'>
           <h1 className='mb-5 mt-5 d-flex justify-content-center'>Docentes Expertos</h1>
           <h4 className='home__paragraph'>
                Contamos con docentes titulados, cuidadosamente seleccionados por sus
                excelentes habilidades pedagógicas y su gran trayectoria en enseñanza,
                quienes gracias a su compromiso y pasión por el mundo de la educación
                hacen de las tutorías online una excelente experiencia en todos los
                aspectos, cumpliendo siempre tus expectativas, resolviendo todas tus
                dudas y motivándote a mejorar.
            </h4>
        </div>

        <div className='row'>
           <div className='col-4 mt-5'>

            <i className="fa-solid fa-chalkboard-user fa-6x d-flex justify-content-center"></i>
            <p className='home__paragraph mt-5'> Realizamos un seguimiento pedagógico y periódico del avance en tu
                proceso de aprendizaje</p>
           </div>
           <div className='col-4 mt-5'>
            <i className="fa-solid fa-school fa-6x d-flex justify-content-center"></i>
            <p className='home__paragraph mt-5'> Realizamos un seguimiento pedagógico y periódico del avance en tu
                proceso de aprendizaje</p>
           </div>
           <div className='col-4 mt-5'>
           <i className="fa-solid fa-graduation-cap fa-6x d-flex justify-content-center"></i>
           <p className='home__paragraph mt-5'> Realizamos un seguimiento pedagógico y periódico del avance en tu
                proceso de aprendizaje</p>
           </div>
        </div>

        <div className='row'>
            
            <div className='col-6 mt-5 home__picture2 mt-5'>
            </div>

            <div className='col-6 mt-5 home__main-content mt-5'>
                <h1>
                    Aprende ingles facil!
                </h1>
                <ul>
                    <li><i className="fa-solid fa-bullseye me-3"></i>1-on-1 lessons in more than 150 languages</li>
                    <li><i className="fa-solid fa-bullseye me-3"></i>Practice for free with the className community</li>
                    <li><i className="fa-solid fa-bullseye me-3"></i>Take learning beyond the className</li>
                </ul>

                <Link 
                to="contact"
            >
                <div className='home__button'>
                    <button
                        className='btn btn-primary'
                    >
                        Contactanos!
                    </button>
                </div>
            </Link>

            </div>

        </div>

        <div className='row'>
            
            <h1 className='mb-5 mt-5 d-flex justify-content-center'>Testimonios</h1>

            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 home__profile1">
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 home__profile2">
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 home__profile3">
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
