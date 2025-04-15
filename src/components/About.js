import React, { useState, useEffect } from 'react';

export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 978);
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 757);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 978);
      setIsSmallMobile(window.innerWidth <= 757);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyles = {
    maxWidth: isMobile ? (isSmallMobile ? '736px' : '970px') : '1200px',
    margin: '0 auto 150px',
    padding: isMobile ? '0 15px' : '0 15px',
    marginBottom: isMobile ? '80px' : '150px'
  };

  const textFullStyles = {
    fontSize: '18px',
    marginBottom: '25px'
  };

  const textRightStyles = {
    display: isMobile ? 'flex' : 'grid',
    flexDirection: isMobile ? 'column' : undefined,
    gridTemplateColumns: isMobile ? undefined : '1.5fr 1fr',
    gap: isMobile ? '0' : '50px'
  };

  const imageStyles = {
    objectFit: 'cover',
    maxHeight: '600px',
    width: '100%',
    maxWidth: isMobile ? '100%' : undefined,
    marginBottom: isMobile ? '10px' : undefined,
    display: isSmallMobile ? 'block' : 'block'
  };

  const textStyles = {
    fontSize: '18px'
  };

  return (
    <div style={containerStyles}>
      <h2 style={{
        fontSize: '50px',
        fontFamily: '"Lora", serif',
        lineHeight: '60px',
        color: 'var(--primary-text)',
        textAlign: 'center',
        marginBottom: '35px',
        ...(isMobile && {
          fontSize: '42px'
        })
      }}>The Cold Well's Minimates</h2>
      <div style={textFullStyles}>
        <p>Willkommen bei unserer kleinen Toy Australian Shepherd Hobbyzucht im malerischen Harzer Vorland! Mit Leidenschaft züchten wir die kleinste Version des Australian Shepherds und achten, trotz der gewünschten Größe von unter 35 cm, stets auf ein harmonisches Körperbild mit ausgewogenen Proportionen und kräftigem Körperbau. Unser Ziel ist es, gut gelaunte und umgängliche Familienhunde zu schaffen, die sich durch die enge Bindung zu ihren Menschen auszeichnen.</p>
      </div>
      <div style={textRightStyles}>
        <img loading="lazy" src="gfx/gfx_11.webp" alt="" style={imageStyles} />
        <div style={textStyles}>
          <p>Wir konzentrieren uns jedoch nicht nur auf das äußere Erscheinungsbild, sondern insbesondere auf die Wesensmerkmale, die einen idealen Begleiter ausmachen. Leichtführigkeit und ein ausgeprägter "Will to please" stehen bei uns an oberster Stelle. Unsere Hunde sollen sich problemlos in den Alltag integrieren lassen und leicht trainierbar sein.</p>
          <p>Unsere Philosophie basiert auf dem Streben nach gesunden und langlebigen Tieren. Wir setzen auf die sorgfältige Auswahl der Zuchttiere, regelmäßige tierärztliche Untersuchungen und eine liebevolle Aufzucht in familiärer Umgebung. Jeder Welpe erhält bei uns die bestmögliche Pflege und Sozialisierung, um sicherzustellen, dass er sich optimal in seiner zukünftigen Familie entwickelt.</p>
          <img loading="lazy" src="gfx/dogs_1.webp" alt="" style={{
            ...imageStyles,
            display: isSmallMobile ? 'block' : 'none'
          }} />
        </div>
      </div>
      <div style={textFullStyles}>
        <p>Wenn ihr nach einem liebevollen, leichtführigen und treuen Familienhund sucht, der in einem handlichen Format daherkommt, seid ihr bei uns genau richtig. Kontaktiert uns gerne für weitere Informationen über unsere Zucht, unsere Hunde und die Verfügbarkeit von Welpen. Wir freuen uns darauf, euch euren ganz persönlichen „Mini Mate" vorstellen zu dürfen!</p>
      </div>
    </div>
  );
}