import * as actionTypes from '../constants/actionTypes';

export function setTickets(tickets) {
  return {
    type: actionTypes.SET_TICKETS,
    tickets,
  };
}
