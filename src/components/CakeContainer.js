import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes: {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>

      <p>Message :- {props.message}</p>
    </div>
  );
}

// step1 for getting state from redux store & return object; it add these property to the component props(other props will be there)
const mapStateToProps = (state, ownProps) => {
  return {
    numOfCakes: state.cake.numOfCakes,
    message: ownProps.message ? "This message is shown." : "",
  };
};

//step2 for dispatch action on event handler to reducers (same like above)
const mapDispatchToProps = (dispatch) => {
  return { buyCake: () => dispatch(buyCake()) };
};

// connect step1 & step2 function to react componnet by using connect function or connect HOC component from  react-redux

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
