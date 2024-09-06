import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";


export default function Contact() {


    return (
        <div>
            <div className="contact_page">
                <h2 className='headline'>Contact</h2>
                <div className='contact_links'>
                    <a href="https://instagram.com/simpli.us_lfm"><span className="icon"><FaInstagram /></span></a>
                    <a href="tel:0000000000"><span className="icon"><LuPhone /></span></a>
                    <a href="mailto:mail@mail.com"><span className="icon"><LuMail /></span><span className="txt">mail@mail.com</span></a>
                </div>
                <div className="maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78735.70065141369!2d10.48356835!3d51.92500355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a5409a8340441b%3A0xa340eceac807c2b!2sGoslar!5e0!3m2!1sde!2sde!4v1725454083801!5m2!1sde!2sde" height="650" border="0" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
}