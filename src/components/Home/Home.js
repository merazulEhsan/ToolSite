import React from 'react';
import useProduct from '../../hooks/useProduct';
import Carousel from './Carousel';
import Products from './Products';

const Home = () => {
    const [products] = useProduct();
    return (
        <div>
            <Carousel></Carousel>
            <section className='mt-14'>
                <h1 className='text-center text-5xl font-extrabold font-serif'>Our Products</h1>
            <div className=" mt-10 card grid gap-14  md:grid-cols-2 lg:grid-cols-3 bg-base-100 p-10">

            {
                products.map(product => <Products key={product._id} product = {product}></Products>)
            }
            </div>
            </section>
        </div>
    );
};

export default Home;