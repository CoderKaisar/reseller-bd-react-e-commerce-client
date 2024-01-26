import React from 'react';
import womandress from '../../assets/images/sliders/collectiongrid/womandress.png'
import mancollection from "../../assets/images/sliders/collectiongrid/mancollection.png"
import kidzcollection from "../../assets/images/sliders/collectiongrid/kidzcollection.png"
import giftcard from "../../assets/images/sliders/collectiongrid/giftcard.png"
import { Link } from 'react-router-dom';

const CollectionGrid = () => {
    return (
        <section className='mx-32 my-32 '>
            <div className='flex justify-between items-stretch  gap-6'>
                <div className='w-1/2 flex justify-center items-around bg-gray-200 '>
                    <div className='flex justify-between items-end '>
                        <div className='absolute text-left pl-6 mb-10'>
                            <p className='text-xs mb-2'>Trending Products</p>
                            <h2 className='text-2xl uppercase font-semibold mb-2'> <b>women</b> collection</h2>
                            <Link className='border-b-2 border-black py-1'><button>Shop Now</button></Link>
                        </div>
                        <img src={womandress} className='h-96 ml-24' alt="" />
                    </div>
                </div>
                <div className='w-1/2 flex flex-col justify-between gap-6 '>
                    <div className='flex justify-between items-end bg-blue-100 py-10 gap-6 px-10 ' >
                        <div className='flex flex-col justify-center items-start '>
                            <p className='text-xs mb-2'>Trending Products</p>
                            <h2 className='font-semibold uppercase text-2xl mb-2'><b>menz</b> collection</h2>
                            <Link className='border-b-2 border-black py-1'><button>Shop Now</button></Link>
                        </div>
                        <img src={mancollection} className='w-36 h-40' alt="" />
                    </div>
                    <div className='flex justify-between items-center gap-6 '>
                        <div className='w-1/2 flex justify-between items-end py-12 bg-orange-100'>
                            <div className='flex flex-col justify-between absolute items-start pl-4'>
                                <p className='text-xs'>Trending Products</p>
                                <h2 className='text-md font-semibold my-2 uppercase'><b>kidz</b> collection</h2>
                                <Link className='border-b border-black text-sm'><button>Shop Now</button></Link>
                            </div>
                            <img src={kidzcollection} className='w-20 h-32 ml-40 ' alt="" />
                        </div>
                        <div className='w-1/2 flex justify-between items-end py-12 bg-green-100'>
                            <div className='flex flex-col justify-between absolute items-start pl-4'>
                                <p className='text-xs'>Special Items</p>
                                <h2 className='text-md font-semibold my-2 uppercase'><b>Gift</b> Cards</h2>
                                <Link className='border-b border-black text-sm'><button>Shop Now</button></Link>
                            </div>
                            <img src={giftcard} className='w-20 h-32 ml-40' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollectionGrid;