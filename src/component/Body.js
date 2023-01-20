import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators} from "../state/index"
// import { bindActionCreators } from "redux";

const Body = () => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h2 className="mx-4 my-3">Buy Item</h2>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          dispatch(actionCreators.withdrawMoney(100));
        }}
      >
        -
      </button>
      Add to cart
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          dispatch(actionCreators.dipositMoney(100));
        }}
      >
        +
      </button>
    </div>
  );
};

export default Body;
