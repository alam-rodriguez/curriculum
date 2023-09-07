import React from "react";

const SectionLeftLenguajes = ({idioma,porcentaje }) => {
  return (
    <div className="d-flex">
      <p className="fw-lighter m-1 text-dark w-25">{idioma}</p>
      <div className="progress w-50 mx-4 mt-2 bg-dark">
        <div
          className="progress-bar n1 bg-warning"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="10"
          style={{width:`${porcentaje}%`}}
        ></div>
      </div>
    </div>
  );
};

export default SectionLeftLenguajes;
