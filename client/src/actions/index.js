import axios from 'axios';
import { FETCH_USER, FETCH_CITY, CURRENT_ADDRESS } from './types';

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
  geocoder.geocode({ location: latlng }, (address) => {
    const city = address.find((a) => {
      return a.types.indexOf('locality') > -1;
    });
    if (city) {
      dispatch({ type: CURRENT_ADDRESS, payload: city });
    } else {
      dispatch({ type: CURRENT_ADDRESS, payload: null });
    }
  });
};
