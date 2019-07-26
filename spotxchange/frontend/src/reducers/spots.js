import { GET_SPOTS } from "../actions/types.js";

const initialState = {
  spots: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SPOTS:
      return {
        ...state,
        spots: action.payload
      };
    default:
      return state;
  }
}
