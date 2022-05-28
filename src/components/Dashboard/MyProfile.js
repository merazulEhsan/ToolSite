import React from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [updateProfile, updating, updatEerror] = useUpdateProfile(auth);


    const handleProfile =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const phone= e.target.phone.value;

        updateProfile({displayName: name, phoneNumber: phone})

    }
    console.log(user);
  return (
    <div>
        <h1 className="text-3xl text-center text-blue-600 font-bold ">My Profile</h1>
      
      <div>
        <form
          onSubmit={handleProfile}
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
              className="input input-bordered input-accent w-full max-w-md"
            />

            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              value={user?.email}
              readOnly
              placeholder="Email"
              className="input input-bordered input-accent w-full max-w-md"
            />

            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              name="phone"
              type="phone"
              value={user?.phoneNumber}
              placeholder="phone"
              className="input input-bordered input-accent w-full max-w-md mb-4"
            />

            <button className="btn btn-success text-white">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
