import { Component } from 'preact';
import { connect } from 'preact-redux';

import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';

@connect(state => state)
class App extends Component {
  render({ children }, {}) {
    return (
      <div>
        <Nav authenicated={0}/>
        {children}
        <Footer/>
      </div>
    );
  }
}

export default App;
