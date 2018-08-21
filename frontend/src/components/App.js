import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

//actions
import { fetchUser } from '../actions/userActions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div >
        <h1>Merchant Inventory!</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth
});

export default connect(mapStateToProps, { fetchUser })(App);
