import React from 'react';
import { useSelector } from 'react-redux';

export const AboutScreen = () => {

  const {ui} = useSelector(state => state);
  const {english} = ui;

  return (
    <div>
      <h1 className='mb-5 mt-5 d-flex justify-content-center'>
        {
            english
            ?   "¿En qué creemos?"
            :   "¿What do we believe in?"
        }  
      </h1>

      {
        english
          ?   <p className='about__paragraph'>
                En CLASSMATES creemos en el poder de la educación porque sabemos
                que el aprendizaje es una construcción y un proceso de apoyo mutuo en
                donde el estudiante y el docente son un equipo de trabajo.
                En CLASSMATES, buscamos convertirnos en un aliado y una guía para
                nuestros estudiantes, con el fin de que siempre se sientan cómodos y
                motivados en sus tutorías. Sabemos que podemos proveer una educación de
                alta calidad gracias a nuestra pasión por la educación. Así mismo, queremos
                contribuir con el desarrollo de los procesos de aprendizaje en diferentes
                áreas, de acuerdo a las necesidades académicas y/o intereses particulares de
                estudiantes de cualquier edad, brindando un excelente servicio personalizado
                y acompañamiento por parte de nuestros docentes y nuestra compañía, con
                el objetivo de incentivar y apoyar a los estudiantes a que alcancen sus metas
                y sueños.
              </p>
          :   <p className='about__paragraph'>
                In CLASSMATES we believe in the power of education because we know that learning 
                is a construction and a process of mutual support where the student and the teacher 
                are a team. In CLASSMATES, we seek to become an ally and a guide for our students, 
                so that they always feel comfortable and motivated in their tutorials. We know that 
                we can provide a high-quality education because of our passion for education. Likewise, 
                we want to contribute to the development of learning processes of a second language, 
                taking into account the academic needs and/or particular interests of students of any 
                age, providing excellent personalized service and support from our teachers and our 
                company with the aim of encouraging and supporting students to achieve their goals and 
                dreams.
              </p>
      }  

      <h1 className='mb-5 mt-5 d-flex justify-content-center'>
        {
            english
            ?   "¿Quienes somos?"
            :   "About us"
        }
      </h1>

      {
          english
          ?   <p className='about__paragraph'>
                CLASSMATES se consolida a partir de la iniciativa de un grupo de
                docentes, quienes, al evidenciar la necesidad de muchas personas de
                encontrar un programa de asesorías confiable y que se adecúe a sus
                expectativas en distintas áreas del conocimiento, decide implementar un
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
                of the conception of its founders on education and the teaching role, which 
                understands that knowledge is a construction and the result of teamwork where 
                the tutor is a partner, guide, example and engine in the exciting world of 
                knowledge.
              </p>
      }
        <h1 className='mb-5 mt-5 d-flex justify-content-center'>
          {
              english
              ?   "¿Por que CLASSMATES?"
              :   "¿Why CLASSMATES?"
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
              ?   "Flexibilidad:"
              :   "Flexibility:"
          }
        </h4>

        {
            english
            ?   <ul className='contact__list about__paragraph'>
                  <li><i className="fa-solid fa-bullseye me-3"></i>
                    Teniendo en cuenta tu disponibilidad, puedes escoger los días y horarios
                    en los cuales quieras tomar las tutorías. Así mismo, tú asignas la
                    intensidad horaria dependiendo de tus objetivos, siempre teniendo en
                    cuenta que hay un acompañamiento constante por parte de tus docentes
                    quienes te irán guiando en cada paso de tu proceso.
                  </li>
                  <li><i className="fa-solid fa-bullseye me-3"></i>
                    Cuentas con la posibilidad de cambiar o sustituir a tu docente en caso de
                    que así lo requieras para que, de este modo, te sientas completamente
                    cómodo y satisfecho con tus tutorías.
                  </li>
                  <li><i className="fa-solid fa-bullseye me-3"></i>
                    Puedes cancelar o cambiar los horarios de tus tutorías en caso de que así
                    lo requieras sin costos adicionales.
                  </li>
                  <li><i className="fa-solid fa-bullseye me-3"></i>
                    Si quieres aprender con amigos o familiares tienes la posibilidad de crear
                    un grupo de estudio con el cual te sientas cómodo. De este modo, puedes
                    obtener beneficios en tus tutorías.
                  </li>
                </ul>
            :   <ul className='contact__list about__paragraph'>
                  <li><i className="fa-solid fa-bullseye me-3"></i>
                    Taking into account your availability, you can choose the days and 
                    times in which you want to take the tutorials. Likewise, you assign 
                    the hourly intensity depending on your objectives, always bearing 
                    in mind that there is a constant support from your teachers who will 
                    guide you in each step of your process.
                  </li>
                  <li><i className="fa-solid fa-bullseye me-3"></i>
                    You have the possibility of changing or substituting your teacher if 
                    you require it, so that, in this way, you feel completely comfortable 
                    and satisfied with your tutorials.
                  </li>
                  <li><i className="fa-solid fa-bullseye me-3"></i>
                    You can cancel or change the schedules of your tutorials if you require 
                    it without additional costs.
                  </li>
                  <li><i className="fa-solid fa-bullseye me-3"></i>
                    If you want to learn with friends or family, you have the possibility to 
                    create a study group which you feel comfortable with.
                  </li>
                </ul>
        }

    </div>
  )
}
