import React from 'react';
import womandress from '../../assets/images/sliders/collectiongrid/womandress.png'
import mancollection from "../../assets/images/sliders/collectiongrid/mancollection.png"
import kidzcollection from "../../assets/images/sliders/collectiongrid/kidzcollection.png"
import giftcard from "../../assets/images/sliders/collectiongrid/giftcard.png"
import { Link } from 'react-router-dom';
import AOS from 'aos';

const CollectionGrid = () => {
    // ..
    AOS.init();
    return (
        <section className='mx-32 my-32 ' >
            <div className='lg:flex lg:flex-row sm:flex-col justify-between items-stretch sm:gap-2 lg:gap-6'>
                <div className='lg:w-1/2 flex justify-center items-around bg-gray-200 sm:w-fit' data-aos="fade-right" >
                    <div className='flex lg:flex-row sm:flex-col lg:justify-between sm:justify-center items-end  '>
                        <div className='lg:absolute sm:relative text-left pl-6 mb-10'>
                            <p className='text-xs mb-2'>Trending Products</p>
                            <h2 className='text-2xl uppercase font-semibold mb-2'> <b>women</b> collection</h2>
                            <Link className='border-b-2 border-black py-1'><button>Shop Now</button></Link>
                        </div>
                        <img src={womandress} className='lg:h-96 sm:h-42 sm:ml-2 lg:ml-24' alt="" />
                    </div>
                </div>
                <div className='lg:w-1/2 sm:w-screen  flex flex-col justify-between gap-6 '
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                    data-aos="fade-left">
                    <div className='flex justify-between items-end bg-blue-100 py-10 gap-6 px-10 '
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <div className='lg:flex sm:flex-col justify-center items-start sm:items-center lg:gap-2 sm:gap-6'>
                            <p className='text-xs mb-2'>Trending Products</p>
                            <h2 className='font-semibold uppercase text-2xl mb-2'><b>menz</b> collection</h2>
                            <Link className='border-b-2 border-black py-1'><button>Shop Now</button></Link>
                        </div>
                        <img src={mancollection} className='w-36 h-40' alt="" />
                    </div>
                    <div className='flex lg:flex-row sm:flex-col lg:justify-between sm:justify-center items-center gap-6 '>
                        <div className='w-1/2 lg:flex lg:flex-row sm:flex-col justify-between items-end py-12 bg-orange-100'>
                            <div className='flex flex-col justify-between lg:absolute sm:relative items-start pl-4'>
                                <p className='text-xs'>Trending Products</p>
                                <h2 className='text-md font-semibold my-2 uppercase'><b>kidz</b> collection</h2>
                                <Link className='border-b border-black text-sm'><button>Shop Now</button></Link>
                            </div>
                            <img src={kidzcollection} className='w-20 h-32 lg:ml-40 sm:ml-4 ' alt="" />
                        </div>
                        <div className='lg:w-1/2 sm:w-full flex lg:flex-row sm:flex-col lg:justify-between sm:justify-center lg:items-end sm:items-center py-12 bg-green-100'>
                            <div className='flex flex-col justify-between lg:absolute sm:relative items-start pl-4'>
                                <p className='text-xs'>Special Items</p>
                                <h2 className='text-md font-semibold my-2 uppercase'><b>Gift</b> Cards</h2>
                                <Link className='border-b border-black text-sm'><button>Shop Now</button></Link>
                            </div>
                            <img src={giftcard} className='w-20 h-32 lg:ml-40 sm:ml-4' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default CollectionGrid;