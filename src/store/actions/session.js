import {
  SESSIONID_CHANGE,
  CURRENT_VOTER_CHANGE,
  ADD_USER,
  REMOVE_USER,
} from "./actionTypes";

// Action Creator
export function changeSession(sessionID) {
  return {
    type: SESSIONID_CHANGE,
    payload: sessionID,
  };
}

export function changeVoter() {
  return {
    type: CURRENT_VOTER_CHANGE,
  };
}

export function addUser(voterID, voterName) {
  return {
    type: ADD_USER,
    payload: {
      id: voterID,
      name: voterName,
    },
  };
}
