import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_PROFILE, CHANGE_BALANCE } from "./types";
import { tokenConfig } from "./auth";

// GET_PROFILE
export const getProfile = () => (dispatch, getState) => {
  axios
    .get("/api/profile/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// // GET PROFILE
// export const getProfile = username => (dispatch, getState) => {
//   axios
//     .get(`/api/profile/profile`, username, tokenConfig(getState))
//     .then(res => {
//       console.log(username);
//       dispatch({
//         type: GET_PROFILE,
//         payload: res.data
//       });
//     })
//     .catch(err =>
//       dispatch(returnErrors(err.response.data, err.response.status))
//     );
// };

// CHANGE_BALANCE
export const changeBalance = (id, delta) => dispatch => {
  axios
    .post(`/api/profile/change_bal`, id, delta)
    .then(res => {
      dispatch(createMessage({ buySpot: "Balance Changed" }));
      dispatch({
        type: CHANGE_BALANCE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
