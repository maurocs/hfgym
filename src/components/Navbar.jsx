import { useState, useEffect } from "react"

import {close, menu } from '../../public/assets';
import { navLinks } from '../constants';

import { ContactButton } from "./";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 600) {
        setScrollTop(true);
      }
      else {
        setScrollTop(false);
      }
      document.getElementById("navbar").classList.toggle("opaque-nav", scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  useEffect(() => {
    const html = document.getElementsByTagName('html')[0]
  
    if (toggle) {
      html.classList.add('lock-scroll')
    } else {
      html.classList.remove('lock-scroll')
    }
    return () => {
      html.classList.remove('lock-scroll')
    }
  }, [toggle])

  return (
    <nav id="navbar" className="w-full sm:px-6 px-2 bg-[#212121cf] text-white sticky top-0 z-50">
      <div className="w-full flex py-4 justify-between items-center navbar z-20">
        <a href="#home">
          <img id="logo" src="assets/logo.svg" alt="healthy fitness gym" 
          className="sm:h-10 h-[28px]"/>
        </a>
  
        <ul className="list-none sm:flex hidden justify-center items-center flex-1">
          {navLinks.map((nav) => (
            <li key={nav.id} className={`font-montserrat font-bold cursor-pointer text-[16px] mr-10`}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:flex hidden">
          <ContactButton />
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center z-30">
          <img src={menu} alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} z-100 flex-col bg-[#212121cf] absolute top-0 right-0 min-h-screen min-w-full backdrop-blur-md`}></div>
          <div className={`${toggle ? 'flex' : 'hidden'} gap-6 z-100 p-8 flex-col absolute top-0 right-0 min-h-screen w-full rounded sidebar`}>
            <div className="flex justify-end items-center">
              <img src={close} alt="menu"
                  className="w-[22px] h-[22px] object-contain"
                  onClick={() => setToggle((prev) => !prev)}
                />
            </div>
            <ul className="list-none flex flex-col items-center flex-1">
              {navLinks.map((nav) => (
                <li key={nav.id} className={`text-center text-hfWhite font-montserrat font-bold cursor-pointer text-[16px] py-4 border-b-2 border-[#ffffff11] w-full`}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
              <li className="my-4">
                <ContactButton />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar