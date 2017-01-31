export default ({ tickets }) => (
  <div>
      {
        tickets.map(ticket => (
          <div class="box"><span>{ticket.title}</span></div>
        ))
      }
  </div>
);
