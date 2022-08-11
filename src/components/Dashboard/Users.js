import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`https://tranquil-dawn-10499.herokuapp.com/user`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="overflow-x-auto w-full ">
      <table className="table table-zebra w-full ">
        <thead>
          <tr>
            <th>SL.No</th>
            <th>Email</th>
            <th>Role</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserRow
              key={user._id}
              user={user}
              refetch={refetch}
              index={index}
            ></UserRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
