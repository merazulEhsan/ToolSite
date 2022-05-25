import React from 'react';
import useProduct from '../../hooks/useProduct';
import Carousel from './Carousel';
import Products from './Products';

const Home = () => {
    const [products] = useProduct();
    console.log(products);
    return (
        <div>
            <Carousel></Carousel>
            <div className=" mt-20 card grid gap-10  md:grid-cols-2 lg:grid-cols-3 bg-base-100 p-10">
            {
                products.map(product => <Products key={product._id} product = {product}></Products>)
            }
            </div>
        </div>
    );
};

export default Home;