import React from 'react'

const SectionRigthProyecto = ({nombre, info, link, imagen, width}) => {
  return (
    <div>
          <h3 className='fw-bold fs-6 pt-1'>{nombre}</h3>
          <div className='d-flex flex-column-reverse flex-sm-row'>
            <p className='fw-lighter m-1 text-dark col-ms-6 col-md-9'>
                {info}
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum */}
            </p>
            <a className='col-sm-6 col-md-3' href={link} target='_blank'>
              <img className={`rounded shadow-lg img-fluid ${width} h-auto m-auto`} src={imagen} alt="Proyecto de facturacion y ventas creado por Alam Rodriguez" />
            </a>
          </div>
        </div>
  )
}

export default SectionRigthProyecto;
