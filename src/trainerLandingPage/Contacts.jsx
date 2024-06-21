import React from 'react'
import InputFloatingLabel from '../ui/InputFloatingLabel'
import Button from '../ui/Button'
import { HiArrowLongRight } from 'react-icons/hi2';
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { VscMail } from "react-icons/vsc";
import { BsCheckLg } from 'react-icons/bs';
import '../styles/mediaQuery.css';



export default function Contacts() {
    return <>

        <div id="contact" className='w-full flex flex-col justify-center items-center'>

            <h2 className="lg:text-5xl text-4xl font-bold text-blue-700 pt-16 pb-4">Contact Us</h2>
            <div className=' flex justify-center text-center text-gray-500 text-lg '>For support, partnership inquiries, or more information</div>


            <div className='md:flex justify-between items-center md:w-3/4 my-12'>
                <div className='mb-16 md:mb-0'>
                        <div className='flex items-center mb-8'>
                            <div className='bg-blue-100 text-blue-700 text-lg rounded-lg p-3'>
                                <FiPhoneCall/>
                            </div>
                           
                            <div className='ms-3'>
                                <div className='text-xl text-blue-700 font-bold'>Phone</div>
                                <div className='text-gray-500'>+20104567893</div>
                            </div>
                        </div>

                        <div className='flex items-center mb-8'>
                            <div className='bg-blue-100 text-blue-700 font-bold text-lg rounded-lg p-3'>
                                <VscMail/>
                            </div>
                           
                            <div className='ms-3'>
                                <div className='text-xl text-blue-700 font-bold'>Email</div>
                                <div className='text-gray-500'>marwanmagdy200@gmail.com</div>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <div className='bg-blue-100 text-blue-700 text-lg rounded-lg p-3'>
                                <SlLocationPin/>
                            </div>
                           
                            <div className='ms-3'>
                                <div className='text-xl text-blue-700 font-bold'>Head Office</div>
                                <div className='text-gray-500'>Baghdad, st، Moharam Bek, Alexandria Governorate</div>
                            </div>
                        </div>
                       
                </div>

               
                    <div className=" w-[450px] flex flex-col gap-6 p-10  rounded-md border bg-white shadow-xl divide-y mb-16">
                        <div className="flex items-center gap-2">

                            <div className="flex flex-col justify-center">
                                <h2 className="text-2xl font-extrabold text-blue-700 mb-4">
                                    How Can We Help ?
                                </h2>
                                <p className="text-sm text-gray-500">
                                    We Would Help You Stay On Track
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 pt-6">
                            <InputFloatingLabel item={{ label: "Name", id: "Name" }} />

                            <InputFloatingLabel item={{ label: "email address", id: "email_address", type: "email" }} />

                            <textarea id="biography" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none dark:text-white dark:border-gray-600 resize-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Description"></textarea>
                            <label
                                htmlFor="floating_outlined"
                                className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[1] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Description
                            </label>

                            <Button type="primary">
                                <p>Submit</p>
                                <HiArrowLongRight />
                            </Button>
                        </div>
                    </div>
              

            </div>

  
        </div>

    </>
}
