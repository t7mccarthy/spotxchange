import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_SPOTS, BUY_SPOT, ADD_SPOT } from "./types";

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

// BUY SPOT
export const buySpot = id => dispatch => {
  axios
    .delete(`/api/spots/${id}`)
    .then(res => {
      dispatch(createMessage({ buySpot: "Spot Purchased" }));
      dispatch({
        type: BUY_SPOT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD SPOT
export const addSpot = spot => dispatch => {
  axios
    .post("/api/spots/", spot)
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
