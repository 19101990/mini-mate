import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Divide as Hamburger } from "hamburger-react";
import { FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";

export default function Header() {
  const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
  }, []);

  // menu on resize
  const [windowDimension, setWindowDimension] = useState(null);
  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);
  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isMobile = windowDimension <= 756;


  const [isOpen, setOpen] = useState(false);
  const {pathname} = useLocation();

  document.addEventListener('scroll', function documentScrollFunction(e) {
    if (window.scrollY > 0) {
      document.documentElement.classList.add('--scroll-down');
    } else {
      document.documentElement.classList.remove('--scroll-down');
    }
  })

  return (
    <header id="header" className="header__wrapper">
      <div className="logo">
        <Link to={`/`}> 
          <h2 className=''>Mini Mate</h2>
        </Link>
      </div>
      {isMobile ? (
        <div>
          <Hamburger toggled={isOpen} size={32} toggle={setOpen} />
          <div className="menu_wrapper">
            <ul className="menu">
              <li className=''>
                <Link to={`/`} onClick={()=>setOpen(false)}>Home</Link>
              </li>
              <li className=''>
                <Link to={`/dogs`} onClick={()=>setOpen(false)}>Our Dogs</Link>
              </li>
              <li className=''>
                <Link to={`/contact`} onClick={()=>setOpen(false)}>Contact Us</Link>
              </li>
            </ul>
            <div className='header_links'>
                <a href="https://instagram.com/simpli.us_lfm"><span className="icon"><FaInstagram /></span></a>
                <a href="tel:0000000000"><span className="icon"><LuPhone /></span></a>
                <a href="mailto:mail@mail.com"><span className="icon"><LuMail /></span></a>
            </div>
          </div>
        </div>
        ) : (
          <ul className="menu">
            <li className=''>
              <Link to={`/`}>Home</Link>
            </li>
            <li className=''>
              <Link to={`/dogs`}>Our Dogs</Link>
            </li>
            <li className=''>
              <Link to={`/contact`}>Contact Us</Link>
            </li>
          </ul>
        )}
    </header>
  );
}