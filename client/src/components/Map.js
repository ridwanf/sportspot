import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import PropTypes from 'prop-types';


function Map(props) {
  console.log(props);
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
      <Marker
        position={{ lat: props.lat, lng: props.lng }}
      />
    </GoogleMap>
  );
}

Map.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

export default withGoogleMap(Map);
