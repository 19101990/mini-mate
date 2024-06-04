import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";

export default function Footer() {

  return (
    <footer id="footer">
      <div className="footer_info">
        <div className="logo">
            <Link to={`/`}> 
              <h2 className=''>Mini Mate</h2>
            </Link>
        </div>
        <div className='footer_links'>
            <a href="https://instagram.com/simpli.us_lfm"><span className="icon"><FaInstagram /></span></a>
            <a href="tel:0000000000"><span className="icon"><LuPhone /></span></a>
            <a href="mailto:mail@mail.com"><span className="icon"><LuMail /></span></a>
        </div>

      </div>

    </footer>
  );
}