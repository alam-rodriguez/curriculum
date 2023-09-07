import React from 'react'

const SectionRigthEducacion = ({estudio, institucionYLugar, periodo, info}) => {
  return (
    <div className='col-12 col-md-6'>
        <h3 className='fw-bold fs-6 pt-1'>{estudio}</h3>
        <p className='fw-lighter m-1 text-dark'>{institucionYLugar}</p>
        <p className='fw-lighter m-1 text-dark'>{periodo}</p>
        <p className='fw-lighter m-1 text-dark'>
            {info}
            {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quo aliquid tempore beatae corrupti blanditiis aliquam similique. Praesentium recusandae illum eaque veniam dolorem cum nobis vel, quaerat reiciendis nulla architecto. */}
        </p>
    </div>
  )
}

export default SectionRigthEducacion;
