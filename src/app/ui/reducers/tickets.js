import * as actionTypes from '../constants/actionTypes';

const initialState = [];

function setTickets(state, action) {
  const { tickets } = action;
  return [...state, ...tickets];
}

export default function (state = initialState, action) {
  if (action.type === actionTypes.SET_TICKETS) {
    return setTickets(state, action);
  }
  return state;
}
