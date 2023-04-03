import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const { loading, users, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <span>{error}</span>
      ) : (
        users.length && (
          <div>
            <h3>UserList</h3>
            <ul>
              {users.map((user) => {
                return (
                  <li key={user}>
                    <span>UserId: {user}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default UserView;
