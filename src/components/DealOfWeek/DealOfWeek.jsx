import React from 'react';
import { IoRemoveOutline } from "react-icons/io5";
// import AOS from 'aos';

const DealOfWeek = () => {
    // AOS.init();
    return (
        <div
            className='grid lg:grid-cols-2 sm:grid-cols-1 sm:content-center sm:gap-10 bg-amber-100 lg:gap-20 sm:gap-10 py-20 lg:pl-32 sm:pl-10 sm:mx-auto sm:rounded-xl sm:gap-10'
        // data-aos="fade-up"
        // data-aos-offset="200"
        // data-aos-delay="50"
        // data-aos-duration="1000"
        // data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        // data-aos-once="false"
        // data-aos-anchor-placement="top-center"

        >
            <div className='flex flex-col justify-center items-start '>
                <div className='flex jusitfy-start items-center'>
                    <span><IoRemoveOutline className='text-orange-400 lg:text-4xl sm:text-xl w-42' /></span> <p className='text-lg text-orange-400'>Deal of the week</p>
                </div>
                <h2 className='lg:text-4xl sm:text-md uppercase py-6'><b>Collection</b> of the Week</h2>
                <button className='border-b-2 border-blue-300'>Shop Now</button>
            </div>

            <div className='lg:w-9/12 sm:w-2/3  h-76 ' >
                <img className='rounded-2xl' src="https://1.bp.blogspot.com/-K2OTtt4vUHA/YDIDbFBT6TI/AAAAAAAAh-0/2J6DGn-OZ-gOz8yWhui2cIdas99opxzzgCLcBGAsYHQ/s16000-rw/Cute%2Band%2BBeautiful%2BBridal%2BMakeup%2Band%2BDress%2BDP%2BIdeas%2Bfor%2BGirls%2B2021.jpg" alt="" />
            </div>
        </div >
    );
};

export default DealOfWeek;