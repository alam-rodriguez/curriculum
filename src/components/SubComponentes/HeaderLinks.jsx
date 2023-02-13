import React from 'react';


const HeaderLinks = ({Icon, text, link,}) => {
  return (
    <div className='m-3 w-100'>
        <a className='d-flex text-black text-decoration-none' href="https://api.whatsapp.com/send/?phone=18293198834&text&app_absent=0" target='_blank'>
            <div className='bg-black w-20 h-25 rounded-circle p-2 mt-1'>
                <Icon className='text-warning m-1' />
            </div>
            <div className='mx-3'>
                <p className='fw-semibold mb-0'>{text}</p>  
                <p className='fw-light m-0 text-decoration-underline'>{link}</p>
            </div>
      </a>
    </div>
  )
}

export default HeaderLinks;
