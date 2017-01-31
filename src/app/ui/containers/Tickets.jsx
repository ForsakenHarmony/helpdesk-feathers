import { Component } from 'preact';
import { connect } from 'preact-redux';

import TicketList from '../components/TicketList.jsx';

@connect((state) => {
  const tickets = state.tickets;
  return {
    tickets,
  };
})
export default class Tickets extends Component {
  render({ tickets }, {}) {
    return (
      <div>
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Tickets
              </h1>
              <h2 class="subtitle">
                A list of tickets
              </h2>
            </div>
          </div>
        </section>
        <div class="section">
          <TicketList tickets={tickets}/>
        </div>
      </div>
    );
  }
}
