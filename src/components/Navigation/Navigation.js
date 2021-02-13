import { NavLink } from 'react-router-dom';
import arrow from '../images/arrow.svg';
import s from '../Navigation/Navigation.module.css';

const Navigation = () => (
  <nav className={s.nav}>
    <div className={s.firstNav} id="navigation">
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
        Services <img src={arrow} alt="" className={s.arrow} />
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
        to="/our-companies"
      >
        Companies <img src={arrow} alt="" className={s.arrow} />
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
        ENG
      </NavLink>
    </div>
  </nav>
);

export default Navigation;
