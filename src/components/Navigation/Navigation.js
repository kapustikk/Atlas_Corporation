import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';

const Navigation = () => (
  <nav className={s.nav}>
    <div className={s.firstNav}>
      <NavLink
        className={s.navlink}
        activeClassName={s.activeNavlink}
        exact
        to="/"
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
        to="/companies"
      >
        Companies
      </NavLink>
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
        RU
      </NavLink>
      <NavLink
        className={s.navlink}
        activeClassName={s.activeNavlink}
        to="/our-services"
      >
        <button type="button" className={s.button}>
          Our services
        </button>
      </NavLink>
    </div>
  </nav>
);

export default Navigation;
