import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter, NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navActive: false,
    };
    this.onClickBurger = this.onClickBurger.bind(this);
  }
  componentDidMount() {

  }
  onClickBurger() {
    this.setState({ navActive: !this.state.navActive });
  }
  renderContent() {
    switch (this.props.auth) {
      case null:
        return (
          <div className="navbar-item" >
            <a className="button is-white is-outlined is-small" href="/auth/google">
              <span className="icon">
                <i className="fa fa-google" />
              </span>
              <span>Login With Google</span>
            </a>
          </div>
        );

      default:
        return (
          <div className="navbar-item has-dropdown is-hoverable is-info" >
            <span className="navbar-link">
             Hi {this.props.auth.name.givenName} {this.props.auth.name.familyName}
            </span>
            <div className="navbar-dropdown">
              <a className="navbar-item" href="/api/logout">
                 Log out
              </a>
            </div>
          </div>
        );
    }
  }
  render() {
    return (
      <div className="hero-head hero is-info">
        <nav className="navbar is-info">
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/" href>
                <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" />
              </Link>
              <div className="navbar-burger burger" data-target="navbarMenu" onClick={() => this.onClickBurger()} role="presentation">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div id="navbarMenu" className={`navbar-menu${this.state.navActive ? 'is-active' : ''}`}>
              <div className="navbar-end">
                <NavLink className="navbar-item" activeClassName="is-active" exact to="/">
                Home
                </NavLink>
                <NavLink className="navbar-item" activeClassName="is-active" to="/listing" >
                Listing
                </NavLink>
                {this.renderContent()}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
Navbar.propTypes = {
  auth: PropTypes.object,
};

Navbar.defaultProps = {
  auth: null,
};
const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};
export default withRouter(connect(mapStateToProps)(Navbar));
