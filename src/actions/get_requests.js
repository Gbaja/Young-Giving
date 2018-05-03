import axios from "axios";

import { UNAUTH_USER, CURRENT_USER, FETCH_MENTORS } from "./types";

export const logOut = callback => {
  return dispatch => {
    axios.get("/api/logout").then(() => callback());
    dispatch({
      type: UNAUTH_USER,
      payload: false
    });
  };
};

export const currentUser = () => {
  return dispatch => {
    axios
      .get("/api/currentUser")
      .then(response => {
        console.log("API CALL CURRET USER: ", response.data);
        dispatch({
          type: CURRENT_USER,
          payload: response.data === "" ? null : response.data
        });
      })
      .catch(err => {
        console.log("CURRENT USER ERROR: ", err);
      });
  };
};

export const fetchMentors = pageNum => {
  return dispatch => {
    axios
      .get(`/api/getMentors/${pageNum}`)
      .then(response => {
        dispatch({
          type: FETCH_MENTORS,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("FETCH MENTORS ERROR: ", err);
      });
  };
};
