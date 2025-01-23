import { useReducer } from "react";

const INITIAL_VALUE = {
  name: "",
  text: "",
  address: "",
};

const SET_NAME_ACTION = "SET_NAME";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return {
        ...INITIAL_VALUE,
        name: payload,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: payload,
      };
    case "SET_TEXT":
      return {
        ...state,
        text: payload,
      };
    default:
      return state;
  }
};

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);

  const setName = (value) =>
    dispatch({ type: SET_NAME_ACTION, payload: value });
  const setAddress = (value) =>
    dispatch({ type: "SET_ADDRESS", payload: value });
  const setText = (value) => dispatch({ type: "SET_TEXT", payload: value });

  const { name, text, address } = form;

  return (
    <div>
      <div>
        <span>Name</span>
        <input
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <span>Address</span>
        <input
          type='text'
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>
      <div>
        <span>Text</span>
        <input
          type='text'
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
    </div>
  );
};
