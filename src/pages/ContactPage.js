import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa6";


export default function Contact() {


    return (
        <div>
            <div className="contact_page">
                <h2 className='headline'>Kontakt</h2>
                <div className="contact_wrapper">
                    <div className='contact_links'>
                        <span className="contact_information">Da wir den Tag in der Regel auf dem Hof und mit unseren Tieren verbringen, sind wir telefonisch nicht erreichbar. Schickt uns gerne eine Nachricht über WhatsApp oder per Mail, wir melden uns zurück!</span>
                        <a href="https://instagram.com/thecoldwell_life"><span className="icon"><FaInstagram /><span className="txt">Check our instagram!</span></span></a>
                        <a href="https://wa.me/004915226156940"><span className="icon"><FaWhatsapp /><span className="txt">WhatsApp</span></span></a>
                        <a href="mailto:thecoldwell@web.de"><span className="icon"><LuMail /></span><span className="txt">thecoldwell@web.de</span></a>
                        <span className="contact_link"><span className="icon"><SlLocationPin /></span><span className="txt">Goslar Landkreis, Niedersachsen</span></span>
                    </div>
                    <div className="maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78735.70065141369!2d10.48356835!3d51.92500355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a5409a8340441b%3A0xa340eceac807c2b!2sGoslar!5e0!3m2!1sde!2sde!4v1725454083801!5m2!1sde!2sde" height="450" border="0" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}