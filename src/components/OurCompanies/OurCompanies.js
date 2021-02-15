import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from '../OurCompanies/OurCompanies.module.css';
import ItalTechSvg from '../images/ital-technology.svg';
import AtlasMain from '../images/atlasMain.png';
import AtlasPl from '../images/atlas-pol.svg';
import arrowRight from '../images/arrow-right.svg';

// import AtlasCorp from '../Companies/AtlasCorporation/AtlasCorporation';
// import AtlasPol from '../Companies/AtlasPolska/AtlasPolska';

export default function OurCompanies() {
  const location = useLocation();

  return (
    <div>
      <div className={s.allCompaniesDiv}>
        <h1 className={s.title}>Companies</h1>
        <ul className={s.allCompanies}>
          <li className={s.company}>
            <Link
              className={s.linkToCompanies}
              to={{
                pathname: `/our-companies/ital-technology`,
                state: {
                  from: location.pathname,
                },
              }}
            >
              <img
                src={ItalTechSvg}
                alt="Ital Technology"
                className={s.svg}
                aria-label="Open page with company info"
              />
              <p className={s.details}>Details</p>
            </Link>
          </li>
          <li className={s.company}>
            <Link
              className={s.linkToCompanies}
              to={{
                pathname: `/our-companies/atlas-corporation`,
                state: {
                  from: location.pathname,
                },
              }}
            >
              <img
                src={AtlasMain}
                alt="Atlas Corporation"
                className={s.svg}
                aria-label="Open page with company info"
              />
              <p className={s.details}>Details</p>
            </Link>
          </li>
          <li className={s.company}>
            <Link
              className={s.linkToCompanies}
              to={{
                pathname: `/our-companies/atlas-polska`,
                state: {
                  from: location.pathname,
                },
              }}
            >
              <img
                src={AtlasPl}
                alt="Atlas Polska"
                className={s.svg}
                aria-label="Open page with company info"
              />
              <p className={s.details}>Details</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
