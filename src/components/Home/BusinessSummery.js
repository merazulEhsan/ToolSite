import React from "react";
import image from '../../images/summery.jpg'
const BusinessSummery = () => {
  return (
    <div className="m-10 shadow-lg rounded-lg">
      <div class="hero min-h-screen bg-base-200 p-6">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={image}
            alt=''
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold mb-2 text-stone-500">Business Summery</h1>
            <h1 class="text-5xl font-bold text-yellow-500">Cordless Tools Manufacturer</h1>
            <p class="py-6">
              We have been specialized in the design and manufacture of cordless
              tools for more than 10 years. All of our products can be used in
              one 20V Max Li-ion battery. Most of products have got certificates
              such as UL/ETL/GS/CE, and mainly exported to North American and
              European markets. With professional R&D engineers, skillful
              workers, strict quality control system, and high efficiency
              management, we can ensure that each product is well made with
              correct specification and competitive price.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
