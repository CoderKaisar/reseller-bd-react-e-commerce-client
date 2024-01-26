import React from 'react';
import { IoRemoveOutline } from "react-icons/io5";


const DealOfWeek = () => {
    return (
        <div className='py-20 pl-32 bg-amber-100 my-10 flex justify-between items-center'>
            <div>
                <div className='flex jusitfy-start items-center'>
                    <span><IoRemoveOutline className='text-orange-400 text-4xl w-42' /></span> <p className='text-lg text-orange-400'>Deal of the week</p>
                </div>
                <h2 className='text-4xl uppercase py-6'><b>Collection</b> of the Week</h2>
                <button className='border-b-2 border-blue-300'>Shop Now</button>
            </div>

            <img className='mr-20 h-96' src="https://cdn.shopify.com/s/files/1/0050/8402/0810/files/dress1_9f25c176-1cc8-4d8d-884e-daa04410f137_600x600.jpg?v=1697434769" alt="" />
        </div>
    );
};

export default DealOfWeek;