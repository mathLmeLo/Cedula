import {
  SESSIONID_CHANGE,
  CURRENT_VOTER_CHANGE,
  MY_USER_CHANGE,
  QUEUE_LENGHT_CHANGE,
} from "../actions/actionTypes";

const initialState = {
  sessionId: "",
  myUser: {},
  currentVoter: {},
  queueLenght: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SESSIONID_CHANGE:
      return {
        ...state,
        sessionId: action.payload,
      };
    case CURRENT_VOTER_CHANGE:
      return {
        ...state,
        currentVoter: action.payload,
      };
    case MY_USER_CHANGE:
      return {
        ...state,
        myUser: action.payload,
      };
    case QUEUE_LENGHT_CHANGE:
      return {
        ...state,
        queueLenght: action.payload,
      };
    default:
      return state;
  }
}
