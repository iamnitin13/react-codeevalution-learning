import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParam] = useSearchParams();
  // it is like useState hook instead of storing state in memory it store in the url
  // it return a pair first one is object & second is to setparams
  const showFilterUserText = searchParams.get("filter") === "active";
  return (
    <div>
      <Link to="/users/1">User1</Link>
      <Link to="/users/2">User2</Link>
      <Link to="/users/3">User3</Link>
      <Outlet />

      <hr />
      <button onClick={() => setSearchParam({ filter: "active" })}>
        Active Users
      </button>
      <button onClick={() => setSearchParam({})}>Reset Filter</button>

      <div>
        {showFilterUserText ? (
          <h2>Showing Active Users</h2>
        ) : (
          <h2>Showing All Users</h2>
        )}
      </div>
    </div>
  );
}

export default Users;
