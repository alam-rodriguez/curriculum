import React from 'react';

const SectionLeftRedSocial = ({Icon, red, link}) => {
  return (
    <div className='my-3'>
        <a className='d-flex text-black text-decoration-none' href="https://github.com/alam-rodriguez" target='_blank'>
            <div className='bg-warning h-25 rounded-circle p-2'>
                <Icon className='text-warning m-1 fs-3 text-dark' />
            </div>
            <div className='mx-3'>
                <p className='m-0 fw-bold'>{red}</p>
                <p className='fw-lighter text-decoration-underline'>{link}</p>
            </div>
        </a>
    </div>
  )
}

export default SectionLeftRedSocial;
