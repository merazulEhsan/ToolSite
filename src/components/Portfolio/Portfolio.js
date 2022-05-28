import React from "react";
import img from '../../images/IMG20210622150113_00.jpg'

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-5xl mb-10 mt-5 font-bold text-center border border-x-8">
        Short <span className=" text-red-600">Profile</span>
      </h1>
      <div className=" w-2/3 mx-auto">
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row">
            <img
              src={img}
              class="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
            <div>
              <h1 class="text-4xl font-bold text-yellow-700">Merazul Ehsan Sowad</h1>
              <p class="py-6 text-lg font-semibold">
              
Department of Software Engineering <br />
Faculty of Science and Information Technology <br />
Daffodil International University <br />
Cell-Phone: 01701-018652 <br />
E-mail: merazul35-2755@diu.edu.bd <br />
              </p>
              <a href="https://sites.google.com/diu.edu.bd/sowad-portfolio/home" target='_blank' class="btn btn-accent font-semibold" rel="noreferrer">Google Site</a>
            </div>
          </div>
        </div>
      </div>

      <div>
          <h1 className="text-5xl mb-10 mt-10 text-gray-500 font-bold text-center">Live Project Links</h1>

          <div className="text-center">
          <a href="https://fresh-mart-958e0.firebaseapp.com/" target='_blank' class="btn btn-wide mr-10 btn-info" rel="noreferrer">Fresh Mart</a>
          <a href="https://wilde-lodge.firebaseapp.com/" target='_blank' class="btn btn-wide btn-accent" rel="noreferrer">Wilde Lodge</a>
          </div>
      </div>
    </div>
  );
};

export default Portfolio;
