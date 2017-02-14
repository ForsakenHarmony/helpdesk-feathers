// TODO: definitely not finished
export default ({ tickets }) => (
  <div>
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {
          tickets.map(ticket => (
            <tr key={ticket.id}>
              <th>{ticket.title}</th>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
);
