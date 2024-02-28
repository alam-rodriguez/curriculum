import React from "react";

import { BsGithub, BsLinkedin, BsWhatsapp, BsFacebook } from "react-icons/bs";

import SectionLeftHabilidades from "./SubComponentes/SectionLeftHabilidades";
import SectionLeftLenguajes from "./SubComponentes/SectionLeftLenguajes";
import SectionLetfCualidad from "./SubComponentes/SectionLetfCualidad";
import SectionLeftRedSocial from "./SubComponentes/SectionLeftRedSocial";

const SectionLetf = () => {
  return (
    <div className="row text-center text-lg-start align-content-center ps-lg-5 flex-column flex-md-row">
      <header className="col-6 col-md-6 mt-5 col-lg-12">
        <h1 className="h3 fw-bold">Habilidades</h1>
        <SectionLeftHabilidades name="HTML" />
        <SectionLeftHabilidades name="CSS" />
        <SectionLeftHabilidades name="Bootstrap" />
        <SectionLeftHabilidades name="JavaScript" />
        <SectionLeftHabilidades name="React" />
        <SectionLeftHabilidades name="Firebase" />
        <SectionLeftHabilidades name="Flutter" />
      </header>

      <div className="col-6 col-md-6 mt-5 pe-md-5 me-md-0 col-lg-12">
        <h2 className="h3 fw-bold">Lenguajes</h2>
        <div>
          <SectionLeftLenguajes idioma="Español" porcentaje={85} />
          <SectionLeftLenguajes idioma="English" porcentaje={55} />
        </div>
      </div>

      <div className="col-6 col-md-6 mt-5 col-lg-12">
        <h1 className="h3 fw-bold">Cualidades</h1>
        <SectionLetfCualidad cualidad="Respetuoso" />
        <SectionLetfCualidad cualidad="Responsable" />
        <SectionLetfCualidad cualidad="Dedicado" />
        <SectionLetfCualidad cualidad="calmado" />
        <SectionLetfCualidad cualidad="Comprensivo" />
        <SectionLetfCualidad cualidad="persistente" />
      </div>

      <div className="col-6 col-md-6 mt-5 col-lg-12">
        <h1 className="h3 fw-bold">Redes Sociales</h1>
        <SectionLeftRedSocial Icon={BsGithub} red="Github" link="https://github.com/alam-rodriguez" />
        <SectionLeftRedSocial Icon={BsLinkedin} red="Linkedin" link="https://www.linkedin.com/in/alam-rodr%C3%ADguez-rosario-b72241235/" />
        <SectionLeftRedSocial Icon={BsWhatsapp} red="WhatsApp" link="https://api.whatsapp.com/send/?phone=18293198834&text&app_absent=0" />
        <SectionLeftRedSocial Icon={BsFacebook} red="Facebook" link="https://www.facebook.com/alam.rodriguez.359" />
      </div>
    </div>
  );
};

export default SectionLetf;
