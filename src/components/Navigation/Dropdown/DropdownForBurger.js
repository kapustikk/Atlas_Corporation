import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import arrow from '../images/arrow.svg';
import s from './DropdownMenu.module.css';

export default function DropdownMenu() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const ref = useRef(null);
  const { t } = useTranslation();

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={s.burgerMenu}>
      <button
        aria-controls="customized-menu"
        ref={ref}
        aria-haspopup="true"
        onClick={handleClick}
        className={s.button}
      >
        <img
          src="https://img.icons8.com/windows/45/000000/menu--v3.png"
          alt="icon for burger menu"
        />
      </button>

      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        className={s.menu}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={2}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={handleClose} className={s.menuItem}>
          <Link
            className={s.link}
            to={{
              pathname: `/`,
              state: {
                from: location.pathname,
              },
            }}
          >
            {t('header__menuHome')}
          </Link>
          <Link
            className={s.link}
            to={{
              pathname: `/about-us`,
              state: {
                from: location.pathname,
              },
            }}
          >
            {t('header__menuAbout')}
          </Link>
          <Link
            className={s.link}
            to={{
              pathname: `/services`,
              state: {
                from: location.pathname,
              },
            }}
          >
            {t('header__menuServices')}
          </Link>
          <Link
            className={s.link}
            to={{
              pathname: `/projects`,
              state: {
                from: location.pathname,
              },
            }}
          >
            {t('header__menuProjects')}
          </Link>
          <Link
            className={s.link}
            to={{
              pathname: `/our-companies`,
              state: {
                from: location.pathname,
              },
            }}
          >
            {t('header__menuCompanies')}
          </Link>
          <Link
            className={s.link}
            to={{
              pathname: `/contacts`,
              state: {
                from: location.pathname,
              },
            }}
          >
            {t('header__menuContacts')}
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
