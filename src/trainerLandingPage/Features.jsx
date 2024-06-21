import React, { useEffect, useRef , useState} from 'react';
import '../styles/mediaQuery.css';
import { HiOutlineViewGrid } from "react-icons/hi";
import { PiUsersThreeBold } from "react-icons/pi";
import { LuApple } from "react-icons/lu";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { IoGlobeOutline } from "react-icons/io5";
import { BiDumbbell } from "react-icons/bi";
import { BsLightning } from "react-icons/bs";
import { VscSettings } from "react-icons/vsc";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import Button from '../ui/Button';
import { HiArrowLongRight } from 'react-icons/hi2';
import Accordion from '../ui/Accordion';




export default function Features() {
    const containerRef = useRef([]);
    const [lastYPos, setLastYPos] = useState(0);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const currentYPos = window.scrollY;
            if (entry.isIntersecting && currentYPos > lastYPos) {
              entry.target.classList.add('animate-on-scroll');
              entry.target.style.animation = `slideUp 0.8s ease-out forwards`;
            }
            setLastYPos(currentYPos);
          });
        },
        {
          threshold: 0.1,
        }
      );
  
      containerRef.current.forEach((el) => {
        if (el) observer.observe(el);
      });
  
      return () => {
        containerRef.current.forEach((el) => {
          if (el) observer.unobserve(el);
        });
      };
    }, [lastYPos]);

    return <>
        <div id="features" className="flex flex-col items-center py-16 justify-center ">
            <h2 className="md:text-5xl text-4xl font-bold text-blue-700 lg:leading-loose mb-16">Top Features</h2>       
                <div className="features-list grid md:grid-cols-2 lg:mb-10 sm:grid-cols-1 lg:grid-cols-3 gap-y-4 md:gap-y-12 md:gap-x-16  lg:gap-y-16  text-blue-900 text-xl md:text-3xl lg:text-xl font-bold">

                 
                    <div className="flex items-center justify-center md:justify-start hover:text-blue-500 hover:bg-blue-50 px-4 py-8 rounded-lg transition duration-300 ease-in-out">
                        <BsLightning className='md:size-9 size-7 lg:size-7' />
                        <div className="ms-4">Automated Assessments</div>

                    </div>
                    <div className="flex items-center justify-center md:justify-start hover:text-blue-500 hover:bg-blue-50 px-4 py-8 rounded-lg transition duration-300 ease-in-out">
                        <BiDumbbell className='md:size-9 size-7 lg:size-7' />
                        <div className="ms-4">ProFIT Exercises Library</div>

                    </div>
                    <div className="flex items-center justify-center md:justify-start hover:text-blue-500 hover:bg-blue-50 px-4 py-8 rounded-lg transition duration-300 ease-in-out">
                        <VscSettings className='md:size-9 size-7 lg:size-7' />
                        <div className="ms-4">Customized Plan Builder</div>

                    </div>
                    <div className="flex items-center justify-center md:justify-start hover:text-blue-500 hover:bg-blue-50 px-4 py-8 rounded-lg transition duration-300 ease-in-out">
                        <PiCurrencyCircleDollar className='md:size-9 size-7 lg:size-7' />
                        <div className="ms-4">Subscriptions Packages</div>

                    </div>
              
                

                    <div className="flex items-center justify-center md:justify-start hover:text-blue-500 hover:bg-blue-50 px-4 py-8 rounded-lg transition duration-300 ease-in-out">
                        <PiUsersThreeBold className='md:size-9 size-7 lg:size-7' />
                        <div className="ms-4">Trainees Management</div>

                    </div>
               
                    <div className="flex items-center justify-center md:justify-start hover:text-blue-500 hover:bg-blue-50 px-4 py-8 rounded-lg transition duration-300 ease-in-out">
                        <LuApple className='md:size-9 size-7 lg:size-7' />
                        <div className="ms-4">ProFIT Foods Library</div>

                    </div>
                    <div className="flex items-center justify-center md:justify-start hover:text-blue-500 hover:bg-blue-50 px-4 py-8 rounded-lg transition duration-300 ease-in-out">
                        <HiOutlineViewGrid className='md:size-9 size-7 lg:size-7' />
                        <div className="ms-4">Dashboard Overview</div>

                    </div>

                    <div className="flex items-center justify-center md:justify-start  hover:text-blue-500 hover:bg-blue-50 px-4 py-8 rounded-lg transition duration-300 ease-in-out">
                        <IoGlobeOutline className='md:size-9 size-7 lg:size-7' />
                        <div className="ms-4">Trainer Portfolio</div>

                    </div>

                    <div className="flex items-center justify-center md:justify-start  hover:text-blue-500 hover:bg-blue-50 px-4 py-8 rounded-lg transition duration-300 ease-in-out">
                        <BiMessageRoundedDetail className='md:size-9 size-7 lg:size-7' />
                        <div className="ms-4">Realtime Chat</div>

                    </div>



                </div>
        </div>


        <div className="flex flex-col items-center justify-center py-12 bg-gray-100">
            <h2 className="md:text-5xl w-3/4 text-3xl font-bold text-gray-900 pt-16 pb-8  text-center">Join the ProFIT Trainer Network</h2>
            <div className=' w-3/4 flex justify-center text-center text-gray-500 text-xl '>Attract more clients, streamline your workflow, and achieve greater success.</div>


            <div className="w-full lg:px-16 ">
                <div className='flex  lg:flex-col lg:text-center text-blue-900 lg:justify-between justify-center items-center  py-16 '>

                    <div className='levels hidden lg:flex justify-between items-center w-3/4 mx-auto  mb-8 relative  '>

                        <hr className='border-b border-dashed border-gray-400 w-full absolute -z-5 ' />

                        <div className="rounded-full w-12 h-12 bg-pink-600 flex relative items-center justify-center ">
                            <span className='text-2xl font-bold text-white'>1</span>
                        </div>

                        <div className="rounded-full w-12 h-12 bg-green-600 flex relative items-center justify-center">
                            <span className='text-2xl font-bold text-white'>2</span>
                        </div>

                        <div className="rounded-full w-12 h-12 bg-purple-600 flex relative items-center justify-center">
                            <span className='text-2xl font-bold text-white'>3</span>
                        </div>
                    </div>


                    <div className='lg:flex lg:w-full justify-between '>

                        <div className='network lg:w-[400px] flex  lg:flex-col items-center justify-center mb-24 lg:mb-0 '>

                            <div className="lg:hidden mx-4 rounded-full md:w-12 md:h-12 w-12 h-12 bg-pink-600 flex relative items-center justify-center mb-8">
                                <span className='md:text-2xl text-3xl font-bold text-white'>1</span>
                            </div>

                            <div className='Image w-[420px] md:w-[320px] lg:w-[400px] sm:mb-8 flex'>
                                <img src="src\trainerLandingPage\imgs\MacBook1.png" alt="" srcSet="" />
                            </div>
                            <div className='md:ps-8 pb-4 lg:ps-0 lg:pb-0 '>
                                <div className=' title text-4xl md:text-3xl  font-bold leading-normal lg:pt-8  pb-4'>Personal Information</div>
                                <div className='subtitle lg:w-[350px] w-[400px] md:w-[320px] md:text-[18px] text-xl'>Create your professional profile and showcase your unique approach to fitness.</div>
                            </div>

                        </div>


                        <div className='network lg:w-[400px] flex  lg:flex-col items-center justify-center mb-24 lg:mb-0 '>
                            <div className="lg:hidden mx-4 rounded-full md:w-12 md:h-12 w-12 h-12 bg-green-600 flex relative items-center justify-center mb-8">
                                <span className='md:text-2xl text-3xl font-bold text-white'>2</span>
                            </div>

                            <div className='Image w-[420px] md:w-[320px] lg:w-[400px] sm:mb-8 flex'>
                                <img src="src\trainerLandingPage\imgs\MacBook_2.png" alt="" srcSet="" />
                            </div>
                            <div className='md:ps-8 pb-4 lg:ps-0 lg:pb-0'>
                                <div className='title text-4xl md:text-3xl  font-bold leading-normal lg:pt-8  pb-4'>Professional Credentials</div>
                                <div className='subtitle lg:w-[350px] w-[400px] md:w-[320px] md:text-[18px] text-xl'>Highlight your expertise with certifications, experience, and transformation photos.</div>
                            </div>

                        </div>

                        <div className='network lg:w-[400px] flex  lg:flex-col items-center justify-center mb-24 lg:mb-0 '>
                            <div className="lg:hidden mx-4 rounded-full md:w-12 md:h-12 w-12 h-12 bg-purple-600 flex relative items-center justify-center mb-8">
                                <span className='md:text-2xl text-3xl font-bold text-white'>3</span>
                            </div>
                            <div className='Image w-[420px] md:w-[320px] lg:w-[400px] sm:mb-8 flex'>
                                <img src="src\trainerLandingPage\imgs\MacBook_3.png" alt="" srcSet="" />
                            </div>
                            <div className='md:ps-8 pb-4 lg:ps-0 lg:pb-0'>
                                <div className='title text-4xl md:text-3xl  font-bold leading-normal lg:pt-8  pb-4'>Packages & Pricing</div>
                                <div className='subtitle lg:w-[350px] w-[400px] md:w-[320px] md:text-[18px] text-xl'>Design and manage customized training packages that attract your ideal clients.</div>
                            </div>

                        </div>
                    </div>

                </div>


            </div>


        </div>


        <div className="flex flex-col items-center justify-center ">
            <h2 className="text-3xl text-center md:text-5xl font-bold text-blue-700 pt-16 pb-8">Take control of your training empire</h2>
            <div className='md:w-1/2  w-3/4 text-center text-gray-500 text-lg'>With ProFIT's dashboard, you're not just a trainer, you're a data-driven business leader, empowered to make informed decisions and propel your fitness career to new heights.</div>

            <div className='my-16'>
                <a href="#">
                    <Button >
                        <p className="flex justify-center text-base font-bold tracking-wide items-center gap-2">
                            <span>Sign Up Now</span>
                            <HiArrowLongRight className="text-xl" />
                        </p>
                    </Button>
                </a>
            </div>
            <div className='lg:w-[850px] w-3/4 mb-32 container-to-animate' ref={(el) => (containerRef.current[0] = el)}>
                <img src="src\trainerLandingPage\imgs\dashboard.png" alt="" srcSet="" />

            </div>


            <div className="bg-teal-50 pt-8 px-8 w-3/4 lg:w-fit md:rounded-2xl mb-8 container-to-animate"  ref={(el) => (containerRef.current[1] = el)}>

                <div className=' md:flex items-center lg:justify-center md:items-start lg:gap-x-12 mb-16'>
                    <div className='w-[540px] hidden lg:block'>
                        <img src="src\trainerLandingPage\imgs\Tablet_1.png" alt="" srcSet="" />
                    </div>
                    <div className='lg:pe-32 '>
                        <div className='md:text-5xl text-4xl font-bold text-cyan-600 leading-normal'>Your Food Library</div>
                        <div className='text-cyan-600 text-xl mb-8 md:mb-16'>Your Recipe for Success</div>
                        <ul className='mb-8 md:mb-16 text-lg md:text-xl md:ms-4'>
                            <li className="flex items-center pb-1">
                                <span className="h-1 w-1 bg-black  inline-block mr-2"></span>
                                Explore a ProFIT database
                            </li>
                           
                            <li className="flex items-center">
                                <span className="h-1 w-1 bg-black  inline-block mr-2"></span>
                                Create your own Foods
                            </li>
                            <li className="flex items-center pb-1">
                                <span className="h-1 w-1 bg-black  inline-block mr-2"></span>
                                Filter with ease
                            </li>
                        </ul>


                        <button className='`transition-all duration-300 px-4 py-3 border-white border-2 text-sm font-bold rounded-md
                text-white bg-cyan-600 hover:bg-transparent hover:text-cyan-600 hover:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-cyan-600`,'>
                            <p className="flex justify-center text-base font-bold tracking-wide  items-center gap-2">
                                <span>Learn More</span>

                            </p>
                        </button>




                    </div>
                </div>

                <div className='flex items-start lg:gap-x-12 mb-8 md:mb-16'>
                    <div className='lg:pe-32 md:mt-8'>
                        <div className='md:text-5xl text-4xl font-bold text-cyan-600 leading-normal'>Reusable Templates</div>
                        <div className='text-cyan-600 text-xl mb-8 md:mb-16'>Streamline Your Workflow</div>
                        <ul className='mb-8 md:mb-16 text-lg md:text-xl md:ms-4 '>
                            <li className="flex items-center pb-1">
                                <span className="h-1 w-1 bg-black  inline-block mr-2"></span>
                                Build reusable templates
                            </li>
                            <li className="flex items-center pb-1">
                                <span className="h-1 w-1 bg-black  inline-block mr-2"></span>
                                Load your template in Plan Builder
                            </li>
                            <li className="flex items-center">
                                <span className="h-1 w-1 bg-black  inline-block mr-2"></span>
                                Save time and effort
                            </li>
                        </ul>


                        <button className='`transition-all duration-300 px-4 py-3 border-white border-2 text-sm font-bold rounded-md
                text-white bg-cyan-600 hover:bg-transparent hover:text-cyan-600 hover:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-cyan-600`,'>
                            <p className="flex justify-center text-base font-bold tracking-wide  items-center gap-2">
                                <span>Learn More</span>

                            </p>
                        </button>

                    </div>
                    <div className='w-[540px] hidden lg:block'>
                        <img src="src\trainerLandingPage\imgs\Tablet_2.png" alt="" srcSet="" />
                    </div>

                </div>

                <div className='flex items-center gap-x-12 mb-8 md:mb-16'>
                    <div className='w-[540px] hidden lg:block'>
                        <img src="src\trainerLandingPage\imgs\Tablet_3.png" alt="" srcSet="" />
                    </div>
                    <div className='lg:pe-16 '>
                        <div className='md:text-5xl text-4xl font-bold text-cyan-600 leading-normal mt-8'>Build Customized Plans</div>
                        <div className='text-cyan-600 text-xl mb-8 md:mb-16'>Deliver Optimal Results</div>
                        <ul className='mb-8 md:mb-16 text-lg md:text-xl md:ms-4'>
                            <li className="flex items-center pb-1">
                                <span className="h-1 w-1 bg-black  inline-block mr-2"></span>
                                Using Trainee Preferences through assessment
                            </li>
                            <li className="flex items-center pb-1">
                                <span className="h-1 w-1 bg-black  inline-block mr-2"></span>
                                Load your template in Plan Builder
                            </li>
                            <li className="flex items-center">
                                <span className="h-1 w-1 bg-black  inline-block mr-2"></span>
                                Save meals for future use
                            </li>
                        </ul>


                        <button className='`transition-all duration-300 px-4 py-3 border-white border-2 text-sm font-bold rounded-md
                text-white bg-cyan-600 hover:bg-transparent hover:text-cyan-600 hover:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-cyan-600`,'>
                            <p className="flex justify-center text-base font-bold tracking-wide  items-center gap-2">
                                <span>Learn More</span>

                            </p>
                        </button>




                    </div>
                </div>

            </div>

            <div className="bg-orange-50 text-center lg:text-left pt-8 lg:w-[1200px] w-3/4 px-8 rounded-2xl mb-8 container-to-animate" ref={(el) => (containerRef.current[2] = el)}>
                <div className='flex items-start mb-8 md:mb-16'>
                    <div className='lg:w-1/2'>
                        <div className='lg:text-5xl md:text-4xl text-3xl font-bold  leading-normal mb-8 py-6 text-orange-500'>Streamline Client Management</div>
                        <div className='lg:w-3/4'>
                            <div className='text-gray-900 md:text-xl text-lg mb-8  md:mb-16'>Free yourself from administrative burdens and dedicate more time to what matters most: helping your clients achieve their fitness goals.</div>
                        </div>

                        <button className='`transition-all duration-300 px-4 py-3 border-transparent border-2 text-sm font-bold rounded-md
text-white bg-orange-600 hover:bg-transparent hover:text-orange-600 hover:border-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-cyan-600`,'>
                            <p className="flex justify-center text-base font-bold tracking-wide  items-center gap-2">
                                <span>Learn More</span>

                            </p>
                        </button>

                    </div>
                    <div className='w-[540px] hidden lg:block'>
                        <img src="src\trainerLandingPage\imgs\Tablet_4.png" alt="" srcSet="" />
                    </div>

                </div>


            </div>


            <div className="bg-indigo-50 pt-8 text-center lg:text-left w-3/4 lg:w-fit px-8 rounded-2xl mb-16 container-to-animate" ref={(el) => (containerRef.current[3] = el)}>



                <div className='flex items-start mb-8 md:mb-16 gap-x-16'>

                    <div className='w-[540px] hidden lg:block'>
                        <img src="src\trainerLandingPage\imgs\Tablet_4.png" alt="" srcSet="" />
                    </div>

                    <div className='lg:w-1/2'>
                        <div className='lg:text-[43px] md:text-4xl text-3xl font-bold  mb-8 py-4 text-indigo-500'>Tailored Training Packages</div>
                        <div className='lg:w-[500px]'>
                            <div className='text-gray-900 md:text-xl text-lg mb-8 md:mb-16'>Attract more clients, increase your revenue, and build a sustainable training business with ProFIT's flexible and powerful pricing tools.</div>
                        </div>



                        <button className='`transition-all duration-300 px-4 py-3 border-transparent border-2 text-sm font-bold rounded-md
text-white bg-indigo-600 hover:bg-transparent hover:text-indigo-600 hover:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-cyan-600`,'>
                            <p className="flex justify-center text-base font-bold tracking-wide  items-center gap-2">
                                <span>Learn More</span>

                            </p>
                        </button>

                    </div>
                </div>
            </div>
            <h2 className="lg:text-5xl text-4xl font-bold text-blue-700 pt-16 pb-4">Realtime Chat</h2>
            <div className='lg:w-1/2  flex justify-center text-center text-gray-500 text-lg '>Connecting You with Your Clients</div>

            <div className='lg:w-3/5 container-to-animate' ref={(el) => (containerRef.current[4] = el)}>
                <img src="src\trainerLandingPage\imgs\Chat.png" alt="" srcSet="" />
            </div>
            <h2 className="lg:text-4xl text-3xl font-bold text-blue-700 pt-24 text-center pb-2 lg:w-1/3 " style={{ lineHeight: '1.5' }}>How Trainees Discover You on ProFIT Mobile App</h2>
            <div className='lg:w-1/2  flex justify-center text-center text-gray-500 lg:text-base text-xl pb-8'>A Peek into the Trainee Experience on Our App</div>

            <div className='lg:flex md:mx-48 mx-32 lg:space-x-8 mb-16 container-to-animate' ref={(el) => (containerRef.current[5] = el)}>
                <div>
                    <img src="src\trainerLandingPage\imgs\Trainee_1.png" alt="" srcSet="" />
                </div>
                <div>
                    <img src="src\trainerLandingPage\imgs\Trainee_2.png" alt="" srcSet="" />
                </div>
                <div>
                    <img src="src\trainerLandingPage\imgs\Trainee_3.png" alt="" srcSet="" />
                </div>
            </div>
            <h2 className="lg:text-5xl text-4xl font-bold text-blue-700 pt-16 pb-4">Learn More about ProFIT</h2>
            <div className='lg:w-1/3 flex justify-center text-center text-gray-500 text-lg pb-16'>Most common questions our user asks about ProFIT don’t hesitate to contact us for further information.</div>
            <div className="mx-auto bg-white border rounded-md mb-8">
                <Accordion title="What is ProFIT?">
                    <p>Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.</p>
                    <p>With that being said, feel free to use this design kit for your open-source projects.</p>
                    <p>Find out more information by <span className='text-blue-700'>reading the license.</span></p>
                </Accordion>
                <Accordion title="Which business types can use ProFIT?">
                    <p>Content for which business types can use ProFIT</p>
                </Accordion>
                <Accordion title="What about browser support?">
                    <p>Content for what about browser support</p>
                </Accordion>
            </div>



        </div>

    </>
}
