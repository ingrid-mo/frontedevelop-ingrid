import { useState } from 'react';
import './proyect.css'; // Asegúrate de importar tu archivo CSS con estilos
import { FaReact } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
const TrendingGames = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const games = [
    {
      title: "Red nacional de cuidadores",
      tecnologias1: <RiNextjsFill />,
      tecnologias2: <FaReact />,
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/portafolio-7e72a.appspot.com/o/image1.png?alt=media&token=0e3ba347-f8ae-4501-b4d7-35f78949d878",
      description: "Participé como frontend en este gran proyecto para personas cuidadoras , trabaje colaborativamente con metodologia scrum, ",
      url:"https://c16ronda.vercel.app/"
    },
    {
      title: "Farmacias syg",
      tecnologias1: <FaReact />,
      tecnologias2: <SiMui />,
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/portafolio-7e72a.appspot.com/o/image2.png?alt=media&token=5f226ef7-98c2-459c-84f0-a8a1985a60a6",
      description: "Participé como frontend y diseñadora ux/ui, es un proyecto que esta aun en proceso ",
      url:"https://farmaciasygindep.netlify.app/"
    },

      {
        title: "Black Garage",
        tecnologias1: <FaFigma />,
        tecnologias2: "",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/portafolio-7e72a.appspot.com/o/image3.png?alt=media&token=ffe3b1a0-014e-4f36-9b55-b53641b27f35",
        description: "Participé como Diseñadora ux/ui, elaborando un previo estudio de posicionamoento ademas de diseñar el sitio segun los estandares del cliente ",
        url:"https://blackgaragegt.com/"
        },
    // Agrega los otros juegos aquí con la misma estructura de objeto
  ];

  return (
    <section className="game-section">
      <h1 className="line-title">Mis Proyectos</h1>
      <div className="owl-carousel custom-carousel owl-theme" >
        <div className='carusel'>
        {games.map((game, index) => (
          <div
            key={index}
            className={`item ${index === activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${game.imageUrl})` }}
            onClick={() => handleItemClick(index)}
          >
            <div className="item-desc">
              <h3>{game.title}</h3>
              <p>{game.description} </p>
              <div className='icon_tecnology'>{game.tecnologias1} {game.tecnologias2}</div>
              <button className='buton_proyect'> <a href={game.url} target='_blank'>ver sitio web</a> </button>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingGames;
