import React, { Component } from 'react';
import Hero from './Hero';

class Landing extends Component {
  render() {
    return (
      <div >
        <Hero />
        <section className="container">
          <div className="columns features">
            <div className="column is-4">
              <div className="card">
                <div className="card-image has-text-centered">
                  <i className="fa fa-paw" />
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>Tristique senectus et netus et. </h4>
                    <p>Purus semper eget duis at tellus at urna condimentum
                     mattis. Non blandit massa enim nec. Integer enim neque
                     volutpat ac tincidunt vitae semper quis. Accumsan tortor
                      posuere ac ut consequat semper viverra nam.
                    </p>
                    <p><a href="/">Learn more</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-image has-text-centered">
                  <i className="fa fa-id-card-o" />
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>Tempor orci dapibus ultrices in.</h4>
                    <p>Ut venenatis tellus in metus vulputate. Amet consectetur
                     adipiscing elit pellentesque. Sed arcu non odio euismod
                      lacinia at quis risus. Faucibus turpis in eu mi bibendum
                       neque egestas cmonsu songue. Phasellus vestibulum lorem
                        sed risus.
                    </p>
                    <p><a href="/">Learn more</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-image has-text-centered">
                  <i className="fa fa-rocket" />
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4> Leo integer malesuada nunc vel risus.  </h4>
                    <p>Imperdiet dui accumsan sit amet nulla facilisi morbi.
                     Fusce ut placerat orci nulla pellentesque dignissim enim.
                      Libero id faucibus nisl tincidunt eget nullam.
                      Commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                    <p><a href="/">Learn more</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="intro column is-8 is-offset-2">
            <h2 className="title">Perfect for developers or designers!</h2><br />
            <p className="subtitle">Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.</p>
          </div>

          <div className="sandbox">
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child notification is-white">
                  <p className="title">Hello World</p>
                  <p className="subtitle">What is up?</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-white">
                  <p className="title">Foo</p>
                  <p className="subtitle">Bar</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-white">
                  <p className="title">Third column</p>
                  <p className="subtitle">With some content</p>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                     Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                    </p>
                  </div>
                </article>
              </div>
            </div>

            <div className="tile is-ancestor">
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification is-white">
                      <p className="title">Vertical tiles</p>
                      <p className="subtitle">Top box</p>
                    </article>
                    <article className="tile is-child notification is-white">
                      <p className="title">Vertical tiles</p>
                      <p className="subtitle">Bottom box</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child notification is-white">
                      <p className="title">Middle box</p>
                      <p className="subtitle">With an image</p>
                      <figure className="image is-4by3">
                        <img src="http://bulma.io/images/placeholders/640x480.png" alt="/" />
                      </figure>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-white">
                    <p className="title">Wide column</p>
                    <p className="subtitle">Aligned with the right column</p>
                    <div className="content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                       elit. Proin ornare magna eros, eu pellentesque tortor
                        vestibulum ut. Maecenas non massa sem. Etiam finibus
                         odio quis feugiat facilisis.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-white">
                  <div className="content">
                    <p className="title">Tall column</p>
                    <p className="subtitle">With even more content</p>
                    <div className="content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                       elit. Etiam semper diam at erat pulvinar, at pulvinar
                        felis blandit. Vestibulum volutpat tellus diam,
                         consequat gravida libero rhoncus ut. Morbi maximus,
                          leo sit amet vehicula eleifend, nunc dui porta orci,
                           quis semper odio felis ut quam.
                      </p>
                      <p>Suspendisse varius ligula in molestie lacinia.
                       Maecenas varius eget ligula a sagittis. Pellentesque
                        interdum, nisl nec interdum maximus,diam, finibus
                         dignissim turpis. Sed eget varius ligula, at volutpat tortor.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child notification is-white">
                  <p className="title">Side column</p>
                  <p className="subtitle">With some content</p>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                    </p>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-8">
                <article className="tile is-child notification is-white">
                  <p className="title">Main column</p>
                  <p className="subtitle">With some content</p>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                     Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Landing;
