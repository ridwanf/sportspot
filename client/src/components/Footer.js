import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                <strong>Bulma Templates</strong> by <a href="https://github.com/dansup">Daniel Supernault</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
              </p>
              <p>
                <a className="icon" href="https://github.com/dansup/bulma-templates">
                  <i className="fa fa-github" />
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
