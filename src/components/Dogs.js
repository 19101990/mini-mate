import React, { useState, useEffect } from 'react';

const dogsData = [
  {
    id: 1,
    name: 'Maple',
    image: 'gfx/gfx_10.webp',
    description: 'Maple war unsere erste Toy Australian Shepherd Hündin und verkörpert all das, weshalb wir uns so in diese Rasse verliebt haben und ihre Entwicklung mit unserem Zuchtprogramm begleiten möchten. Sie stammt aus einer renommierten Showlinie aus den USA und hat einige herausragende Elite Champions in ihrem Pedigree.'
  },
  {
    id: 2,
    name: 'Cosmo',
    image: 'gfx/gfx_14.webp',
    description: 'Cosmo haben wir aus Texas zu uns geholt. Er stammt aus einer sehr erfolgreichen Zuchtlinie für kleine Toy Australian Shepherds und wir sind sehr dankbar, dass wir ihn in unser Zuchtprogramm aufnehmen durften. Ein vielversprechender kleiner Charmeur – stets gut gelaunt und immer auf der Suche nach Blödsinn.'
  },
  {
    id: 3,
    name: 'Bodhi',
    image: 'gfx/bodhi_1.jpg',
    description: 'Minimates Bodhi Bear, unser selbstgezogener Herzensbrecher mit den eisblauen Augen lebt im Raum Magdeburg und darf dort bei einer liebevollen Familie erwachsen werden und die Welt entdecken. Er hat ein moderates bis niedriges Energielevel und ist sehr Menschenbezogen.'
  },
  {
    id: 4,
    name: 'Chewie',
    image: 'gfx/chewie_1.jpg',
    description: 'Minimates Chewbacca wächst in Ostfriesland auf und ist stets bereit für neue Abenteuer. Chewie ist ein aufgeschlossener junger Rüde, der keine Fremden kennt. Er liebt es Neues zu entdecken und mit seiner Familie Ausflüge zu unternehmen.'
  }
];

function DogCard({ name, image, description, isMobile }) {
  const cardStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    padding: '0px',
    background: isMobile ? 'transparent' : '#fff',
    position: 'relative'
  };

  const imageWrapperStyle = {
    position: 'relative'
  };

  const nameStyle = {
    position: 'absolute',
    bottom: isMobile ? 'unset' : '-20px',
    top: isMobile ? '0' : 'unset',
    left: isMobile ? '0' : '0px',
    fontSize: '30px',
    padding: '15px 35px',
    color: 'var(--primary-color)',
    background: 'var(--primary-text)',
    fontFamily: '"Lora", serif',
    lineHeight: '30px',
    fontWeight: '400',
    textAlign: isMobile ? 'center' : 'left',
    width: isMobile ? 'auto' : 'auto',
    transform: isMobile ? 'rotate(-20deg)' : 'none'
  };

  const imageStyle = {
    objectFit: 'cover',
    height: 'auto',
    maxHeight: isMobile ? '500px' : '400px',
    minWidth: '100%',
    margin: isMobile ? '0 auto' : '0',
    aspectRatio: isMobile ? 'unset' : 'auto',
    width: isMobile ? '100vw' : 'auto'
  };

  const descriptionStyle = {
    padding: isMobile ? '0' : '30px',
    margin: isMobile ? '30px 15px' : '0',
    maxWidth: isMobile ? 'calc(100% - 30px)' : 'auto',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    color: isMobile ? '#fff' : 'inherit'
  };

  return (
    <div style={cardStyle}>
      <div style={imageWrapperStyle}>
        <img style={imageStyle} loading="lazy" src={image} alt={name} />
        <div style={nameStyle}>{name}</div>
      </div>
      <div style={descriptionStyle}>{description}</div>
    </div>
  );
}

export default function Dogs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 978);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    width: '100vw',
    padding: isMobile ? '40px 0 80px' : '60px 0 140px',
    maxWidth: '1600px',
    margin: '0 auto',
    position: 'relative'
  };

  const backgroundStyle = {
    content: '""',
    background: 'var(--primary-color)',
    width: '100vw',
    height: '100%',
    left: '50%',
    marginLeft: '-50vw',
    top: '0',
    zIndex: '-1',
    position: 'absolute'
  };

  const wrapperStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gridGap: '30px',
    padding: isMobile ? '0' : '0 30px'
  };

  const headlineStyle = {
    fontSize: isMobile ? '42px' : '50px',
    fontFamily: '"Lora", serif',
    lineHeight: isMobile ? '42px' : '60px',
    color: 'var(--primary-text)',
    textAlign: 'center',
    marginBottom: isMobile ? '70px' : '50px'
  };

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle}></div>
      <h2 style={headlineStyle}>Unsere Minimates</h2>
      <div style={wrapperStyle}>
        {dogsData.map(dog => (
          <DogCard
            key={dog.id}
            name={dog.name}
            image={dog.image}
            description={dog.description}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
}