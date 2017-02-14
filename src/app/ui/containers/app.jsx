import { Component } from 'preact';
import { connect } from 'react-redux';

import Nav from '../components/nav.jsx';
import Footer from '../components/footer.jsx';

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
