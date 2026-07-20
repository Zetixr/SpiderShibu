import React from 'react';
import '../styles/About.css';

// Импорт ассетов
import sponsorImg from '../assets/sponsor.png';
import webImg from '../assets/web.png';
import oceanImg from '../assets/ocean.png';
import earthImg from '../assets/earth.png';
import foxImg from '../assets/fox.png';

// Кружки с иконками
import blueCircle from '../assets/blueCircle.png';
import redCircle from '../assets/redCircle.png';
import orangeCircle from '../assets/orangeCircle.png';

const About = () => {
  return (
    <section className="about-section" id="how-it-works">
      {/* Спонсоры */}
      <div className="sponsor-container">
        <img src={sponsorImg} alt="Sponsors" className="sponsor-image" />
      </div>

      {/* Интерактивная зона */}
      <div className="about-interactive-container">
        {/* Паутина */}
        <img src={webImg} alt="Spider Web" className="web-bg" />

        {/* Размещаем кружки вокруг планеты */}
        <img src={blueCircle} alt="" className="floating-circle blue-circle" />
        <img src={redCircle} alt="" className="floating-circle red-circle" />
        <img src={orangeCircle} alt="" className="floating-circle orange-circle" />

        {/* Земля с маской + Лиса */}
        <div className="globe-wrapper">
          <div className="globe-ocean-container">
            <img src={oceanImg} alt="Ocean" className="globe-ocean" />
            <img src={earthImg} alt="Earth" className="globe-earth" />
          </div>
          <img src={foxImg} alt="SpiderShiba" className="globe-fox" />
        </div>

        {/* Кнопка "Let's find out more" */}
        <button className="btn-find-out">
          Let's find out <br /> more
        </button>

        {/* Заголовок */}
        <h2 className="about-title">
          Yes you read that right, SpiderShib <br />
          Inu officially enters the game to <br />
          conquer the world 🌍
        </h2>
      </div>
    </section>
  );
};

export default About;