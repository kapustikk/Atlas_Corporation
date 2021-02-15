import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import arrow from '../images/arrow.svg';
import arrowRight from '../images/arrow-right.svg';
import s from '../Navigation/Navigation.module.css';

export default function DropdownMenu() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const ref = useRef(null);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        aria-controls="customized-menu"
        ref={ref}
        aria-haspopup="true"
        onClick={handleClick}
        className={s.button}
      >
        <img src={arrow} alt="" className={s.arrow} />
      </button>

      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        className={s.menu}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
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
              pathname: `/our-companies/ital-technology`,
              state: {
                from: location.pathname,
              },
            }}
          >
            Ital Technology
            <img src={arrowRight} alt="" className={s.arrowRight} />
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className={s.menuItem}>
          <Link
            className={s.link}
            to={{
              pathname: `/our-companies/atlas-corporation`,
              state: {
                from: location.pathname,
              },
            }}
          >
            Atlas Corporation
            <img src={arrowRight} alt="" className={s.arrowRight} />
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className={s.menuItem}>
          <Link
            className={s.link}
            to={{
              pathname: `/our-companies/atlas-polska`,
              state: {
                from: location.pathname,
              },
            }}
          >
            Atlas Polska
            <img src={arrowRight} alt="" className={s.arrowRight} />
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
