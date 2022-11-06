export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        count: state.count + 1,
      };
    }
    case "DECREMENT": {
      return {
        count: state.count - 1,
      };
    }
    case "RESET": {
      return {
        count: 0,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
