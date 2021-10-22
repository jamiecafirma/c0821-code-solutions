import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.state = {
      menuIsOpen: false
    };
  }

  openMenu(event) {
    this.setState({ menuIsOpen: true });
  }

  closeMenu(event) {
    if (event.target.tagName !== 'A' && event.target.className !== 'black-bg') {
      return;
    }
    this.setState({ menuIsOpen: false });
  }

  render() {
    let toggleMenu;
    if (this.state.menuIsOpen) {
      toggleMenu = 'non-static';
    } else {
      toggleMenu = 'non-static hidden';
    }
    return (
      <div>
        <div className={toggleMenu} onClick={this.closeMenu}>
          <div className="black-bg">
            <div className="row flex-column app-drawer">
              <h2>Menu</h2>
              <a href="#">About</a>
              <a href="#">Get Started</a>
              <a href="#">Sign In</a>
            </div>
          </div>
        </div>
        <a href="#" onClick={this.openMenu}>
          <i className="fas fa-bars margin-1rem"></i>
        </a>
      </div>
    );
  }
}
