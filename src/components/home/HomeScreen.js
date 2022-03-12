import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CarouselComponent } from './Carousel/CarouselComponent';

export const HomeScreen = () => {

    const {ui} = useSelector(state => state);
    const {english} = ui;

  return (
    <div>
        <CarouselComponent/>

        <div className='row'>
            <div className='col-6 mt-5 home__main-content'>
                <h1>
                    {
                        english
                        ?   "Aprende lenguajes facil!"
                        :   "Learn  languages easily!"
                    }
                </h1>
                {
                    english
                    ?   <ul className='home__unordered-list'>
                            <li><i className="fa-solid fa-bullhorn me-3"></i>
                                CLASSMATES evalúa tus aptitudes con el objetivo de asignarte el
                                profesional más adecuado según tus necesidades y conocimientos
                                previos.
                            </li>
                            <li><i className="fa-solid fa-bullhorn me-3"></i>
                                Realizamos un seguimiento pedagógico y periódico del avance en tu
                                proceso de aprendizaje.
                            </li>
                            <li><i className="fa-solid fa-bullhorn me-3"></i>
                                Nuestras clases personalizadas significan más aprendizaje y menos
                                distracción lo cual es ¡maravilloso!
                            </li>
                        </ul>
                    :   <ul className='home__unordered-list'>
                            <li><i className="fa-solid fa-bullhorn me-3"></i>
                                CLASSMATES evaluates your skills with the aim of assigning you the 
                                most suitable professional according to your needs, previous knowledge 
                                and level.
                            </li>
                            <li><i className="fa-solid fa-bullhorn me-3"></i>
                                We carry out a pedagogical and periodic monitoring of the progress in 
                                your learning process.
                            </li>
                            <li><i className="fa-solid fa-bullhorn me-3"></i>
                                Our personalized classes mean more learning and less distraction which 
                                is wonderful!
                            </li>
                        </ul>
                }
                
                <Link 
                    to="contact"
                >
                    <div className='home__button'>
                        <button
                            className='btn btn-info'
                        >
                            {
                                english
                                ?   "Contactanos!"
                                :   "Contact us!"
                            }
                        </button>
                    </div>
                </Link>
            </div>

            <div className='col-6 mt-3 mb-2 home__picture'>
            </div>

        </div>

        <div className='row'>

            <h1 className='mb-5 mt-5 d-flex justify-content-center'>
                {
                    english
                    ?   "Docentes Expertos"
                    :   "Expert Teachers"
                }
            </h1>

            {
                english
                ?   <h5 className='home__paragraph'>
                        Contamos con docentes titulados, cuidadosamente seleccionados por sus
                        excelentes habilidades pedagógicas y su gran trayectoria en enseñanza,
                        quienes gracias a su compromiso y pasión por el mundo de la educación
                        hacen de las tutorías online una excelente experiencia en todos los
                        aspectos, cumpliendo siempre tus expectativas, resolviendo todas tus
                        dudas y motivándote a mejorar.
                        Tienes a tu disposición clases para todos los niveles: Infantil, Primaria,
                        Bachillerato, Universidad y adultos.    
                        Nuestros docentes se encargan de que tus tutorías sean una experiencia
                        enriquecedora y lo mejor es que todas tus clases serán muy dinámicas.
                        Nuestros profesionales cuentan con una gran variedad de materiales y
                        actividades didácticas para que así puedas disfrutar de tu proceso de
                        aprendizaje y puedas afianzar aún más tus conocimientos.    
                    </h5>
                :   <h5 className='home__paragraph'>
                        We have qualified teachers, carefully selected because of their excellent 
                        pedagogical skills and their great teaching experience, who, thanks to 
                        their commitment and passion for the world of education and languages, 
                        make online tutoring an excellent experience in all aspects, always 
                        meeting your expectations, solving all your doubts and motivating you 
                        to improve.
                        You have at your disposal classes for all levels: Infant, Primary, 
                        Baccalaureate, University and adults.
                        Our teachers ensure that your tutorials are an enriching experience and the 
                        best thing is that all your classes will be very dynamic. Our professionals 
                        have a wide variety of teaching materials and activities so that you can 
                        enjoy your learning process and further strengthen your knowledge.
                    </h5>
            }
        </div>

        <div className='row'>
            <div className='col-4 mt-5'>

            <i className="fa-solid fa-chalkboard-user fa-6x d-flex justify-content-center"></i>
            {
                english
                ?   <p className='home__paragraph mt-5'> 
                        Hacemos traducciones de documentos oficiales y no oficiales tales como;
                        Tesis, textos escolares y/o universitarios, libros, diplomas, actas de
                        grado, etc.
                    </p>
                :   <p className='home__paragraph mt-5'> 
                        Translations of official and unofficial documents such as; Theses, school 
                        and/or university texts, books, diplomas, degree certificates, etc.
                    </p>
            }
            </div>
           <div className='col-4 mt-5'>
            <i className="fa-solid fa-school fa-6x d-flex justify-content-center"></i>
            {
                english
                ?   <p className='home__paragraph mt-5'> 
                        te preparamos para la presentación de exámenes internacionales tales
                        como: IELTS, TOEFL, CAMBRIDGE, MET.
                    </p>
                :   <p className='home__paragraph mt-5'> 
                        Preparation for international exams such as: IELTS, TOEFL, CAMBRIDGE, MET.
                    </p>
            }
           </div>
           <div className='col-4 mt-5'>
           <i className="fa-solid fa-graduation-cap fa-6x d-flex justify-content-center"></i>
            {
                english
                ?   <p className='home__paragraph mt-5'> 
                        Participación en clubs de conversación para que practiques lo
                        aprendido con tus tutores, interactúes con otros estudiantes y pierdas
                        del miedo a hablar en otro idioma.
                    </p>
                :   <p className='home__paragraph mt-5'> 
                        Participation in conversation clubs so that you can practice what you have 
                        learned with your tutors, interact with other students and lose the fear 
                        of speaking in another language.
                    </p>
            }
           </div>
        </div>

        <div className='row'>
            
            <div className='col-6 mt-5 home__picture2 mt-5'>
            </div>

            <div className='col-6 mt-5 home__main-content'>
                <h1 className='d-flex justify-content-center'>
                    {
                        english
                        ?   "Economía"
                        :   "Economic"
                    }      
                </h1>
                {
                    english
                    ?   <h5 className='home__paragraph'>
                            Con CLASSMATES además de encontrar clases divertidas y de calidad,
                            encuentras asesorías económicas. Además, puedes ahorrar costos
                            adicionales de transporte, matrículas y materiales, ya que con nosotros
                            solamente debes pagar por tus tutorías y estar listo para aventurarte en
                            este maravilloso mundo del aprendizaje acompañado de la excelente
                            orientación que te brinda CLASSMATES
                        </h5>
                    :   <h5 className='home__paragraph'>
                            With CLASSMATES in addition to finding fun and quality classes, you 
                            find economic advice. In addition, you can save additional transportation 
                            costs, tuition and materials, since with us you only have to pay for your 
                            tutorials and be ready to venture into this wonderful world of learning 
                            accompanied by the excellent guidance that CLASSMATES provides you.
                        </h5>
                }
                <Link 
                to="contact"
            >
                <div className='home__button'>
                <button
                        className='btn btn-info'
                    >
                        {
                            english
                            ?   "Contactanos!"
                            :   "Contact us!"
                        }
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
