import React, { Component } from 'react';
import Map from './Map';

class Hero extends Component {
  render() {
    return (
      <div>
        <section className="hero is-medium hero-map">
          <div className="hero-body" >
            <Map
              lat={-6.2330064}
              lng={106.8119036}
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '400px' }} />}
              mapElement={<div style={{ height: '100%' }} />}
            />
          </div>

        </section>
      </div>
    );
  }
}
export default Hero;
