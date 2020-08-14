import {
  SESSIONID_CHANGE,
  CURRENT_VOTER_CHANGE,
  MY_USER_CHANGE,
  QUEUE_LENGHT_CHANGE,
} from "./actionTypes";

// Action Creator
export function changeSession(sessionID) {
  return {
    type: SESSIONID_CHANGE,
    payload: sessionID,
  };
}

export function changeVoter(voter) {
  return {
    type: CURRENT_VOTER_CHANGE,
    payload: voter,
  };
}

export function changeMyUser(user) {
  return {
    type: MY_USER_CHANGE,
    payload: [
      {
        id: user.id,
        name: user.name,
      },
    ],
  };
}

export function changeQueueLenght(lenght) {
  return {
    type: QUEUE_LENGHT_CHANGE,
    payload: lenght,
  };
}
