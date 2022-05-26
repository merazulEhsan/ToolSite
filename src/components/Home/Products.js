import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ product }) => {
  const {_id, name, img, description, price, quantity, min_order } = product;
  const navigate = useNavigate();

  const handleBuyNow= (id) =>{
      navigate(`/purchase/${id}`)
  }

  return (
    <div className="shadow-lg rounded-xl">
      <figure>
        <img className=" h-44 rounded-t-xl" src={img} alt="Shoes" />
      </figure>
      <div className="card-body text-justify">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p className="font-semibold">Price: {price}</p>
        <p className="font-semibold">Quantity: {quantity}</p>
        <p className="font-semibold">Minimum Order: {min_order}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleBuyNow(_id)} className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
