import * as actionTypes from '../constants/action-types';

export function setTickets(tickets) {
  return {
    type: actionTypes.SET_TICKETS,
    tickets,
  };
}
