import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

//actions
import { redirectUser } from '../actions/userActions';

class App extends Component {
  componentDidMount() {
    this.props.redirectUser();
  }

  render() {
    return (
      <div style={{ maxWidth: "1200px", margin: "0 auto"}}>
        <h2>Merchant Inventory!</h2>
        {/* <a href="https://sandbox.dev.clover.com/oauth/authorize?client_id={clientID}&redirect_uri=http://localhost:3000">
          Login
        </a> */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.auth
});

export default connect(mapStateToProps, { redirectUser })(App);
