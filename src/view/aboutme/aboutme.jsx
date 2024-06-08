import "./aboutme.css";
import "animate.css";
import { GoDotFill } from "react-icons/go";
import { IoLogoGithub } from "react-icons/io";

const Aboutme = () => {
//   const handleDownload = () => {
//     const link = document.createElement('a');
//   link.href =  '../../../public/files/curriculum-IngridMorales-2024.pdf';
//     link.download = 'curriculum-ingridmorales-2024.pdf'; // Nombre del archivo que se descargará
//     link.click();
//   };


  return (
    <section className="aboutme">
      <div className="section__1">
        <div className="section__1__text animate__animated animate__zoomIn">
          <div className="dots">
            <GoDotFill />
            <GoDotFill />
            <GoDotFill />
          </div>
          <div>
            <h1 className="aboutme__title">
              <strong>TE PUEDO </strong>CONTAR QUE
            </h1>
            <hr className="line-aboutme" />
          </div>

          <p className="content_text">
            Mi nombre es Ingrid Morales Muñoz y vivo en Santiago de Chile. Soy
            una apasionada Frontend Developer especializada en React y también
            una creativa Diseñadora UX/UI. He trabajado en el desarrollo de
            proyectos para varias empresas como freelance, lo que me ha
            permitido adquirir una amplia experiencia y adaptabilidad en
            diversos entornos de trabajo. En mis dos últimos proyectos, formé
            parte de un equipo utilizando la metodología Scrum como Frontend
            Developer, lo que me permitió mejorar mis habilidades en la
            colaboración y la entrega de proyectos de manera ágil y eficiente.
          </p>
        </div>

        <div className="section__section2 ">
          <div className="partgrey">
            <div className="photo">
              <img
                className="photo_aboutme"
                src="https://firebasestorage.googleapis.com/v0/b/portafolio-7e72a.appspot.com/o/WhatsApp%20Image%202024-06-03%20at%2017.51.44.jpeg?alt=media&token=0f985bce-6510-4dba-a4cb-a7e4c84965e4"
                alt="foto de mi rosto"
              />
            </div>
          </div>
          <div className="partwhite"></div>
        </div>
      </div>
      <div></div>
      <div className="section_2">
        <div className="section_back">
          {" "}
          <img
            className="section_back_image"
            src="https://firebasestorage.googleapis.com/v0/b/portafolio-7e72a.appspot.com/o/Ellipse%205.png?alt=media&token=8847413f-2ad0-434a-9222-5d967b106fdf"
            alt="background"
          />
        </div>
        <div>
          <div className="section_2_content">
            <div>
              <img
                className="section_2_image"
                src="https://firebasestorage.googleapis.com/v0/b/portafolio-7e72a.appspot.com/o/Group%20178.png?alt=media&token=fc002936-4724-432f-aa85-e23c31c46ba6"
                alt="mis skills"
              />
            </div>

            <div className="section_2_text">
              <h2 className="section_2_subtitle">Mis skills</h2>
              <p className="content_text">
                Mis principales habilidades técnicas incluyen React, JavaScript
                y CSS, además del diseño de interfaces. Estas competencias me
                permiten crear aplicaciones web que no solo son funcionales,
                sino también visualmente atractivas y fáciles de usar.
              </p>
            </div>
          </div>
        </div>

        <div></div>
      </div>
      <div className="section_3">
       <p>Te dejo mi cv para que me conoscas mejor o visita mi Github</p>
       <div className="curriculum">
        <button> <a href="https://firebasestorage.googleapis.com/v0/b/portafolio-7e72a.appspot.com/o/curriculum-IngridMorales-2024.pdf?alt=media&token=adff1c3b-c8ad-4299-9b72-dd07c6bde755" target="_blank">Currilum vitae</a>
        </button>
          <button className="button_github">
              <a className="link" href="https://github.com/ingrid-mo" target="_blank">
                <IoLogoGithub /> GitHub
              </a>
            </button>
       </div>
      
      </div>
    </section>
  );
};

export default Aboutme;
