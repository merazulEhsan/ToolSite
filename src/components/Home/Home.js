import React from 'react';
import useProduct from '../../hooks/useProduct';
import useReviews from '../../hooks/useReviews';
import BusinessSummery from './BusinessSummery';
import Carousel from './Carousel';
import Contact from './Contact';
import Products from './Products';
import Review from './Review';

const Home = () => {
    const [products] = useProduct();
    const [review] = useReviews();
    return (
        <div>
            <Carousel></Carousel>
            <section className='mt-14'>
                <h1 className='text-center text-5xl font-extrabold font-serif'>Our Products</h1>
            <div className=" mt-10 card grid gap-14  md:grid-cols-2 lg:grid-cols-3 bg-base-100 p-10">

            {
                products.slice(0,6).map(product => <Products key={product._id} product = {product}></Products>)
            }
            </div>
            </section>
            <BusinessSummery></BusinessSummery>

            <section className=' bg-gray-300 shadow-lg rounded-lg m-10 p-5 mb-10 mt-10'>
                <h1 className='text-center text-3xl font-bold'>Customer Reviews</h1>
            <div className=" grid gap-10  md:grid-cols-2 lg:grid-cols-3 m-10">
                {
                    review.map(review => <Review key={review._id} review={review}></Review>).reverse().slice(0,6)
                }
                </div>
            </section>
            <Contact></Contact>
        </div>
    );
};

export default Home;