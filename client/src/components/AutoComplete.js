import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAddressSugestion, getAddressByPlaceId } from '../actions';

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuggestion: false,
      autocompleteItems: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    this.fetchSuggestion = this.fetchSuggestion.bind(this);
  }

  componentDidMount() {
    // this.autocompleteService = new window.google.maps.places.AutocompleteService();
  }
  componentWillReceiveProps() {
    console.log(this.props);
    console.log(this.state);
    this.setState({ showSuggestion: true });
  }

  onInputChange(e) {
    e.preventDefault();
    if (e.target.value === '') {
      this.clearSuggestions();
    }
    this.fetchSuggestion(e.target.value);
  }

  onInputFocus(e) {
    e.preventDefault();
    e.target.select();
    this.fetchSuggestion(e.target.value);
    this.setState({ showSuggestion: true });
    // this.setActiveItemAtIndex(0);
  }

  onInputBlur(e) {
    e.preventDefault();
    this.setState({ showSuggestion: false });
  }


  setActiveItemAtIndex(index) {
    this.setState({
      autocompleteItems: this.state.autocompleteItems.map((item, idx) => {
        if (idx === index) {
          return { ...item, active: true };
        }
        return { ...item, active: false };
      }),
    });
  }
  getActiveItem() {
    return this.state.autocompleteItems.find((item) => item.active);
  }


  getAddressByPlaceId(placeId, formattedSuggestion) {
    const geocoder = new window.google.maps.Geocoder();
    this.props.getAddressByPlaceId(geocoder, placeId, formattedSuggestion);
  }
  fetchSuggestion(term) {
    console.log('fetchSuggestion');
    const geocoder = new window.google.maps.places.AutocompleteService();
    this.props.getAddressSugestion(
      geocoder,
      term,
      this.props.filter,
    );
    this.autocompleteCallback();
  }
  clearSuggestions() {
    this.setState({ autocompleteItems: [] });
  }
  clearActive() {
    this.setState({
      autocompleteItems: this.state.autocompleteItems.map((item) => ({
        ...item,
        active: false,
      })),
    });
  }
  selectUserInputValue() {
    this.clearActive();
  }
  selectActiveItemAtIndex(index) {
    const { placeId, formattedSuggestion } = this.state.autocompleteItems.find((item) =>
      item.index === index);
    this.setActiveItemAtIndex(index);
    this.getAddressByPlaceId(placeId, formattedSuggestion);
  }
  handleDownKey() {
    if (this.state.autocompleteItems.length === 0) {
      return;
    }

    const activeItem = this.getActiveItem();
    if (activeItem === undefined) {
      this.selectActiveItemAtIndex(0);
    } else {
      const nextIndex =
        (activeItem.index + 1) % this.state.autocompleteItems.length;
      this.selectActiveItemAtIndex(nextIndex);
    }
  }

  handleUpKey() {
    if (this.state.autocompleteItems.length === 0) {
      return;
    }

    const activeItem = this.getActiveItem();
    if (activeItem === undefined) {
      this.selectActiveItemAtIndex(this.state.autocompleteItems.length - 1);
    } else if (activeItem.index === 0) {
      this.selectUserInputValue();
    } else {
      this.selectActiveItemAtIndex(activeItem.index - 1);
    }
  }
  mouseOver(city, idx) {
    console.log('MOUSE OVER');
    console.log(city);
    console.log(idx);
  }
  mouseFocus(city, idx) {
    console.log('MOUSE FOCUS');
    console.log(city);
    console.log(idx);
  }
  autocompleteCallback() {
    console.log('autoCompleteCallBack');
    if (!this.props.addressSugestion) {
      return;
    }
    // const formattedSuggestion = (structuredFormatting) => ({
    //   mainText: structuredFormatting.main_text,
    //   secondaryText: structuredFormatting.secondary_text,
    // });

    const autoComplete = this.props.addressSugestion.map((p, idx) => ({
      suggestion: p.description,
      placeId: p.place_id,
      active: false,
      index: idx,
      formattedSuggestion: p.structured_formatting.main_text,
    }));
    this.setState({ autocompleteItems: autoComplete });
  }
  handleInputKeyDown(event) {
    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        this.handleEnterKey();
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.handleDownKey();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.handleUpKey();
        break;
      case 'Escape':
        this.clearSuggestions();
        break;
      default:
        break;
    }
  }
  renderSuggestion() {
    if (this.state.autocompleteItems.length > 0) {
      return (
        <div className={`control suggestion-list showSugestion-${this.state.showSuggestion}`}>
          <ul>
            {this.state.autocompleteItems.map((city, idx) => (
              <li
                key={city.placeId}
                className="suggestion-item"
              >
                <div
                  className={`input has-icons-left item ${city.active ? 'item-active' : ''}`}
                  onFocus={() => this.mouseFocus(city, idx)}
                  onMouseDown={() =>
                    this.selectActiveItemAtIndex(city.index)}
                  onMouseOver={() => this.setActiveItemAtIndex(city.index)}
                  role="presentation"
                >
                  {city.formattedSuggestion}
                  <span className="icon is-small is-left">
                    <i className="fa fa-map-marker Demo__suggestion-icon" />
                  </span>
                </div>
              </li>
            ))}

          </ul>
        </div>
      );
    }
    return '';
  }
  render() {
    return (
      <div className="control has-icons-left is-narrow">
        <input
          className="input"
          value={this.props.filter ? this.props.filter.name : ''}
          onChange={(e) => this.onInputChange(e)}
          onFocus={(e) => this.onInputFocus(e)}
          onKeyDown={(e) => this.handleInputKeyDown(e)}
          onBlur={(e) => this.onInputBlur(e)}
        />
        <span className="icon is-small is-left">
          <i className="fa fa-location-arrow" />
        </span>
        {this.renderSuggestion()}
      </div>
    );
  }
}
AutoComplete.propTypes = {
  getAddressSugestion: PropTypes.func.isRequired,
  getAddressByPlaceId: PropTypes.func.isRequired,
  filter: PropTypes.object,
  addressSugestion: PropTypes.array,
};

AutoComplete.defaultProps = {
  filter: null,
  addressSugestion: [],
};
const mapStateToProps = ({ filter, addressSugestion }) => {
  return {
    filter,
    addressSugestion,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getAddressSugestion, getAddressByPlaceId }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);
