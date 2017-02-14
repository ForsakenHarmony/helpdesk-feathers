const Nav = ({ authenticated }) => (
  <div class="container">
    <nav class="nav has-shadow">
      <div class="nav-left">
        <span class="nav-item">Helpdesk</span>
      </div>
      <div class="nav-right">
        <a href="/" class="nav-item">Home</a>
        <a href="/tickets" class="nav-item">Tickets</a>
        {authenticated !== 0 && <a href="/login" class="nav-item">Login</a>}
      </div>
    </nav>
  </div>
);

export default Nav;
