import React, { Component } from 'react';
// import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import AutoComplete from './AutoComplete';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }


  render() {
    return (
      <div className="field search-field">
        <div className="field-body">
          <div className="field">
            <AutoComplete />
          </div>
          <div className="field">
            <div className="control has-icons-left">
              <input className="input" placeholder="ie: Basket, Futsal" />
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


export default Filters;
