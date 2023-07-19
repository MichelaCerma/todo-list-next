export const mainReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        username: action.pippo,
      };
    default:
      return state;
  }
};
