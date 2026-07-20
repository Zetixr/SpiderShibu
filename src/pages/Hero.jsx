import React from 'react';
import '../styles/Hero.css';

// Импортируем ассеты
import foxImg from '../assets/fox.png';
import bigCircle from '../assets/bigCircle.png';
import blueStar from '../assets/blueStar.png';
import orangeStar from '../assets/orange.png';
import grayStar from '../assets/grayStar.png';
import starBlur from '../assets/starBlur.png';
import warningBanner from '../assets/warning.png'; // Импорт warning.png

const Hero = () => {
    return (
        <section className="hero-section">
            {/* Левая часть с текстом и фоновым кругом */}
            <div className="hero-content">
                <img src={bigCircle} alt="" className="decor-element mid-circle" />
                <img src={bigCircle} alt="" className="decor-element mid-circle-second" id='second-mid-circle'/>
                
                <h1 className="hero-title">
                    <span className="white-text">Who is </span>
                    <span className="red-text">mr. </span>
                    <br />
                    Spidershiba Inu?
                </h1>

                <p className="hero-subtitle">it’s a hybrid of Shiba and Spiderman..., but</p>

                <p className="hero-description">
                    It’s not only for pump and dump by Elon tweets. <br />
                    This is real NFT game with Achievements, Goals and nice gameplay with tokenization
                </p>

                <div className="hero-actions">
                    <button className="btn-join">Join Community</button>
                    <button className="btn-secondary">More about SpiderShiba Inu</button>
                </div>

                <div className="hero-contract">
                    <span className="contract-label">Contract address:</span>
                    <div className="contract-value">0xe4C5E7a0F696Fb2356A187020eb13E742792Fdcc</div>
                </div>
            </div>

            {/* Правая часть с лисой и декором */}
            <div className="hero-visual">
                <div className="hero-background-visual">
                    <img src={bigCircle} alt="" className="decor-element big-circle" />
                    <img src={blueStar} alt="" className="decor-element blue-star" />
                    <img src={orangeStar} alt="" className="decor-element orange-star" />
                    <img src={grayStar} alt="" className="decor-element gray-star" />
                    <img src={starBlur} alt="" className="decor-element star-blur" />

                    <div className="character-wrapper">
                        <img src={foxImg} alt="Spidershiba Character" className="main-character" />
                    </div>
                </div>
            </div>

            {/* Полоса предупреждения внизу секции */}
            <div className="warning-ticker-container">
                <img src={warningBanner} alt="Warning: this is not a meme coin" className="warning-image" />
            </div>
        </section>
    );
};

export default Hero;