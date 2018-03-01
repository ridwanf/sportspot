import axios from 'axios';
import { FETCH_USER, FETCH_CITY, CURRENT_ADDRESS, ADDRESS_SUGESTION } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};


export const fetchCity = () => async (dispatch) => {
  const res = await axios.get('/api/list_city');
  dispatch({ type: FETCH_CITY, payload: res.data });
};

export const currentAddress = (geocoder, { latitude, longitude }) => (dispatch) => {
  const lat = parseFloat(latitude);
  const lng = parseFloat(longitude);
  const latlng = { lat, lng };
  geocoder.geocode({ location: latlng }, (addr) => {
    const city = addr.find((a) => {
      return a.types.indexOf('administrative_area_level_3') > -1;
    });
    if (city) {
      const address = {
        name: city.address_components[0].long_name,
        latitude,
        longitude,
      };
      dispatch({ type: CURRENT_ADDRESS, payload: address });
    } else {
      dispatch({ type: CURRENT_ADDRESS, payload: null });
    }
  });
};


export const getAddressSugestion = (autoCompleteService, term, { latitude, longitude }) =>
  (dispatch) => {
    const address = {
      name: term,
      latitude,
      longitude,
    };
      // const autoComplete = googlePlaces.Autocomplete(input);//
    if (term !== '') {
      autoCompleteService.getPlacePredictions({ input: term }, (prediction, status) => {
        if (status === 'OK') {
          dispatch({ type: CURRENT_ADDRESS, payload: address });
          dispatch({ type: ADDRESS_SUGESTION, payload: prediction });
        }
        // else {
        //   dispatch({ type: CURRENT_ADDRESS, payload: address });
        //   dispatch({ type: ADDRESS_SUGESTION, payload: [] });
        // }
      });
    } else {
      dispatch({ type: CURRENT_ADDRESS, payload: address });
      dispatch({ type: ADDRESS_SUGESTION, payload: [] });
    }
  };


export const getAddressByPlaceId = (geocoder, placeId, placeName) => (dispatch) => {
  geocoder.geocode({ placeId }, (result, status) => {
    if (status === 'OK') {
      const address = {
        name: placeName,
        latitude: result[0].geometry.location.lat(),
        longitude: result[0].geometry.location.lng(),
      };
      dispatch({ type: CURRENT_ADDRESS, payload: address });
    } else {
      dispatch({ type: CURRENT_ADDRESS, payload: null });
    }
  });
};
