import React from 'react'
import Logo from '../ui/Logo'
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsCheckLg, BsLinkedin } from "react-icons/bs";
import '../styles/mediaQuery.css';
import { Link as ScrollLink } from 'react-scroll';
import Button from '../ui/Button';
import { HiArrowLongRight } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return <>
    <div id="about">
    <div className='bg-[url("src/trainerLandingPage/imgs/trainer.svg")]  text-white bg-cover bg-center flex flex-col text-center'>
        <h2 className="lg:text-5xl text-4xl font-bold pt-16 pb-4">Unlock Your Trainer Potential</h2>
            <div className='flex justify-center text-center text-base md:text-lg font-normal'>Reach More Clients, Build Better Plans and Maximize Profitability.</div>
            
            <div className='mt-8'>
            <NavLink to="https://pro-fit-seven.vercel.app/login">
              <Button type="secondary">
                <p className="flex justify-center font-bold tracking-wide items-center gap-2">
                  <span>Join Our Community</span>
                  <HiArrowLongRight className="text-xl" />
                </p>
              </Button>
            </NavLink>

        
          
            <div className='md:flex items-center justify-center gap-x-16 my-16 font-semibold ms-4'>
              <div className="flex items-center justify-center mb-2 ms-1 md:ms-0 md:justify-start">
                <span className="rounded-full bg-green-500 inline-flex items-center justify-center p-[3px] mr-2">
                  <BsCheckLg size={14} />
                </span>
                Reach motivated trainees
              </div>
              <div className="flex items-center justify-center mb-2 md:justify-start">
                <span className="rounded-full bg-green-500 inline-flex items-center justify-center p-[3px] mr-2">
                  <BsCheckLg size={14} />
                </span>
                Client Data Management
              </div>
              <div className="flex items-center justify-center mb-2 ms-12 md:ms-0 md:justify-start">
                <span className="rounded-full bg-green-500 inline-flex items-center justify-center p-[3px] mr-2">
                  <BsCheckLg size={14} />
                </span>
                Streamlined Client Management
              </div>
           
            </div>

        
          </div>
            
            </div>

        <div className='bg-blue-800 w-full text-white'>
        <div className='md:flex md:justify-evenly px-16 md:px-0 items-start py-16 text-xl md:text-base'>
      <div className='flex flex-col items-start md:w-1/6 gap-y-4 mb-8 md:mb-0'>
        <div>
          <ScrollLink to="home" smooth={true}>
            <Logo color='text-white' logoColor='#1D4ED8' bgColor='bg-white' subtitle={' '} border_b=' ' />
          </ScrollLink>
        </div>
        <div className='md:text-base text-xl text-gray-300'>
          We power the world's fitness and wellness businesses and connect them with more consumers, more effectively, than anyone else.
        </div>
        <div className='flex gap-x-4'>
          <AiFillFacebook size={20} />
          <AiOutlineInstagram size={20} />
          <BsLinkedin size={20} />
        </div>
      </div>

      <div className='flex flex-col gap-y-2 mb-16 md:mb-0'>
        <p className='text-gray-300'>QUICK LINKS</p>
        <a className="footer-link" href="#home">Home</a>
        <a className="footer-link" href="#features">Features</a>
        <a className="footer-link" href="#case-study">Case Study</a>
        <a className="footer-link" href="#blogs">Blogs</a>
      </div>
      <div className='flex flex-col gap-y-2 mb-16 md:mb-0'>
        <p className='text-gray-300'>FEATURES</p>
        <a className="footer-link" href="#dashboard-overview">Dashboard Overview</a>
        <a className="footer-link" href="#profit-library">ProFIT Library</a>
        <a className="footer-link" href="#customized-plan-builder">Customized Plan Builder</a>
        <a className="footer-link" href="#trainees-management">Trainees Management</a>
        <a className="footer-link" href="#realtime-chat">Realtime Chat</a>
        <a className="footer-link" href="#subscriptions-packages">Subscriptions Packages</a>
      </div>

      <div className='flex flex-col gap-y-2 mb-16 md:mb-0'>
        <p className='text-gray-300'>FOLLOW US</p>
        <a className="footer-link" href="#facebook">Facebook</a>
        <a className="footer-link" href="#instagram">Instagram</a>
        <a className="footer-link" href="#linkedin">Linkedin</a>
        <a className="footer-link" href="#discord">Discord</a>
      </div>

      <div className='flex flex-col gap-y-2'>
        <p className='text-gray-300'>COMPANY</p>
        <a className="footer-link" href="#terms-conditions">Terms & Conditions</a>
        <a className="footer-link" href="#privacy-policy">Privacy Policy</a>
        <a className="footer-link" href="#about-us">About us</a>
        <a className="footer-link" href="#contact-us">Contact us</a>
      </div>
    </div>



        </div>
    </div>



        <div className='bg-blue-900 w-full text-white p-2 text-center text-sm'>
            PROFIT © 2024 All copyrights reserved.
        </div>

    </>
}
