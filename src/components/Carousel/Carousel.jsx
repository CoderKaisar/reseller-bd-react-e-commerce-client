import React from 'react';
import Slider from 'react-slick';
import backSliderImg from "../../assets/images/sliders/slideshow-pattern.png"
import man from "../../assets/images/man.png"
import woman from "../../assets/images/woman.png"
import toddler from "../../assets/images/sliders/toddler..png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/css/Carousel.style.css'
import Aos from 'aos';

const Carousel = () => {
    Aos.init()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2500,
        autoplay: true,
    };
    const sliderData = [
        {
            title: "Menz Zone",
            text: "An exclusive selection of the mens's seasonal collection",
            bgImage: backSliderImg,
            src: man,
        },
        {
            title: "Kidz Gallery",
            text: "All patterns of kidz collection",
            bgImage: backSliderImg,
            src: toddler,
        },
        {
            title: "Woman Summary",
            text: "An exclusive selection of the women special",
            bgImage: backSliderImg,
            src: woman
        }

    ]
    return (
        <div className='bg-amber-100 w-full mx-auto' style={{
            backgroundImage: `url(${backSliderImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            <Slider {...settings} >
                {
                    sliderData.map((data, index) =>
                        <div key={index}
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-center"
                        >
                            <div className='flex justify-between items-center h-screen'
                            >
                                <div className='w-1/2 text-left flex justify-center items-center py-20' >
                                    <div className='flex flex-col justify-start items-start text-gray-600 gap-6 pl-12 text-amber-800 text-black'>
                                        <h2 className='text-6xl font-semibold uppercase '>{data.title}</h2>
                                        <p className='text-xl'>{data.text}</p>
                                        <button className='bg-blue-400 rounded-lg text-white px-2 py-2 hover:bg-orange-300'>Discover More</button>

                                    </div>
                                </div>
                                <div className='w-1/2 ' >
                                    <img className='h-[800px] w-[800px]' src={data.src} alt="" />
                                </div>
                            </div>
                        </div>)
                }
            </Slider >
        </div>
    );
};

export default Carousel;