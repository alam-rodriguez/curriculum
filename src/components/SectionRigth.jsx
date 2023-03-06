import React from 'react';
import Proyecto1 from '../images/proyecto1.png';
import Proyecto2 from '../images/proyecto2.png';
import OtrosProyecto1 from '../images/otrosproyectos1.png';
import OtrosProyecto2 from '../images/otrosproyectos2.png';
import OtrosProyecto3 from '../images/otrosproyectos3.png';
import OtrosProyecto4 from '../images/otrosproyectos4.png';
import SectionRigthProyecto from './SubComponentes/SectionRigthProyecto';
import SectionRigthEducacion from './SubComponentes/SectionRigthEducacion';




const SectionRigth = () => {
  return (
    <div className='p-5'>

      <div>
        <h1 className='h3 fw-bold'>Perfil personal</h1>
        <p className='fw-lighter m-1 text-dark'>
          Hola, soy Alam Rodriguez, Front-End Reveloper. Me gusta programar y aprender nuevas tecnologías, llevo desde el 2021 aprendiendo a programar, aprendí HTML Y CSS en ese entonces, y luego aprendí JavaScript y React. Tengo un buen manejo de JavaScript y de React, soy capaz de crear o mantener un proyecto pequeño o mediano. Con mis conocimientos y su oportunidad podremos crear grandes cosas. 
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum */}
        </p>
      </div>

      <div>
        <h1 className='h3 fw-bold mt-5'>Proyectos y Experiencia</h1>

        <SectionRigthProyecto 
          nombre='Gallery App.' 
          info='Este programa llamado Gallery App es un progrma capaz de guardar imagenes, como su nombre lo indica es una galeria de imagenes, entre las tecnogias que utilice se encuentran React, Firebase y Bootstrap. podemos logearnos con nuestra cuenta y una vez logeados podemos guardar informacion, y utilizar nuestra cuenta en otro dispositivo. los errores y excepciones para darle una buena experiencia a los usuarios. Este proyecto me ayudo bastante a entender firebase, realmente construirlo fue un desafio intersante y maravilloso.'
          imagen={Proyecto2}
          url='https://alam-gallery-app.netlify.app/'
        />
        <SectionRigthProyecto 
          nombre='Programa de Facturacion y ventas.' 
          info='Este Programa de ventas y facturación fue mi primer proyecto nivel medio en cuanto a complejidad, este programa esta creado con HTML, CSS y JavaScript. Cabe destacar que este fue creado con puro JavaScript, es decir, sin ningún Framework ni librería, además el CSS Esta creado completamente desde 0. Este programa es capaz de registrar productos, clientes, y ventas con las informaciones de los productos que eligió el cliente.'
          imagen={Proyecto1}
          url='https://alam-rodriguez.github.io/programa-facturacion/'
        />

        <div>
          <h2 className='fw-bold fs-6 pt-5'>Otros proyectos:</h2>
          <div className='row'>
            <a className='col-12 col-sm-6 col-md-3' href="https://alam-rodriguez.github.io/alam-rodriguez-curriculum_Alam_Rodriguez.github.io/" target='_blank'>
              <img className='img-thumbnail w-100 h-auto' src={OtrosProyecto1} alt="" />
            </a>
            <a className='col-12 col-sm-6 col-md-3' href="https://alam-rodriguez.github.io/todo-js/" target='_blank'>
              <img className='img-thumbnail w-100 h-auto' src={OtrosProyecto2} alt="" />
            </a>
            <a className='col-12 col-sm-6 col-md-3' href="https://alam-contact-app.netlify.app/" target='_blank'>
              <img className='img-thumbnail w-100 h-auto' src={OtrosProyecto3} alt="" />
            </a>
            <a className='col-12 col-sm-6 col-md-3' href="https://calculadora-react-alam.netlify.app/" target='_blank'>
              <img className='img-thumbnail w-100 h-auto' src={OtrosProyecto4} alt="" />
            </a>
          </div>
        </div>

        <div>
          <h3 className='h3 fw-bold mt-5'>Educacion:</h3>
          <div className='row'>

            <SectionRigthEducacion 
              estudio='Tecnico informatico'
              institucionYLugar='Politecnico Eugenio De Jesus Marcano Foundeur | La reforma, Mata de palma'
              periodo='2017-2021'
              info='En este periodo de tiempo conocí en mundo de las computadoras, durante estos 3 años estudié informática y ofimática, Aprendí a usar Word, PowerPoint, OneNote y un poco de Excel. Además, estudia análisis de sistema. Pero de todo lo que más me gusta fue aprender HTML y CSS.'
            />
            <SectionRigthEducacion 
              estudio='Tecnico informatico'
              institucionYLugar='Youtube, platzi, Udemy | FreecodeCamp'
              periodo='2021-2023'
              info='Desde 2021 empecé a aprender totalmente por mi cuenta, en todo este proceso el deseo de programar a sido mi motor, he aprendido sobre HTML, CSS, JavaScript, Bootstrap y actualmente estoy aprendiendo Firebase y seguiré aprendiendo nuevas tecnologías.'
            />

          </div>
        </div>

      </div>
    </div>
  )
}

export default SectionRigth;
