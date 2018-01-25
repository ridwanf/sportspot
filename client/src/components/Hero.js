import React, { Component } from 'react';
import Filter from './Filter';

class Hero extends Component {
  render() {
    return (
      <div>
        <section className="hero is-info is-medium is-bold">
          <div className="hero-body" >
            <div className="container has-text-centered">
              <h1 className="title">
            The new standard in &lt;insert industry here&gt;
              </h1>
              <Filter />
            </div>
          </div>

        </section>
      </div>
    );
  }
}
export default Hero;
