import { GET_PROFILE, UPDATE_PROFILE } from "../actions/types.js";

const initialState = {
  profile: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      // console.log("payload", action.payload);
      return {
        ...state,
        profile: action.payload
      };
    case UPDATE_PROFILE:
      console.log("payload", action.payload);
      return {
        ...state,
        profile: action.payload
      };

    default:
      return state;
  }
}
