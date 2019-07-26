import axios from "axios";

import { GET_SPOTS } from "./types";

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
    .catch(err => console.log(err));
};
