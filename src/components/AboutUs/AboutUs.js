import { Link, useLocation } from 'react-router-dom';
import s from '../AboutUs/AboutUs.module.css';
import aboutUs from '../images/about-us.jpg';
import ItalTechSvg from '../images/ital-technology.svg';
import AtlasMain from '../images/atlasMain.png';
import AtlasPl from '../images/atlas-pol.svg';
import startUp from '../images/start-up.jpg';
import techCntrl from '../images/technical-control.jpg';
import afterSales from '../images/after-sales-service.jpg';
import production from '../images/production.jpg';
import mounting from '../images/mounting.jpg';
import techSec from '../images/t-security.jpg';
import component1 from '../images/component-1.svg';
import component2 from '../images/component-2.svg';
import component3 from '../images/component-3.svg';
import component4 from '../images/component-4.svg';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.jpg';

export default function AboutUs() {
  const location = useLocation();
  return (
    <div>
      <div className={s.hero}>
        <div className={s.titleDiv}>
          <p className={s.title}>We are Atlas company</p>
          <h1 className={s.mainTitle}>
            Your reliable partner in the manufacture and installation of metal
            structures
          </h1>
          <button type="button" className={s.button}>
            Our Services
          </button>
        </div>
        <div className={s.socials}>
          <a href="http://instagram.com" aria-label="Instagram link">
            IN
          </a>
          <a href="https://www.facebook.com/" aria-label="Facebook link">
            FB
          </a>
        </div>
      </div>
      <div className={s.aboutUsBlock}>
        <div className={s.aboutUs}>
          <div>
            <img src={aboutUs} alt="" width="500" />
          </div>
          <div className={s.textAboutUsDiv}>
            <h3 className={s.moreAboutTitle}>More about Atlas</h3>
            <h2 className={s.titleAboutUs}>About us</h2>
            <p className={s.textTitle}>
              A new vision and approach based оп knowledge and experience
            </p>
            <p className={s.text}>
              Ital Corporation Corporation LLC and Atlas LLC and ATLAS POLSKA
              Sp. z o.o. & RP81 Group is an Italian group of engineering and
              construction companies, which offers turnkey solutions for its
              customers in the field of thermal and hydraulic industrial
              technologies, as well as industrial automation, gas treatment
              plants. То become the first name in the steel and mecha­nical
              carpentry industry as а sustainable partner and an indisputable
              choice for our customers, providing а high level of service and
              staying а step ahead of our competitors.{' '}
            </p>
            <div>
              <button type="button" className={s.button}>
                Learn more
              </button>
              <button type="button" className={s.button}>
                View companies
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={s.ourCompaniesDiv}>
        <span className={s.ourCompaniesTitle}>Our companies</span>
        <ul className={s.listOfCompanies}>
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
              <img src={ItalTechSvg} alt="" className={s.companiesSvg} />
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
            </Link>
          </li>
        </ul>
      </div>

      <div className={s.ourServicesDiv}>
        <h3 className={s.ourServicesTitle}>What we do</h3>
        <h2 className={s.ourServicesMainTitle}>Our Services</h2>
        <div className={s.ourServices}>
          <ul className={s.listOfOurServices}>
            <li className={s.itemOfOurServices}>
              <img src={startUp} alt="" className={s.itemsPhoto} />
              <h4 className={s.titleOfOurServices}>Start-up overhead work</h4>
              <p className={s.textOfOurServices}>
                Modernization of customer equipment with the ability to develop
                / manufacture individual components and replace control systems
                ...
              </p>
              <a
                href="http://localhost:3001/our-companies"
                className={s.linkToServices}
                aria-label="Start-up overhead work"
              >
                Details -->{' '}
              </a>
            </li>
            <li className={s.itemOfOurServices}>
              <img src={techCntrl} alt="" className={s.itemsPhoto} />
              <h4 className={s.titleOfOurServices}>Technical control</h4>
              <p className={s.textOfOurServices}>
                Our independent technical control will allow you to complete the
                project in a timely manner, avoiding the occurrence of risks and
                observing all relevant ...
              </p>
              <a
                href="http://localhost:3001/our-companies"
                className={s.linkToServices}
                aria-label="Technical control"
              >
                Details -->{' '}
              </a>
            </li>
            <li className={s.itemOfOurServices}>
              <img src={afterSales} alt="" className={s.itemsPhoto} />
              <h4 className={s.titleOfOurServices}>After-sales service</h4>
              <p className={s.textOfOurServices}>
                We provide after-sales service in several ways, Periodic
                maintenance (periodic inspection) ...
              </p>
              <a
                href="http://localhost:3001/our-companies"
                className={s.linkToServices}
                aria-label="After-sales service"
              >
                Details -->{' '}
              </a>
            </li>
            <li className={s.itemOfOurServices}>
              <img src={techSec} alt="" className={s.itemsPhoto} />
              <h4 className={s.titleOfOurServices}>
                Production and technical security
              </h4>
              <p className={s.textOfOurServices}>
                Using free tangible assets and the high mobilization readiness
                of our specialists, we have developed a new business solution
                ...
              </p>
              <a
                href="http://localhost:3001/our-companies"
                className={s.linkToServices}
                aria-label="Production and technical security"
              >
                Details -->{' '}
              </a>
            </li>
            <li className={s.itemOfOurServices}>
              <img src={mounting} alt="" className={s.itemsPhoto} />
              <h4 className={s.titleOfOurServices}>Mounting</h4>
              <p className={s.textOfOurServices}>
                Full or partial assembly of new and dismantling of metal
                structures and mechanical equipment with their subsequent
                restoration and adjustment ...
              </p>
              <a
                href="http://localhost:3001/our-companies"
                className={s.linkToServices}
                aria-label="Mounting"
              >
                Details -->{' '}
              </a>
            </li>
            <li className={s.itemOfOurServices}>
              <img src={production} alt="" className={s.itemsPhoto} />
              <h4 className={s.titleOfOurServices}>Production</h4>
              <p className={s.textOfOurServices}>
                Thanks to our services and products, we satisfy the needs of
                customers represented in various industries, such as ...
              </p>
              <a
                href="http://localhost:3001/our-companies"
                className={s.linkToServices}
                aria-label="Production"
              >
                Details -->{' '}
              </a>
            </li>
          </ul>
        </div>
        <button type="button" className={s.button}>
          All services
        </button>
      </div>

      <div className={s.benefitsDiv}>
        <div className={s.benefits}>
          <h3 className={s.titleBenefits}>Why we</h3>
          <h2 className={s.mainTitleBenefits}>Benefits</h2>
          <div className={s.allBenefits}>
            <div className={s.components}>
              <h2 className={s.number}>01</h2>
              <h4 className={s.subtext}>Professionalism</h4>
              <img src={component1} alt="" className={s.benefitsSvg} />
            </div>
            <div className={s.components}>
              <h2 className={s.number}>02</h2>
              <h4 className={s.subtext}>Quality</h4>
              <img src={component2} alt="" className={s.benefitsSvg} />
            </div>
            <div className={s.components}>
              <h2 className={s.number}>03</h2>
              <h4 className={s.subtext}>Reliability</h4>
              <img src={component3} alt="" className={s.benefitsSvg} />
            </div>
            <div className={s.components}>
              <h2 className={s.number}>04</h2>
              <h4 className={s.subtext}>Innovation</h4>
              <img src={component4} alt="" className={s.benefitsSvg} />
            </div>
            <div className={s.components}>
              <h2 className={s.number}>05</h2>
              <h4 className={s.subtext}>Safety</h4>
              <img src={component1} alt="" className={s.benefitsSvg} />
            </div>
          </div>
        </div>
      </div>

      <div className={s.compleatedProjectsDiv}>
        <div className={s.compleatedProjects}>
          <h3 className={s.titleProjects}>Our work</h3>
          <h2 className={s.mainTitleProjects}>Completed projects</h2>
          <ul className={s.listOfProjects}>
            <li className={s.itemProject}>
              <img
                src={project1}
                alt="technical control"
                className={s.projectPhoto}
              />
              <span className={s.textProjects}>
                <h4 className={s.projectTitle}>Technical control</h4>
                <p className={s.projectText}>
                  Our independent technical control will allow you to complete
                  the project in a timely manner, avoiding the occurrence of
                  risks and observing all relevant ...
                </p>
                <button type="button" className={s.buttonToProject}>
                  Details ->{' '}
                </button>
              </span>
            </li>
            <li className={s.itemProject}>
              <img
                src={project2}
                alt="technical control"
                className={s.projectPhoto}
              />
              <span className={s.textProjects}>
                <h4 className={s.projectTitle}>After sales service</h4>
                <p className={s.projectText}>
                  We will allow you to complete the project in a timely manner,
                  avoiding the occurrence of risks and observing all relevant
                  ...
                </p>
                <button type="button" className={s.buttonToProject}>
                  Details ->{' '}
                </button>
              </span>
            </li>
            <li className={s.itemProject}>
              <img
                src={project3}
                alt="technical control"
                className={s.projectPhoto}
              />
              <span className={s.textProjects}>
                <h4 className={s.projectTitle}>Technical control</h4>
                <p className={s.projectText}>
                  Our independent technical control will allow you to complete
                  the project in a timely manner, avoiding the occurrence of
                  risks and observing all relevant ...
                </p>
                <button type="button" className={s.buttonToProject}>
                  Details ->{' '}
                </button>
              </span>
            </li>
            <li className={s.itemProject}>
              <img
                src={project4}
                alt="technical control"
                className={s.projectPhoto}
              />
              <span className={s.textProjects}>
                <h4 className={s.projectTitle}>Start-up overhead works</h4>
                <p className={s.projectText}>
                  We will allow you to complete the project in a timely manner,
                  avoiding the occurrence of risks and observing all relevant
                  ...
                </p>
                <button type="button" className={s.buttonToProject}>
                  Details ->{' '}
                </button>
              </span>
            </li>
          </ul>
          <button type="button" className={s.button}>
            All projects
          </button>
        </div>
      </div>
    </div>
  );
}
