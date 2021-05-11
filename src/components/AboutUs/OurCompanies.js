import { Link, useLocation } from 'react-router-dom';
import s from '../AboutUs/AboutUs.module.css';
import ItalTechSvg from '../images/ital.svg';
import AtlasMain from '../images/atlas.svg';
import AtlasPl from '../images/polska.svg';
import AtlasMainHover from '../images/atlasMain.png';
import ItalHover from '../images/italLogo.png';
import AtlasPolskaHover from '../images/atlasLogo.png';

export default function OurCompanies() {
  const location = useLocation();

  return (
    <div className={s.ourCompaniesDiv}>
      <span className={s.ourCompaniesTitle}>Our companies</span>
      <ul className={s.listOfCompanies}>
        <li className={s.itemOfCompanies}>
          <Link
            className={s.linkToCompanies}
            to={{
              pathname: `/our-companies/ital-technology`,
              state: {
                from: location.pathname,
              },
            }}
          >
            <img src={ItalTechSvg} alt="" className={s.companiesSvg} />
            <div className={s.squareComp}>
              <img src={ItalHover} alt="" className={s.companiesHover} />
              <p className={s.companiesDetails}>Details</p>
            </div>
          </Link>
        </li>
        <li className={s.itemOfCompanies}>
          <Link
            className={s.linkToCompanies}
            to={{
              pathname: `/our-companies`,
              state: {
                from: location.pathname,
              },
            }}
          >
            <img src={AtlasMain} alt="" className={s.companiesSvg} />
            <div className={s.squareComp}>
              <img src={AtlasMainHover} alt="" className={s.companiesHover} />
              <p className={s.companiesDetails}>Details</p>
            </div>
          </Link>
        </li>
        <li className={s.itemOfCompanies}>
          <Link
            className={s.linkToCompanies}
            to={{
              pathname: `/our-companies`,
              state: {
                from: location.pathname,
              },
            }}
          >
            <img src={AtlasPl} alt="" className={s.companiesSvg} />
            <div className={s.squareComp}>
              <img src={AtlasPolskaHover} alt="" className={s.companiesHover} />
              <p className={s.companiesDetails}>Details</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
