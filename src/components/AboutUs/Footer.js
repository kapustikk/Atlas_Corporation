import { NavLink } from 'react-router-dom';
import s from '../AboutUs/AboutUs.module.css';
import ItalTechSvg from '../images/ital-technology.svg';
import AtlasMain from '../images/atlasMain.png';
import AtlasPl from '../images/atlas-pol.svg';
import linkedin from '../images/linkedin.svg';
import arrow from '../images/arrow.svg';
import mail from '../images/mail.svg';
import arrowRight from '../images/arrow-right.svg';
import { animateScroll as scroll } from 'react-scroll';

export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={s.footerDiv}>
      <div className={s.footerNavigation}>
        <div className={s.svgAllComp}>
          <img src={ItalTechSvg} alt="" className={s.footerCompSvg} />
          <img src={AtlasMain} alt="" className={s.footerCompSvg} />
          <img src={AtlasPl} alt="" className={s.footerCompSvg} />
        </div>
        <div className={s.navigation}>
          <nav className={s.nav}>
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
              to="/our-companies"
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
          </nav>
          <p className={s.socialsText}>
            We in social media:{' '}
            <a
              href="https://www.linkedin.com/company/atlas-corporation-llc/"
              aria-label="Instagram link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="" className={s.linkedin} />
            </a>
          </p>
          <span className={s.arrowGoUp} onClick={scrollToTop}>
            <img src={arrow} alt="" />
            Go up
          </span>
        </div>
      </div>

      <div className={s.adressesDiv}>
        <address className={s.adress}>
          <ul className={s.listOfAdresses}>
            <li className={s.itemOfAdresses}>
              <p className={s.telephone}>
                Ukraine :{' '}
                <a href="tel:380952811515" className={s.tel}>
                  38 0952811515
                </a>
              </p>
              <p className={s.telephone}>
                International :{' '}
                <a href="tel:393499344027" className={s.tel}>
                  39 3499344027
                </a>
              </p>
              <p>
                <a
                  href="mailto:office@atlascorporation-llc.com"
                  className={s.mail}
                >
                  <img src={mail} alt="" className={s.mailSvg} />
                  office@atlascorporation-llc.com
                </a>
              </p>
            </li>
            <li className={s.itemOfAdresses}>
              <p className={s.telephone}>
                Warsaw :{' '}
                <a href="tel:48787862472" className={s.tel}>
                  48 787862472
                </a>
              </p>
              <p className={s.telephone}>
                International :{' '}
                <a href="tel:393315725689" className={s.tel}>
                  39 3315725689
                </a>
              </p>
              <p>
                <a href="mailto:info@atlaspolska-spzoo.pl" className={s.mail}>
                  <img src={mail} alt="" className={s.mailSvg} />
                  info@atlaspolska-spzoo.pl
                </a>
              </p>
            </li>
            <li className={s.itemOfAdresses}>
              <p className={s.telephone}>
                Italy :{' '}
                <a href="tel:393387685160" className={s.tel}>
                  39 3387685160
                </a>
              </p>
              <p className={s.telephone}>
                International :{' '}
                <a href="tel:393315725689" className={s.tel}>
                  39 3315725689
                </a>
              </p>
              <p>
                <a href="mailto:info@italtechnology-srl.it" className={s.mail}>
                  <img src={mail} alt="" className={s.mailSvg} />
                  info@italtechnology-srl.it
                </a>
              </p>
            </li>
          </ul>
        </address>

        <span className={s.policy}>
          <p className={s.policyAndCookies}>
            Privacy Policy <img src={arrowRight} alt="" />
          </p>
          <p className={s.policyAndCookies}>
            Cookies <img src={arrowRight} alt="" />
          </p>
          <p className={s.copyright}>Copyright © 2020. All Right Reserved.</p>
        </span>
      </div>
    </div>
  );
}
