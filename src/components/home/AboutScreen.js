import React from 'react';
import { useSelector } from 'react-redux';

export const AboutScreen = () => {

  const {ui} = useSelector(state => state);
  const {english} = ui;

  return (
    <div className='animate__animated animate__fadeIn'>

      <div className='container home__container'>
        <div className='row'>
          <div className='col-12 col-md-6 home__main-content'>
            <h1 className='mb-5 mt-5 d-flex justify-content-center'>
              {
                  english
                  ?   "¿En qué creemos?"
                  :   "What do we believe in?"
              }  
            </h1>
            {
              english
                ? <p className='about__paragraph'>
                    En CLASSMATES creemos en el poder de la educación porque sabemos
                    que el aprendizaje es una construcción y un proceso de apoyo mutuo en
                    donde el estudiante y el docente son un equipo de trabajo.
                    En CLASSMATES, buscamos convertirnos en un aliado y una guía para
                    nuestros estudiantes, con el fin de que siempre se sientan cómodos y
                    motivados en sus tutorías. Sabemos que podemos proveer una educación de
                    alta calidad gracias a nuestra pasión por la educación y los idiomas . Así mismo, queremos 
                    contribuir con el desarrollo de los procesos de aprendizaje de una segunda 
                    lengua, teniendo en cuenta las necesidades académicas y/o intereses particulares de
                    estudiantes de cualquier edad, brindando un excelente servicio personalizado
                    y acompañamiento por parte de nuestros docentes y nuestra compañía, con
                    el objetivo de incentivar y apoyar a los estudiantes a que alcancen sus metas
                    y sueños.
                  </p>
                : <p className='about__paragraph'>
                    In CLASSMATES we believe in the power of education because we know that learning 
                    is a construction and a process of mutual support where the student and the teacher 
                    are a team. In CLASSMATES, we seek to become an ally and a guide for our students, 
                    so that they always feel comfortable and motivated in their tutorials. We know that 
                    we can provide a high-quality education because of our passion for education and languages. 
                    Likewise, we want to contribute to the development of learning processes of a second language, 
                    taking into account the academic needs and/or particular interests of students of any 
                    age, providing excellent personalized service and support from our teachers and our 
                    company with the aim of encouraging and supporting students to achieve their goals and 
                    dreams.
                  </p>
            }  
              
          </div>

          <div className='col-12 col-md-6 mt-3 mb-2 about__pic1'>
          </div>

        </div>
      </div>

      <div className='container home__container'>
        <div className='row'>
            
          <div className='col-12 col-md-6 mt-5 about__pic2 mt-5'>
          </div>

          <div className='col-12 col-md-6 mt-5 home__main-content'>
            <h1 className='mb-5 mt-5 d-flex justify-content-center'>
              {
                  english
                  ?   "¿Quiénes somos?"
                  :   "About us"
              }
            </h1>

            {
                english
                ?   <p className='about__paragraph'>
                      CLASSMATES se consolida a partir de la iniciativa de un grupo de
                      docentes, quienes, al evidenciar la necesidad de muchas personas de
                      encontrar un programa de asesorías confiable y que se adecúe a sus expectativas 
                      al adquirir una segunda lengua, decide implementar un
                      proyecto que brinde apoyo en los procesos de aprendizaje de alta calidad a
                      nivel personalizado, ya sea para actividades escolares en todos los niveles
                      educativos o que respondan a intereses o gustos personales. CLASSMATES
                      es el reflejo de la concepción de sus fundadores sobre la educación y el rol
                      docente, el cual comprende que el conocimiento es una construcción y el
                      resultado de un trabajo en equipo donde el tutor es un compañero, guía,
                      ejemplo y motor en el apasionante mundo del conocimiento
                    </p>
                :   <p className='about__paragraph'>
                      CLASSMATES is consolidated from the initiative of a group of teachers, who, 
                      upon evidencing the need of many people to find a reliable counseling program 
                      that meets their expectations when learning a second language, decides to 
                      implement a project that provides support in high-quality learning processes 
                      at a personalized level, whether for school activities at all educational 
                      levels or that respond to personal interests and tastes. CLASSMATES is a reflection 
                      of the conception of its founders on education and the teaching role, who 
                      understand that knowledge is a construction and the result of teamwork where 
                      the tutor is a partner, guide, example and engine in the exciting world of 
                      knowledge.
                    </p>
            }

          </div>
        </div>
      </div>

      <div className='container home__container'>
        <div className='row'>
          <div className='col-12 col-md-6 home__main-content'>
            <h1 className='mb-5 mt-5 d-flex justify-content-center'>
              {
                  english
                  ?   "¿Por qué CLASSMATES?"
                  :   "Why CLASSMATES?"
              }
            </h1>

            <h4 className='mb-5 mt-5 d-flex justify-content-center'>
              {
                  english
                  ?   "Comodidad:"
                  :   "Convenience:"
              }
            </h4>

            {
                english
                ?   <p className='about__paragraph'>
                      Nuestras tutorías son virtuales, por lo tanto, puedes estudiar
                      en la comodidad de tu casa o en tu oficina sin perder tiempo
                      desplazándote ni preocupándote por llegar tarde a tus clases.
                      De este modo tendrás mucho más tiempo para concentrarte
                      en tus sueños.
                    </p>
                :   <p className='about__paragraph'>
                      Our tutorials are virtual; therefore, you can study in the comfort 
                      of your home or in your office without wasting time traveling or 
                      worrying about being late for your classes. This way you will 
                      have much more time to focus on your dreams.
                    </p>
            }
    
            <h4 className='mb-5 mt-5 d-flex justify-content-center'>
              {
                  english
                  ?   "CLASSMATES Niños/adolescentes"
                  :   "CLASSMATES KIDS/TEENS"
              }
            </h4>

            {
                english
                ?   <p className='about__paragraph'>
                      En nuestros cursos especializados para niños y adolescentes encontrarás 
                      actividades lúdicas que desarrollarán todas sus habilidades para que de 
                      esta forma su aprendizaje sea más rápido, efectivo y divertido. Gracias a 
                      nuestra metodología nuestros estudiantes aman sus clases.
                    </p>
                :   <p className='about__paragraph'>
                      In our specialized courses for children and teenagers, you will find dynamic 
                      activities that will develop all their skills so that their learning 
                      process is faster, effective and fun.
                      Thanks to our methodology our students love their classes.
                    </p>
            }  
              
          </div>

          <div className='col-12 col-md-6 mt-3 mb-2 about__pic3'>
          </div>

        </div>
      </div>
      
      <div className='container home__container'>
        <div className='row'>
            
          <div className='col-12 col-md-6 mt-5 about__pic4 mt-5'>
          </div>

          <div className='col-12 col-md-6 mt-5 home__main-content'>
            
            <h1 className='mb-5 mt-5 d-flex justify-content-center'>
              {
                  english
                  ?   "Docentes"
                  :   "Teachers"
              }
            </h1>

            {
                english
                ?   <h5 className='about__paragraph'>   
                      Contamos con docentes titulados, cuidadosamente seleccionados por sus excelentes habilidades 
                      pedagógicas y su gran trayectoria en enseñanza, quienes gracias a su compromiso y pasión por 
                      el mundo de la educación hacen de las tutorías online una excelente experiencia 
                      en todos los aspectos, cumpliendo siempre tus expectativas, resolviendo todas tus dudas y 
                      motivándote a mejorar.
                      Tienes a tu disposición clases para todos los niveles: Infantil, Primaria, Bachillerato, 
                      Universidad y adultos.
                    </h5>
                :   <h5 className='about__paragraph'>
                      We have qualified teachers, carefully selected because of their excellent pedagogical skills and 
                      their great teaching experience, who, thanks to their commitment and passion for the world of 
                      education and languages, make online tutoring an excellent experience in all aspects, always 
                      meeting your expectations, solving all your doubts and motivating you to improve.
                      You have at your disposal classes for all levels: Infant, Primary, Baccalaureate, University and adults.
                    </h5>
            }

          </div>
        </div>
      </div>

    </div>
  )
}
