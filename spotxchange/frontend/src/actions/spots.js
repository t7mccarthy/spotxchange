import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_SPOTS, BUY_SPOT, ADD_SPOT, DELETE_SPOT } from "./types";
import { tokenConfig } from "./auth";

// GET SPOTS
export const getSpots = () => dispatch => {
  axios
    .get("/api/spots/")
    .then(res => {
      dispatch({
        type: GET_SPOTS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// // GET USER SPOTS
// export const getUserSpots = () => (dispatch, getState) => {
//   axios
//     .get("/api/spots/", tokenConfig(getState))
//     .then(res => {
//       dispatch({
//         type: GET_SPOTS,
//         payload: res.data
//       });
//     })
//     .catch(err =>
//       dispatch(returnErrors(err.response.data, err.response.status))
//     );
// };

// BUY SPOT
export const buySpot = (id, spot) => (dispatch, getState) => {
  axios({
    method: "put",
    url: "/api/buy_spot/" + id,
    data: {
      spots: spot
    }
  })
    .then(function(response) {
      dispatch(createMessage({ buySpot: "Spot Purchased" }));
      dispatch({
        type: BUY_SPOT,
        payload: id
      });
      // location.reload();
    })
    .catch(err => console.log(err));
};

// DELETE SPOT
export const deleteSpot = id => (dispatch, getState) => {
  axios
    .delete(`/api/spots/${id}`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteSpot: "Spot Deleted" }));
      dispatch({
        type: DELETE_SPOT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD SPOT
export const addSpot = spot => (dispatch, getState) => {
  axios
    .post("/api/spots/", spot, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addSpot: "Spot Published" }));
      location.reload();
      dispatch({
        type: ADD_SPOT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
