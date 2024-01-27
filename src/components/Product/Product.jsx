import Aos from 'aos';
import React from 'react';
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Product = ({ product }) => {
    Aos.init()
    const { type, price, review, quantity, category, srcURL, Name } = product

    return (
        <section className='mx-auto w-fit p-12'>

            {/* card */}
            <div className="card w-72 shadow-xl h-fit group"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"

            >
                <div className='relative overflow-hidden border border-gray-300 rounded-2xl'>
                    <figure><img src={srcURL} className='h-60 w-full rounded-t-xl' alt="dress" /></figure>
                    <div className='py-4 px-6'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-sm text-gray-400'>{type}</h2>
                            <span><CiHeart /></span>
                        </div>
                        <p className='text-lg font-semibold'>{Name}</p>
                        <p className='font-semibold'>{price}</p>
                    </div>
                    <div className='absolute h-full w-full bg-black/20 flex justify-center items-center -bottom-100  group-hover:bottom-0 opacity-10 group-hover:opacity-100 group-hover:rounded-2xl transition-all duration-100' style={{ backgroundImage: `url(${srcURL})`, backgroundSize: "cover" }}>
                        <Link className='bg-orange-400 text-white py-2 px-5 rounded-lg '>Add to Cart</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;