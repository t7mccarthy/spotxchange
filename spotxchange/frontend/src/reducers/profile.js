import { GET_PROFILE, CHANGE_BALANCE } from "../actions/types.js";

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
    // case CHANGE_BALANCE:
    //   return {
    //     ...state,
    //     profile: [...state.profile, action.payload]
    //   };
    default:
      return state;
  }
}
