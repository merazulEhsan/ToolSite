import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { email } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success("Make Admin Successfull");
      });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{user.email}</td>

      <td>
        {user.roll !== "admin" ? (
          <button
            onClick={makeAdmin}
            className="btn btn-xs btn-success text-white"
          >
            Make Admin
          </button>
        ) : (
          <span className="font-semibold text-xs flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="green"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            ADMIN
          </span>
        )}
      </td>

      <td>
        <label
          htmlFor="order-delete"
          // onClick={() => setOrderDelete(order)}
          tabIndex="0"
        >
          <FontAwesomeIcon
            className=" p-1 cursor-pointer btn modal-button text-red-600 btn-ghost btn-circle btn-xs"
            size="xs"
            icon={faTrash}
          />
        </label>
      </td>
    </tr>
  );
};

export default UserRow;
