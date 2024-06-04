import React from 'react';
import Hero from "../components/Hero";
import About from "../components/About";
import Dogs from "../components/Dogs";
import MainGallery from "../components/MainGallery";


export default function Homepage() {
  if(document.getElementById('main')) {
    document.querySelector('html').classList.add('main_page')
  }
  return (
      <div id="main">
          <Hero />
          <About />
          <Dogs />
          <MainGallery />
      </div>
  );
}