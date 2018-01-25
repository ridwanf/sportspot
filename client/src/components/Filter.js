import React, { Component } from 'react';
// import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="field search-field">
        <div className="field-body">
          <div className="field">
            <div className="control has-icons-left has-icons-right is-narrow">
              <input className="input" value={this.props.filter ? this.props.filter.address_components[0].short_name : ''} />
              <span className="icon is-small is-left">
                <i className="fa fa-location-arrow" />
              </span>
              <span className="icon is-small is-right">
                <i className="fa fa-caret-down" />
              </span>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left">
              <input className="input" />
              <span className="icon is-small is-left">
                <i className="fa fa-search" />
              </span>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <a className="button is-info" href="true">
                <span className="icon">
                  <i className="fa fa-search" />
                </span>
                <span>Search</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  filter: PropTypes.object,
};
Filters.defaultProps = {
  filter: null,
};
const mapStateToProps = ({ filter }) => {
  return {
    filter,
  };
};
export default connect(mapStateToProps)(Filters);
