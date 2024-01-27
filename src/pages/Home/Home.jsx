import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import CollectionGrid from '../../components/CollectionGrid/CollectionGrid';
import Products from '../../components/Products/Products';
import DealOfWeek from '../../components/DealOfWeek/DealOfWeek';
import ProductsOnDiscount from '../../components/ProductsOnDiscount/ProductsOnDiscount';
import Gallery from '../../components/Gallery/Gallery';
import OurSpeciality from '../../components/OurSpeciality/OurSpeciality';

const Home = () => {
    return (
        <div>
            <Carousel />
            <CollectionGrid />
            <DealOfWeek />
            <Products />
            <OurSpeciality />
            <ProductsOnDiscount />
            <Gallery />
        </div>
    );
};

export default Home;