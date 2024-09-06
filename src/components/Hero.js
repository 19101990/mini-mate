import React from 'react';


export default function Hero() {

  return (
    <div className="hero">
      <div className="hero_img">
        <img loading="lazy" src="gfx/hero.jpg" alt=""></img>
      </div>
      <div className="hero_text">
        <span>Willkommen bei unserem</span>
        <h4>Toy Australian Shepherd</h4>
        <span>Zuchtprogramm!</span>
      </div>
    </div>
  );
}