import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);


  useEffect(() => {
    
    const checkSize = () => {
      if (window.innerWidth > 768) {
        setOpenMenu(true);
      } else {
        setOpenMenu(false);
      }
    };

    window.addEventListener("resize", checkSize);
    checkSize();

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      if (openMenu) {
        gsap.from(menuRef.current.children, {
          x: -30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
        });
      }
    }
  
  }, [openMenu]);

  const toggleMenu = () => {
    setOpenMenu(prev => !prev);
  };

  return (
    <div className='overflow-hidden bg-[#050511]'>
      <nav className='flex justify-between p-2'>
        <div className="logo font-semibold text-xl md:text-2xl italic text-[#b0b4b2]">
          <i className="fa-brands fa-drupal text-[#21bd8e] p-2 text-2xl md:text-3xl"></i>
          Portflio
        </div>

        <div className="md:hidden w-8 flex flex-col gap-1 justify-center items-end" onClick={toggleMenu}>
          <div className='h-1 w-full bg-[#b0b4b2] rounded-full'></div>
          <div className='h-1 w-2/3 bg-[#b0b4b2] rounded-full'></div>
          <div className='h-1 w-1/3 bg-[#b0b4b2] rounded-full'></div>
        </div>
        {openMenu && (

          <ul
            ref={menuRef}
            className='p-10 md:p-0 absolute md:relative top-12 md:top-0 left-0  flex flex-col md:flex-row w-full md:w-fit bg-[#050511] md:bg-[#0000] gap-3 md:gap-6 z-20'
          >
            <li className='font-semibold text-[#b0b4b2] md:py-2 italic uppercase'>
              <Link smooth to="#home">home</Link>
            </li>
            <li className='font-semibold text-[#b0b4b2] md:py-2 italic uppercase'>
              <Link smooth to="#about">about</Link>
            </li>
            <li className='font-semibold text-[#b0b4b2] md:py-2 italic uppercase'>
              <Link smooth to="#services">services</Link>
            </li>
            <li className='font-semibold text-[#b0b4b2] md:py-2 italic uppercase'>
              <Link smooth to="#portfolio">portfolio</Link>
            </li>
            <li className='font-semibold text-[#b0b4b2] md:py-2 italic uppercase'>
              <Link smooth to="#experience">experience</Link>
            </li>
          </ul>
          
        )}
      </nav>
    </div>
  );
}

export default Navbar;
