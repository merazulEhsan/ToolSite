import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [error, setError] = useState([]);

  //fetch data from products
  const {
    data: singleProduct,
    isLoading,
    refetch,
  } = useQuery("singleProduct", () =>
    fetch(`http://localhost:5000/products/${id}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleBookOrder = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const img = singleProduct.img;
    const pId = singleProduct.id;
    const product_name = e.target.product_name.value;
    const orderQuantity = parseInt(e.target.quantity.value);
    const unit_price = parseInt(singleProduct.price);
    const price = parseInt(unit_price) * parseInt(orderQuantity);

    //create orders
    if (
      orderQuantity >= singleProduct.min_order &&
      orderQuantity <= singleProduct.quantity
    ) {
      const url = `http://localhost:5000/order`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          address,
          phone,
          product_name,
          price,
          orderQuantity,
          img,
          pId,
          unit_price,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged === true) {
            toast.success("Order Placed Successfilly");
          }
          e.target.reset();
        });

      //update products quantity after make a order
      const quantity =
        parseInt(singleProduct.quantity) - parseInt(orderQuantity);
      const url2 = `http://localhost:5000/products/${id}`;
      fetch(url2, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify({ quantity }),
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
        });
    } else {
      setError("make order between min_order and stock quantity");
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row lg:ml-32 lg:mr-32">
          <img
            src={singleProduct.img}
            alt=""
            className="lg:max-w-sm rounded-lg shadow-2xl"
          />
          <div className="text-justify">
            <h1 className="lg:text-5xl text-3xl font-bold">
              {singleProduct.name}
            </h1>
            <p className="py-4">{singleProduct.description}</p>
            <p className="py-2">Price: Tk.{singleProduct.price}</p>
            <p className="py-2">Quantity: {singleProduct.quantity} pcs</p>
            <p className="py-2 mb-3">
              Min-Order: {singleProduct.min_order} pcs
            </p>
          </div>
        </div>
      </div>

      {/* order form */}
      <section>
        <div>
          <div className="divider m-0 mt-10"></div>
          <h1 className="text-4xl text-center py-5 font-bold">
            Booked Your Product!
          </h1>
          <div className="divider m-0"></div>
        </div>

        <form
          onSubmit={handleBookOrder}
          className="card w-80 md:w-2/5 bg-base-100 shadow-xl mx-auto card-body items-center text-center mt-4"
        >
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={user?.displayName}
              readOnly
              className="input input-bordered input-accent w-full max-w-md"
            />

            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              value={user?.email}
              placeholder="Email"
              readOnly
              className="input input-bordered input-accent w-full max-w-md"
            />

            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              name="product_name"
              type="text"
              value={singleProduct?.name}
              readOnly
              placeholder="Product Name"
              className="input input-bordered input-accent w-full max-w-md"
            />

            <label className="label">
              <span className="label-text">Min_Order</span>
            </label>
            <input
              name="min_order"
              type="number"
              placeholder="Min-Order"
              readOnly
              value={singleProduct?.min_order}
              className="input input-bordered input-accent w-full max-w-md"
            />

            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              name="address"
              type="text"
              placeholder="Address"
              className="input input-bordered input-accent w-full max-w-md"
            />

            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered input-accent w-full max-w-md"
            />

            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              name="quantity"
              type="number"
              placeholder="Quantity"
              required
              className="input input-bordered input-accent w-full max-w-md"
            />
            <label className="label">
              <span className="label-text-alt">{error ? error : ""}</span>
            </label>

            <button className="btn btn-success text-white">Place Order</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Purchase;
