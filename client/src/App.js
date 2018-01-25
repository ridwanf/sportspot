import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from './actions';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Listing from './components/Listing';
import Footer from './components/Footer';

import './assets/style/index.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.getCurrentAddress = this.getCurrentAddress.bind(this);
  }
  componentDidMount() {
    this.props.fetchUser();
    this.getCurrentLocation();
  }

  getCurrentAddress(pos) {
    const geocoder = new window.google.maps.Geocoder();
    const { latitude, longitude } = pos.coords;
    this.props.currentAddress(geocoder, { latitude, longitude });
  }
  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(this.getCurrentAddress);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/listing" component={Listing} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


// const mapDispatchToProps = (dispatch, props) => {
//   return {
//     dispatch1: () => {
//       dispatch(actions);
//     },
//   };
// };
App.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  currentAddress: PropTypes.func.isRequired,

};

export default connect(null, actions)(App);
