import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import CookieConsent from "react-cookie-consent";

export default function Footer() {

  return (
    <footer id="footer">
      <div className="footer_info">
        <div className="logo">
          <Link to={`/`}>
            <h2 className=''>Minimate</h2>
          </Link>
        </div>
        <div className='footer_links'>
          <a href="https://instagram.com/thecoldwell_life"><span className="icon"><FaInstagram /></span></a>
          <a href="https://wa.me/004915226156940"><span className="icon"><FaWhatsapp /></span></a>
          <a href="mailto:thecoldwell@web.de"><span className="icon"><LuMail /></span></a>
        </div>

      </div>
      <div className="footer_copy">
        <p>&copy; 2024 The Cold Well </p>
      </div>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="MiniMateCookieConsent"
        // style={{ background: "#ccab5c", color: "#000" }}
        // buttonStyle={{ background: "#213e35", color: "#fff", fontSize: "14px" }}
        // declineButtonStyle={{ fontSize: "14px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </footer>
  );
}