import React from 'react';
import './css/Header.css';
import alamFoto from '../images/alam foto.JPG';
import { BsTelephoneFill, BsFillFilePersonFill } from "react-icons/bs";
import { TbMail } from "react-icons/tb";
import HeaderLinks from './SubComponentes/HeaderLinks';

const Header = () => {
  return (
    <div className='d-flex flex-column flex-lg-row'>
        <img src={alamFoto} alt="Foto de Alam Rodriguez" className='m-auto rounded-circle img-thumbnail p-0' />
        <div className='m-auto text-center'>
            <h1 className='title w-100 fw-bold fs-1'>Alam Rodriguez</h1>
            <p className='fs-4 fw-lighter m-auto'>Front-End Developer</p>
        </div>
        <div className='m-auto d-flex flex-column'>
          <HeaderLinks
            Icon={BsTelephoneFill}
            text='Telefono'
            link='809-319-8834' 
          />
          <HeaderLinks
            Icon={TbMail}
            text='E-mail'
            link='alamrd2016@gmail.com' 
          />
          <HeaderLinks
            Icon={BsFillFilePersonFill}
            text='Github'
            link='Alam Rodriguez' 
          />
        </div>

    </div>
  )
}

export default Header;
