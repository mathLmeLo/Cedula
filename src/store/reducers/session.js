import {
  SESSIONID_CHANGE,
  CURRENT_VOTER_CHANGE,
  ADD_USER,
  REMOVE_USER,
} from "../actions/actionTypes";

const initialState = {
  sessionId: "",
  userQueue: [
    {
      id: "Vazio",
      name: "Vazio",
    },
  ],
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
        userQueue: state.userQueue.slice(1),
      };
    case ADD_USER:
      return {
        ...state,
        userQueue: [...state.userQueue, action.payload],
      };
    default:
      return state;
  }
}
