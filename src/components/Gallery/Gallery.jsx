import React from 'react';

import PhotoAlbum from "react-photo-album";

const Gallery = () => {
    const photos = [
        { src: "https://img.freepik.com/free-photo/bride-bridesmaids-red-dresses-pose-outside-old-wet-street_8353-7114.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=ais", width: 800, height: 600 },
        { src: "https://img.freepik.com/free-photo/young-woman-celebrating-her-quinceanera_23-2149449193.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=ais", width: 1600, height: 900 },
        { src: "https://img.freepik.com/free-photo/bride-bridesmaids-with-wedding-bouquets-sunny-wedding-reception-joyful-moment_8353-5872.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=ais", width: 1600, height: 900 },
        { src: "https://img.freepik.com/free-photo/young-brunette-girl-pink-skirt-white-blouse-posed-indoor-against-large-decorated-wreath_627829-13894.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=ais", width: 1600, height: 900 },
        { src: "https://img.freepik.com/free-photo/young-woman-celebrating-her-quinceanera_23-2149449193.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=ais", width: 1600, height: 900 },
        { src: "https://img.freepik.com/free-photo/beautiful-woman-long-red-dress-walks-around-city-with-her-husband_1157-13368.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=ais", width: 600, height: 900 },
        { src: "https://img.freepik.com/premium-photo/indian-man-traditional-wear-kurta-pyjama-cloths-male-fashion-model-sherwani-posing-standing-against-brown-grunge-background-selective-focus_466689-45386.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=ais", width: 1600, height: 900 },
        { src: "https://img.freepik.com/free-photo/handsome-man-with-stylish-beard-hair-dressed-vintage-red-suit-posing-near-retro-sports-motorbike-men-s-clothing-store_613910-19647.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=ais", width: 1600, height: 900 },
        { src: "https://img.freepik.com/free-photo/cute-stylish-children-posing_155003-1990.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=ais", width: 700, height: 900 },
        { src: "https://img.freepik.com/premium-photo/little-girls-have-fun-play-celebrate-their-birthday-eat-cakes-blow-bubbles-girls-beautiful-dresses-blue-wall-pose-have-fun_86390-2718.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=ais", width: 1600, height: 900 },
        { src: "https://img.freepik.com/premium-photo/two-girls-bright-spring-clothes-olive-colored-background_86390-5973.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=ais", width: 1600, height: 900 },
        { src: "https://img.freepik.com/free-photo/group-kids-spending-time-after-school-together-handsome-friends-resting-after-classes-before-start-doing-homework_155003-27018.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=ais", width: 1600, height: 900 },
        { src: "https://img.freepik.com/free-photo/group-children-wearing-stylish-cloth-sitting-bench-posing-isolated-grey-studio-background_155003-45973.jpg?size=626&ext=jpg&ga=GA1.1.714375242.1704945396&semt=ais", width: 1600, height: 900 },
    ];
    return (
        <div className='w-[90%] mx-auto my-20'>
            <h2 className='text-3xl uppercase text-center pb-10 text-sky-600'>Our Rich <b className='text-green-700'>Gallery</b></h2>
            <PhotoAlbum layout="columns" photos={photos} />



        </div>
    );
};

export default Gallery;