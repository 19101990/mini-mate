import React, { useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa6";

export default function Contact() {
    const [mapLoaded, setMapLoaded] = useState(false);
    const [mapError, setMapError] = useState(false);

    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MiniMate - Toy Australian Shepherd Zucht",
        "description": "Kleine Hobbyzucht von Toy Australian Shepherds im Harz. Fokus auf Gesundheit, Temperament und Schönheit.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Goslar",
            "addressRegion": "Niedersachsen",
            "addressCountry": "DE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "51.92500355",
            "longitude": "10.48356835"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "thecoldwell@web.de",
            "telephone": "+4915226156940",
            "availableLanguage": ["German", "English"],
            "contactOption": ["WhatsApp", "Email"],
            "areaServed": "DE"
        },
        "sameAs": [
            "https://instagram.com/thecoldwell_life"
        ]
    };

    return (
        <div>
            <script type="application/ld+json">
                {JSON.stringify(contactSchema)}
            </script>
            <div className="contact_page">
                <h2 className='headline'>Kontakt</h2>
                <div className="contact_wrapper">
                    <div className='contact_links'>
                        <span className="contact_information">Da wir den Tag in der Regel auf dem Hof und mit unseren Tieren verbringen, sind wir telefonisch nicht erreichbar. Schickt uns gerne eine Nachricht über WhatsApp oder per Mail, wir melden uns zurück!</span>
                        <a href="https://instagram.com/thecoldwell_life" aria-label="Besuchen Sie uns auf Instagram"><span className="icon"><FaInstagram /><span className="txt">Check our instagram!</span></span></a>
                        <a href="https://wa.me/004915226156940" aria-label="Kontaktieren Sie uns über WhatsApp"><span className="icon"><FaWhatsapp /><span className="txt">WhatsApp</span></span></a>
                        <a href="mailto:thecoldwell@web.de" aria-label="Schreiben Sie uns eine E-Mail"><span className="icon"><LuMail /></span><span className="txt">thecoldwell@web.de</span></a>
                        <span className="contact_link"><span className="icon"><SlLocationPin /></span><span className="txt">Goslar Landkreis, Niedersachsen</span></span>
                    </div>
                    <div className="maps">
                        {!mapLoaded && !mapError && (
                            <div className="map-loading">Karte wird geladen...</div>
                        )}
                        {mapError && (
                            <div className="map-error">Die Karte konnte nicht geladen werden. Bitte versuchen Sie es später erneut.</div>
                        )}
                        <iframe 
                            title="Google Maps Standort von MiniMate - Toy Australian Shepherd Zucht"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78735.70065141369!2d10.48356835!3d51.92500355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a5409a8340441b%3A0xa340eceac807c2b!2sGoslar!5e0!3m2!1sde!2sde!4v1725454083801!5m2!1sde!2sde" 
                            height="450" 
                            width="100%" 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            onLoad={() => setMapLoaded(true)}
                            onError={() => setMapError(true)}
                            aria-label="Google Maps Standort von MiniMate - Toy Australian Shepherd Zucht"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}