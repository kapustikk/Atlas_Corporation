import s from '../AboutUs/AboutUs.module.css';
import aboutUs from '../images/about-us.jpg';
import OurCompanies from './OurCompanies';
import OurServices from './OurServices';
import OurBenefits from './OurBenefits';
import CompletedProjects from './CompletedProjects';
import AskUs from './AskUs';
import Map from './Map';

export default function AboutUs() {
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
          <a
            href="https://www.linkedin.com/company/atlas-corporation-llc/"
            aria-label="Instagram link"
            target="_blank"
            rel="noreferrer"
          >
            IN
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
      <OurCompanies />
      <OurServices />
      <OurBenefits />
      <CompletedProjects />
      <AskUs />
      <Map />
    </div>
  );
}
