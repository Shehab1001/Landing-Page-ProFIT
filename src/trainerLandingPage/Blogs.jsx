import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { HiArrowLongRight } from 'react-icons/hi2';
import Accordion from '../ui/Accordion'; // Import the Accordion component
import '../styles/mediaQuery.css';

export default function Blogs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div id="blogs" className='bg-gray-100 w-full flex flex-col justify-center items-center'>
      <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-blue-700 pt-16 pb-4">Empower Your Fitness Journey</h2>
      <div className='w-4/5 md:w-1/2 flex justify-center text-center text-gray-500 text-lg'>
        Insights, Tips, and Success Stories to Inspire Both Trainers and Trainees
      </div>
      <div className='w-full md:w-[1000px] m-auto mb-16 px-4 md:px-0'>
        <div className="mt-16">
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name} className="rounded-xl bg-white shadow-md mb-8">
                <div className='m-4 flex h-64 justify-center items-center rounded-xl'>
                  <img src={d.img} alt="" className="rounded-xl"/>
                </div>
                <p className="text-gray-500 px-4">{d.read}</p>
                <div className="flex flex-col items-start justify-center px-4 pb-4">
                  <p className="text-lg font-bold text-blue-900 pb-2">{d.name}</p>
                  <p className="text-gray-500 pb-4">{d.review}</p>
                  <button className='transition-all duration-300 px-4 py-2 border-gray-300 border text-sm font-bold rounded-md text-black bg-white hover:border-black'>
                    <p className="flex justify-center font-bold tracking-wide items-center gap-2">
                      <span>Read More</span>
                      <HiArrowLongRight className="text-xl" />
                    </p>
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* Example usage of the Accordion component */}
        <div className="mt-16 w-full">
          <Accordion title="Frequently Asked Questions">
            <p>Here you can find answers to the most commonly asked questions about our services and platform.</p>
          </Accordion>
          <Accordion title="How to Get Started">
            <p>Follow our step-by-step guide to get started with our platform quickly and easily.</p>
          </Accordion>
          <Accordion title="Customer Support">
            <p>Our customer support team is here to help you with any questions or issues you may have.</p>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    read: `7 minutes read`,
    name: `How ProFIT Elevates Your Training Business`,
    img: `src/trainerLandingPage/imgs/blog_1.jpeg`,
    review: `In the rapidly evolving world of fitness, standing out as a trainer requires more than just expertise; it demands visibility and connection. ProFIT offers a unique...`
  },
  {
    read: `5 minutes read`,
    name: `Keeping Your Clients Motivated and Engaged`,
    img: `src/trainerLandingPage/imgs/blog_2.jpeg`,
    review: `Client retention is the cornerstone of a thriving fitness business. Discover strategies and insights on keeping your clients...`
  },
  {
    read: `10 minutes read`,
    name: `Leveraging ProFIT's Tech for Your Success`,
    img: `src/trainerLandingPage/imgs/blog_3.jpeg`,
    review: `Technology is reshaping the fitness industry, and ProFIT is at the forefront of this transformation. Explore how our platform's...`
  },
];
