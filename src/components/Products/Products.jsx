import React from 'react';
import Product from '../Product/Product';

const Products = () => {
    const productsData = [
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
    return (
        <div className='bg-blue-100'>
            <h2 className='uppercase text-4xl text-center py-10 font-semibold'>Our Products <b>Shop</b></h2>
            <div className='mx-24 grid grid-cols-4 gap-6 mb-20'>
                {
                    productsData.map((product, i) => <Product key={i} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;