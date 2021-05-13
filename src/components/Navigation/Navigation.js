import { NavLink } from 'react-router-dom';
import DropdownMenu from './Dropdown/DropdownMenu';
import DropdownMenuForServices from './Dropdown/DropdownForServices';
import s from '../Navigation/Navigation.module.css';

function Navigation() {
  return (
    <nav className={s.nav}>
      <div className={s.firstNav} id="navigation">
        <NavLink
          className={s.navlink}
          activeClassName={s.activeNavlink}
          exact
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={s.navlink}
          activeClassName={s.activeNavlink}
          exact
          to="/about-us"
        >
          About us
        </NavLink>
        <NavLink
          className={s.navlink}
          activeClassName={s.activeNavlink}
          to="/services"
        >
          Services
        </NavLink>
        <DropdownMenuForServices />
        <NavLink
          className={s.navlink}
          activeClassName={s.activeNavlink}
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className={s.navlink}
          activeClassName={s.activeNavlink}
          to="/our-companies"
        >
          Companies
        </NavLink>
        <DropdownMenu />
        <NavLink
          className={s.navlink}
          activeClassName={s.activeNavlink}
          to="/contacts"
        >
          Contacts
        </NavLink>
      </div>

      <div className={s.secondNav}>
        <NavLink
          className={s.navlink}
          activeClassName={s.activeNavlink}
          to="/language"
        >
          ENG
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
