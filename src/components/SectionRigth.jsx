import React from 'react';
import Proyecto1 from '../images/proyecto1.png';
import Proyecto2 from '../images/proyecto2.png';
import OtrosProyecto1 from '../images/otrosproyectos1.png';
import OtrosProyecto2 from '../images/otrosproyectos2.png';
import OtrosProyecto3 from '../images/otrosproyectos3.png';
import OtrosProyecto4 from '../images/otrosproyectos4.png';
import ComiApp from '../images/comiapp.png';
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
          nombre='ComiApp' 
          info='ComiApp es una web para que los clientes de un restaurante ordenen, utilice react, vite y firebase, ademas utilize boostrap, firebase messaging, nodemailer y node js, useContext, react router, react icons, y otros packetes de react. ComiApp es una aplicacion web compleja que fue diseña para dar una buena experiencia a los usuarios y que estos tengan el deseo de usar la app para ordenar, ademas ComiApp cuenta con un complejo sistema de puntos, los clientes resciben x cada de puntos al hacer compras, los cuales se acumulan y despues, pueden usar estos puntos para obtener comidas totalmente gratis, estoy puede incrementar el interes de los usuarios a usar la app.'
          link='https://alam-rodriguez.github.io/programa-facturacion/'
          imagen={ComiApp}
          width='w-50'
        />

        <SectionRigthProyecto 
          nombre='Fact-Two' 
          info='Fact-Two es una programa para administrar productos, clientes y ventas de un negocio, este programa te permite almacenar tus clientes, tus categorias y tus productos y hasta permite crear facturas. En este programa utilice React, Firebase y Bootstrap. de Firebase utiliza el servicio de Authentificacion, el storage y la Firebase. De React utilize los hooks de useState, useEffect y useContext, ademas utilize React-Router para el sistema de rutas de la web'
          link='https://alam-rodriguez.github.io/programa-facturacion/'
          imagen={Proyecto1}
          width='w-100'
        />
        {/* <SectionRigthProyecto 
          nombre='Calculadora.' 
          info='Esta calculadora esta creada con React y con la librería de math.js, esta calculadora fue uno de mis primeros proyectos realizados con Raact, gracias a este proyecto de calculadora pude comprender casi en su totalidad conceptos de React como el useState, Componente, Props, map, funciones en React, entre otros.'
          link='https://alam-rodriguez.github.io/programa-facturacion/'
          imagen={Proyecto2}
        /> */}

        <div>
          <h2 className='fw-bold fs-6 pt-5'>Otros proyectos:</h2>
          <div className='row'>
            <a className='col-12 col-sm-6 col-md-3' href="" target='_blank'>
              <img className='img-thumbnail w-100 h-auto' src={Proyecto2} alt="" />
            </a>
            <a className='col-12 col-sm-6 col-md-3' href="https://alam-rodriguez.github.io/alam-rodriguez-curriculum_Alam_Rodriguez.github.io/" target='_blank'>
              <img className='img-thumbnail w-100 h-auto' src={OtrosProyecto1} alt="" />
            </a>
            <a className='col-12 col-sm-6 col-md-3' href="https://alam-rodriguez.github.io/todo-js/" target='_blank'>
              <img className='img-thumbnail w-100 h-auto' src={OtrosProyecto2} alt="" />
            </a>
            <a className='col-12 col-sm-6 col-md-3' href="https://alam-rodriguez.github.io/pizza-mia-guerra/" target='_blank'>
              <img className='img-thumbnail w-100 h-auto' src={OtrosProyecto3} alt="" />
            </a>
            {/* <a className='col-12 col-sm-6 col-md-3' href="https://counter-app-10adb.web.app/" target='_blank'>
              <img className='img-thumbnail w-100 h-auto' src={OtrosProyecto4} alt="" />
            </a> */}
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
