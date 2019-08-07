import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_PROFILE, UPDATE_PROFILE } from "./types";
import { tokenConfig } from "./auth";

// GET_PROFILE
export const getProfile = () => (dispatch, getState) => {
  // axios
  //   .get("/api/profile", tokenConfig(getState))
  //   .then(
  //     function(data) {
  //       this.setState({ list: data.data });
  //     }.bind(this)
  //   )
  //   .catch(function(error) {
  //     console.log(error);
  //   });
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

// UPDATE_PROFILE
export const updateProfile = (id, profile) => (dispatch, getState) => {
  axios({
    method: "put",
    url: "/api/profile/" + id,
    data: {
      profile: profile
    }
  }).then(function(response) {
    console.log(response);
  });
  // axios
  //   .put(`/api/profile/${id}/`, profile, tokenConfig(getState))
  //   .then(res => {
  //     dispatch(createMessage({ updateProfile: "Profile Updated" }));
  //     dispatch({
  //       type: UPDATE_PROFILE,
  //       payload: res.data
  //     });
  //   })
  //   .catch(err => console.log(err));
};
