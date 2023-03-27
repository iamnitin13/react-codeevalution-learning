import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = { post: {}, isLoading: true, error: "" };

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "success":
      return { post: payload, isLoading: false, error: "" };
    case "error":
      return { post: {}, isLoading: false, error: payload };
    default:
      return state;
  }
};

function FetchingReducerEffectHook() {
  const [fetchPost, dispatchPost] = useReducer(reducer, initialState);
  useEffect(() => {
    return async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        dispatchPost({ type: "success", payload: response.data });
      } catch (error) {
        dispatchPost({ type: "error", payload: "Something went wrong" });
      }
    };
  }, []);

  return (
    <div>
      {fetchPost.isLoading ? (
        <h3>Loading....</h3>
      ) : (
        <ul>
          <li>
            <h4>{fetchPost.post.title}</h4>
            <p>
              <i>{fetchPost.post.body}</i>
            </p>
          </li>
        </ul>
      )}
      {fetchPost.error && (
        <p>
          <b>{fetchPost.error}</b>
        </p>
      )}
    </div>
  );
}

export default FetchingReducerEffectHook;
