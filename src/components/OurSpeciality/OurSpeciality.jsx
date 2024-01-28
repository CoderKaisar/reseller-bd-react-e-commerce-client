import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { SlEarphonesAlt } from "react-icons/sl";
import { SiFsecure } from "react-icons/si";

const OurSpeciality = () => {
    return (
        <div className='mx-auto my-20 bg-pink-100 lg:px-52 sm:px-4 py-30 '>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6 py-20'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <span className='mb-6'><TbTruckDelivery className='text-5xl text-green-500' /></span>
                    <h2 className='text-xl font-semibold'>Fast & Free Delivery</h2>
                    <p className='text-sm'>Free delivery over $600</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <span className='mb-6'><SlEarphonesAlt className='text-5xl text-green-500' /></span>
                    <h2 className='text-xl font-semibold'>24/7 CUSTOMER SUPPORT</h2>
                    <p className='text-sm'>Friendly 24/7 customer support</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <span className='mb-6'> <SiFsecure className='text-5xl text-green-500' /></span>
                    <h2 className='text-xl font-semibold'>MONEY BACK GUARANTEE</h2>
                    <p className='text-sm'>We return money within 30 days</p>
                </div>
            </div>
        </div>

    );
};

export default OurSpeciality;