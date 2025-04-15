import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 978);
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 978);
      setIsSmallMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const heroStyles = {
    background: 'var(--primary-color)',
    width: '100vw',
    height: '100%',
    position: 'relative',
    display: isMobile ? 'flex' : 'grid',
    flexDirection: isMobile ? 'column' : undefined,
    gridTemplateColumns: isMobile ? undefined : '1fr 1fr',
    height: isMobile ? 'auto' : '100%',
    marginBottom: isMobile ? '55px' : '100px'
  };

  const heroImgStyles = {
    position: 'relative',
    zIndex: 1,
    color: 'var(--alternative-text)',
    height: isSmallMobile ? '600px' : isMobile ? '800px' : '100vh'
  };

  const heroImgImgStyles = {
    objectFit: 'cover',
    minWidth: '100%',
    maxHeight: '100vh',
    objectPosition: '50% 0%',
    height: isSmallMobile ? '600px' : isMobile ? '800px' : '100%',
    maxWidth: isSmallMobile ? '100%' : undefined
  };

  const heroTextStyles = {
    position: 'relative',
    zIndex: 1,
    color: 'var(--alternative-text)',
    height: isMobile ? 'auto' : '100vh',
    padding: isMobile ? '60px 0 80px' : '0 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    margin: 'auto',
    background: 'var(--primary-color)'
  };

  const textStyles = {
    paddingLeft: isMobile ? '15px' : undefined,
    paddingRight: isMobile ? '15px' : undefined
  };

  return (
    <div style={heroStyles}>
      <div style={heroImgStyles}>
        <img loading="lazy" src="gfx/hero.jpg" alt="" style={heroImgImgStyles} />
      </div>
      <div style={heroTextStyles}>
        <span style={{
          fontSize: '18px',
          fontFamily: "'Istok Web', sans-serif",
          color: 'var(--alternative-text)',
          position: 'relative',
          paddingBottom: '5px',
          ...textStyles
        }}>
          Willkommen bei unserem
        </span>
        <h4 style={{
          fontSize: isMobile ? '45px' : '50px',
          fontFamily: '"Lora", serif',
          lineHeight: '60px',
          maxWidth: '600px',
          padding: '15px 0 0',
          color: 'var(--primary-text)',
          textAlign: 'center',
          margin: '0 0 20px',
          ...textStyles
        }}>
          Toy Australian Shepherd
        </h4>
        <span style={{
          fontSize: '30px',
          fontFamily: '"Lora", serif',
          lineHeight: '35px',
          color: 'var(--primary-text)',
          ...textStyles
        }}>
          Zuchtprogramm!
        </span>
      </div>
    </div>
  );
}