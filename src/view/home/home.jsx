import { useState, useEffect, useRef } from 'react';
import './home.css'; // Importa tu archivo de estilos aquí
import 'animate.css';
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io"; 
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  const animationRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const move = () => {
      setCurX(prevCurX => prevCurX + (tgX - prevCurX) / 20);
      setCurY(prevCurY => prevCurY + (tgY - prevCurY) / 20);
      animationRef.current = requestAnimationFrame(move);
    };

    animationRef.current = requestAnimationFrame(move);

    return () => cancelAnimationFrame(animationRef.current);
  }, [tgX, tgY]);

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    setTgX(mouseX);
    setTgY(mouseY);
  };
  const handleButtonClick = () => {
    navigate("/SobreMi");
  };
  return (
    <div onMouseMove={handleMouseMove}>
      <div className="card">
        <svg
          viewBox="0 0 100% 100%"
          xmlns='http://www.w3.org/2000/svg'
          className="noise"
        >
          <filter id='noiseFilter'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0.85'
              numOctaves='6'
              stitchTiles='stitch'
            />
          </filter>
          <rect
            width='100%'
            height='100%'
            preserveAspectRatio="xMidYMid meet"
            filter='url(#noiseFilter)'
            className='rect'
          />
        </svg>
        <div className="content">
          <h2>Bienvenidos</h2>
          <h1 className='home_title'>Ingrid Morales Muñoz</h1>
          <p>Frontend developer | UX/UI Designer</p>
          <div className='skills'>
            <FaReact />
            <IoLogoJavascript />
            <FaNodeJs />
            <FaFigma />
          </div>
          <div className="box-infinite" href="">
      <button className="animate__animated animate__pulse animate__infinite" onClick={handleButtonClick}>Conoce mas acerca de mi</button>
        </div>
        </div>
      </div>

      <div className="gradient-bg">
        <svg
          viewBox="0 0 100vw 100vw"
          xmlns='http://www.w3.org/2000/svg'
          className="noiseBg"
        >
          <filter id='noiseFilterBg'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0.6'
              stitchTiles='stitch'
            />
          </filter>
          <rect
            width='100%'
            height='100%'
            preserveAspectRatio="xMidYMid meet"
            filter='url(#noiseFilterBg)'
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="svgBlur">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive" style={{ transform: `translate(${Math.round(curX)}px, ${Math.round(curY)}px)` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
