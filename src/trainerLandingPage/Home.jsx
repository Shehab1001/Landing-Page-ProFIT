import React, { useEffect, useRef } from 'react';
import pattern from './imgs/Pattern.svg';
import coachTeam from './imgs/coachTeam.png';
import { BsCheckLg } from "react-icons/bs";
import { HiArrowLongRight } from 'react-icons/hi2';
import Button from '../ui/Button';
import '../styles/mediaQuery.css';



export default function Home() {
  const imageRef = useRef(null);
  const captionRef = useRef(null);

  useEffect(() => {
    if (captionRef.current && imageRef.current) {
      captionRef.current.classList.add('slide-in-left');
      imageRef.current.classList.add('slide-in-right');
    }
  }, []);

  return <>

    <div id="home" className="bg-gradient-to-b from-blue-700 to-blue-900 mt-[90px] md:mt-[75px] relative overflow-hidden">
      <div className='flex justify-center md:justify-between items-center z-0  px-3'>

        <div className='absolute left-0 top-0 bottom-0 -z-1'>
          <img src={pattern} className=" h-full lg:w-[800px]" alt="Pattern Background" />
        </div>


        <div ref={captionRef} className=' text-white  md:px-20 lg:px-20 py-8 lg:py-16 z-10 text-center md:text-left'>

          <div className='text-3xl md:text-4xl lg:text-5xl font-bold leading-normal md:leading-normal lg:leading-normal'>
            <span className='md:block'>The Smarter Way to Build</span>
            <span> Your Trainer Business.</span>
          </div>




          <div className="pt-5 text-[15px] lg:text-[20px] font-normal">Build Your Business & Confidence with ProFIT's Expert Tools.</div>

          <div className='home-list mt-12 grid grid-cols-1 md:justify-items-start lg:grid-cols-2 lg:gap-32'>
            <div className="mx-auto md:mx-0 md:justify-self-start lg:justify-self-auto max-w-full ps-6 md:ps-0">
              <div className="flex items-center mb-4">
                <span className="rounded-full bg-green-500 inline-flex items-center justify-center p-1 mr-2">
                  <BsCheckLg size={14} />

                </span>
                ProFIT Food & Exercises Library
              </div>
              <div className="flex items-center mb-4 lg:mb-0">
                <span className="rounded-full bg-green-500 inline-flex items-center justify-center p-1 mr-2">
                  <BsCheckLg size={14} />

                </span>
                Automated Assessments
              </div>
            </div>
            <div className="second-home-list mx-auto md:mx-0 md:justify-self-start lg:justify-self-auto max-w-md">
              <div className="flex items-center mb-4">
                <span className="rounded-full bg-green-500 inline-flex items-center justify-center p-1 mr-2">
                  <BsCheckLg size={14} />

                </span>
                Diet & Workout Plan Builder
              </div>
              <div className="flex items-center">
                <span className="rounded-full bg-green-500 inline-flex items-center justify-center p-1 mr-2">
                  <BsCheckLg size={14} />

                </span>
                Client Data Management
              </div>
            </div>
          </div>




          <div className='mt-12 mb-16'>
            <a href="#">
              <Button type="secondary">
                <p className="flex justify-center font-bold tracking-wide items-center p-2 gap-2">
                  <span>Level Up Your Business</span>
                  <HiArrowLongRight className="text-xl" />
                </p>
              </Button>
            </a>
          </div>
        </div>


        <div className='coachImage hidden md:flex bottom-0 right-8 absolute z-1'>
          <img ref={imageRef} src={coachTeam} className='w-[650px] lg:w-[800px]' alt="Coach Team" />
        </div>
      </div>
    </div>



  </>
}

