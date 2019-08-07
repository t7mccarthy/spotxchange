import {
  GET_SPOTS,
  BUY_SPOT,
  DELETE_SPOT,
  ADD_SPOT
} from "../actions/types.js";

const initialState = {
  spots: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SPOTS:
      return {
        ...state,
        spots: action.payload.filter(spot => spot.active !== false)
      };
    case BUY_SPOT:
    case DELETE_SPOT:
      return {
        ...state,
        spots: state.spots.filter(spot => spot.id !== action.payload)
      };
    case ADD_SPOT:
      return {
        ...state,
        spots: [...state.leads, action.payload]
      };
    default:
      return state;
  }
}
