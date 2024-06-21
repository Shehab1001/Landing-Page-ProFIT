import React, { useState, useEffect } from 'react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { HiArrowLongRight } from "react-icons/hi2";
import '../styles/mediaQuery.css';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink, Events, animateScroll as scroll, scroller } from 'react-scroll';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    Events.scrollEvent.register('begin', function() {});
    Events.scrollEvent.register('end', function() {});

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <>
      <nav className="bg-blue-700 fixed top-0 left-0 w-full z-40 px-8 md:px-20 py-4 md:py-2 flex justify-between items-center">
        <a href="#">
          <Logo color='text-white' logoColor='#1D4ED8' bgColor='bg-white' subtitle={' '} border_b=' ' />
        </a>

        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-white p-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <ul className={`navBar text-lg text-white hidden md:hidden lg:flex lg:items-center  ${isMenuOpen ? 'hidden' : 'lg:flex'}`}>
          {['home', 'features', 'blogs', 'contact', 'about'].map(section => (
            <li key={section} className='nav-link List pe-16'>
              <ScrollLink 
                to={section} 
                smooth={true} 
                spy={true} 
                offset={-70} 
                duration={500} 
                className={`nav-link ${activeSection === section ? 'active' : ''}`} 
                onSetActive={handleSetActive}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center">
          <NavLink to="https://pro-fit-seven.vercel.app/login" className="px-3 py-2 rounded-md text-lg  text-white font-bold me-2">Login</NavLink>
          
          <NavLink to="https://pro-fit-seven.vercel.app/signup">
            <Button type="secondary">
              <p className="flex justify-center p-1 font-bold tracking-wide items-center gap-2">
                <span>Get Started</span>
                <HiArrowLongRight className="text-xl" />
              </p>
            </Button>
          </NavLink>
        </div>
      </nav>

      {/* Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isMenuOpen ? 'block' : 'hidden'}`} onClick={() => setIsMenuOpen(false)}></div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 bottom-0 z-50 w-64 bg-white p-6 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col  max-w-sm py-6 px-6 bg-white  overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <Logo color='text-blue-700' logoColor='white' bgColor='bg-blue-700' subtitle={' '} border_b='' />
            </a>
            <button className="navbar-close ms-10" onClick={() => setIsMenuOpen(false)}>
              <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <ul>
            {['home', 'features', 'blogs', 'contact', 'about'].map(section => (
              <li key={section} className="mb-1">
                <ScrollLink 
                  to={section} 
                  smooth={true} 
                  spy={true} 
                  offset={-70} 
                  duration={500} 
                  className="block p-4 text-lg  text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" 
                  onSetActive={handleSetActive}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <div className="mt-16 flex items-center gap-x-4 justify-center  p-4 text-xl  font-bold text-blue-700 bg-blue-50 hover:text-blue-600 rounded">
            <NavLink to="/login" className="">Login</NavLink>
            <HiArrowLongRight className="text-2xl" />
          </div>
        </nav>
      </div>
    </>
  );
}
