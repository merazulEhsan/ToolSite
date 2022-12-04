import React from "react";
import quote from '../../images/quote.png'


const Review = ({ review }) => {
  const { name, email, message } = review;

  return (
    <div className="shadow-lg h-60 p-4 rounded">
    <p className="text-justify mb-3 text-inherit">{message.length > 200 ? message.slice(0,200) + '.........':message }</p>

    <div className="">
    <div className=" w-1/5 float-left">
      <img src={quote} alt="" />
    </div>

    <p className="text-cyan-400 font-semibold">{name}</p>
    <p className="hover:cursor-pointer hover:text-blue-700">{email}</p>
    </div>
    </div>
  );
};

export default Review;
