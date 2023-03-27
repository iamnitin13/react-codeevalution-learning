import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../redux/users/userReducer";

function UserList() {
  const dispatch = useDispatch();
  const userRes = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      {userRes.isLoading ? (
        <h2>Loading...</h2>
      ) : userRes.error ? (
        <span>{userRes.error}</span>
      ) : (
        userRes.users.length && (
          <div>
            <h3>UserList</h3>
            <ul>
              {userRes.users.map((user) => {
                return (
                  <li key={user.id}>
                    <span>Name:{user.name} </span>
                    <span>UserName: {user.userName}</span>
                    <span>Email: {user.email}</span>
                    <span>
                      Address:
                      {user.address.street}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        )
      )}
    </div>
  );
}

export default UserList;
