import React, { useRef } from 'react';
import Slider from 'react-slick';
import Stock from './Stock';
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";
import { HiOutlineTrendingDown } from "react-icons/hi";
import Aos from 'aos';

const ProductsOnDiscount = () => {
    Aos.init()
    const stocks = [
        {
            Name: "T-shirt",
            type: "dress-man",
            price: "$32",
            review: "2k",
            quantity: 24,
            category: "new arrival",
            srcURL: "https://img.freepik.com/premium-psd/tshirt-mockup-design-psd_521057-4873.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=sph"
        },
        {
            Name: "Jacket",
            type: "dress-man",
            price: "$84",
            review: "2k",
            quantity: 30,
            category: "new arrival",
            srcURL: "https://img.freepik.com/premium-photo/man-wearing-tee-shirt-with-ukraine-flag-it_220770-6426.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=sph"
        },
        {
            Name: "Jursey",
            type: "dress-man",
            price: "$29",
            review: "2k",
            quantity: 15,
            category: "trending",
            srcURL: "https://img.freepik.com/free-vector/customizable-athletic-jersey-textures-highquality-athletic-shirt-textures_29096-4585.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=sph"
        },
        {
            Name: "New Tops",
            type: "dress-women",
            price: "$32",
            review: "2k",
            quantity: 24,
            category: "new arrival",
            srcURL: "https://img.freepik.com/free-photo/stylish-woman-summer-outfit-isolated-posing-fashion-trend-isolated_285396-463.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=ais"
        },
        {
            Name: "Two Part Frock",
            type: "dress-woman",
            price: "$32",
            review: "2k",
            quantity: 24,
            category: "Trending",
            srcURL: "https://img.freepik.com/free-photo/funny-crazy-glamor-stylish-sexy-smiling-beautiful-blond-young-woman-model-pink-hipster-clothes-studio_158538-13287.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=ais"
        },
        {
            Name: "Kidz Frock",
            type: "dress-kidz",
            price: "$64",
            review: "2k",
            quantity: 24,
            category: "new arrival",
            srcURL: "https://img.freepik.com/free-photo/portrait-pretty-little-girl-pink-dress_158538-2067.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=ais"
        },
        {
            Name: "Kidz Shirt with Pant",
            type: "dress-kidz",
            price: "$34",
            review: "2k",
            quantity: 24,
            category: "Stock",
            srcURL: "https://img.freepik.com/free-photo/girl-wearing-two-tone-pajamas_53876-97846.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=ais"
        },
        {
            Name: "Bridal Party Dress",
            type: "dress-woman",
            price: "$95",
            review: "2k",
            quantity: 14,
            category: "new-arrival",
            srcURL: "https://img.freepik.com/free-photo/bride-her-wedding-dress_144627-15136.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=ais"
        },
    ]
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };


    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <section>
            <div className='flex justify-center items-center gap-4'>
                <h2 className='text-4xl font-bold text-center uppercase py-6 text-green-700 underline'>Products on discount</h2>
                <span><HiOutlineTrendingDown className='text-4xl text-red-400' /></span>
            </div>
            <div className='mx-auto px-16' data-aos="zoom-in">
                <Slider

                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}>
                    {
                        stocks.map((stock, i) => <Stock key={i} stock={stock} />)
                    }
                </Slider>
            </div>
            <div className='flex justify-center items-center gap-6 mb-10'>
                <button className='bg-orange-300 text-white rounded-full p-2' onClick={previous}>
                    <GrCaretPrevious />
                </button>
                <button className='bg-orange-300 text-white rounded-full p-2 ' onClick={next}>
                    <GrCaretNext />
                </button>
            </div>
        </section >
    );
};

export default ProductsOnDiscount;