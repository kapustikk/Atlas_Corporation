import React from 'react';
import s from '../Navigation/Dropdown.module.css';

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className={s.dropdown} style={{ background: 'red', width: '200px' }}>
        <div className={s.button} onClick={this.showDropdownMenu}>
          {' '}
          My Setting{' '}
        </div>

        {this.state.displayMenu ? (
          <ul>
            <li>
              <a className="active" href="#Companies">
                Companies
              </a>
            </li>
            <li>
              <a href="#Ital Technology">Ital Technology</a>
            </li>
            <li>
              <a href="#Atlas Corporation">Atlas Corporation</a>
            </li>
            <li>
              <a href="#Atlas Polska">Atlas Polska</a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
