import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DropdownMenu from './Dropdown/DropdownMenu';
import DropdownMenuForServices from './Dropdown/DropdownForServices';
import s from '../Navigation/Navigation.module.css';

function Navigation() {
  const { t, i18n } = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <nav className={s.nav}>
      <div className={s.firstNav} id="navigation">
        <NavLink
          className={s.navlink}
          activeClassName={s.activeNavlink}
          exact
          to="/"
        >
          {t('header__menuHome')}
        </NavLink>

        <NavLink
          className={s.navlink}
          activeClassName={s.activeNavlink}
          exact
          to="/about-us"
        >
          {t('header__menuAbout')}
        </NavLink>
        <NavLink
          className={s.navlink}
          activeClassName={s.activeNavlink}
          to="/services"
        >
          {t('header__menuServices')}
        </NavLink>
        <DropdownMenuForServices />
        <NavLink
          className={s.navlink}
          activeClassName={s.activeNavlink}
          to="/projects"
        >
          {t('header__menuProjects')}
        </NavLink>
        <NavLink
          className={s.navlink}
          activeClassName={s.activeNavlink}
          to="/our-companies"
        >
          {t('header__menuCompanies')}
        </NavLink>
        <DropdownMenu />
        <NavLink
          className={s.navlink}
          activeClassName={s.activeNavlink}
          to="/contacts"
        >
          {t('header__menuContacts')}
        </NavLink>
      </div>

      <div className={s.secondNav}>
        <button onClick={() => changeLanguage('en')} className={s.navButton}>
          EN
        </button>
        <button onClick={() => changeLanguage('it')} className={s.navButton}>
          IT
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
