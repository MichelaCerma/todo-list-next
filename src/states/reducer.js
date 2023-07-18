export const INITIAL_STATE = {
  text: "dwad",
  checked: false,
};

export const InputReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};
