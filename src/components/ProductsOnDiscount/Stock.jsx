import Aos from 'aos';
import React from 'react';
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Stock = ({ stock }) => {
    Aos.init()
    const { Name, type, price, review, quantity, category, srcURL } = stock
    return (
        <section className='mx-auto h-fit w-fit p-4 mb-6'>
            <div className="card w-60 shadow-xl h-70 group border border-orange-400 rounded-xl"
                data-aos="zoom-out-up"
            >
                <div>
                    <figure><img src={srcURL} className='h-40 w-64 rounded-t-xl' alt="dress" /></figure>
                    <div className='py-2 px-4 bg-blue-200'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-xs text-gray-400'>{type}</h2>
                            <span><CiHeart /></span>
                        </div>
                        <div className='flex justify-between items-around gap-4'>
                            <p className='text-sm font-semibold'>{Name.slice(0, 10)}</p>
                            <div className='flex gap-2 justify-center items-center'>
                                <p className='text-xs line-through text-red-700'>($41)</p>
                                <p className='font-semibold text-xl'>{price}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link className='bg-orange-400 text-white text-center py-2 rounded-b-lg hover:bg-orange-600 '>Add to Cart</Link>
            </div>
        </section>
    );
};

export default Stock;