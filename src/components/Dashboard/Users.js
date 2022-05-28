import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const Users = () => {
    const {
        data: users,
        isLoading,
        refetch,
      } = useQuery("users", () =>
        fetch(`https://tranquil-dawn-10499.herokuapp.com/user`).then((res) =>
          res.json()
        )
      );

      if(isLoading){
          return <Loading></Loading>
      }

      const makeAdmin =()=>{
          
      }
    return (
        
            <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL.No</th>
              <th>Email</th>
              <th>Role</th>
              <th>Remove</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <tr>
                <td>{index+1}</td>
                <td>{user.email}</td>
                
                <td><button onClick={makeAdmin} className="btn btn-xs btn-success text-white">Make Admin</button></td>
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
            ))}
          </tbody>
        </table>
        </div>
    );
};

export default Users;