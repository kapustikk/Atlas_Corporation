import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from '../OurCompanies/OurCompanies.module.css';
import ItalTechSvg from '../images/ital-technology.svg';
import AtlasMain from '../images/atlasMain.png';
import AtlasPl from '../images/atlas-pol.svg';
// import AtlasCorp from '../Companies/AtlasCorporation/AtlasCorporation';
// import AtlasPol from '../Companies/AtlasPolska/AtlasPolska';

export default function OurCompanies() {
  const location = useLocation();

  return (
    <div>
      <div className={s.allCompaniesDiv}>
        <h1 className={s.title}>Our Companies</h1>
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
            </Link>
          </li>
          <li className={s.company}>
            <img
              src={AtlasMain}
              alt="Atlas Corporation"
              className={s.svg}
              aria-label="Open page with company info"
            />
          </li>
          <li className={s.company}>
            <img
              src={AtlasPl}
              alt="Atlas Polska"
              className={s.svg}
              aria-label="Open page with company info"
            />
          </li>
        </ul>

        <p className={s.textAbout}>
          Ital Technology srl & Atlas Corporation LLC & ATLAS POLSKA Sp. z o.o.
          is an Italian engineering and construction group of companies which
          supplies turnkey solutions for its customers in thermal and hydraulic
          industrial processes as well as industrial automation and air
          treatment systems. For about 15 years, the company’s experts have been
          managing work sites for the construction of new structures and
          coordinating the processes related to the realization of mechanical
          works, providing also repair and technical maintenance of the sites.
          Our 3 companies are committed to meeting the growing demands of our
          customers and occupying a strategic position in different parts of the
          world. Based on 15 years of global experience, we offer a
          comprehensive range of tailored services to match your individual
          specific needs: from construction to logistic support, installation of
          a wide range of technological equipment and steel structures for
          various industrial applications, and to a supervision service covering
          all stages of the project. Our group operates in the steel and
          mechanical carpentry industry and boasts extensive experience in
          completing small and large-scale construction and maintenance
          projects. Through the professionalism of our employees, the
          innovations in production processes and responsibility towards our
          customers we provide a first-rate service in strict compliance with
          European Quality Standards and the requirements of our clients. Our
          goal is to ensure that the products and services we provide, boasting
          production and manufacturing excellence, have a global impact by
          tackling the insidious challenges of our times.
        </p>
      </div>
    </div>
  );
}
