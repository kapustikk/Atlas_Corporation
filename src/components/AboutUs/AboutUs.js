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
              We are an engineering and construction group of companies which
              supplies a vast array of solutions to its customers including the
              revamping, after-sales industrial maintenance and turnkey plant
              solutions for thermal and hydraulic industrial processes as well
              as industrial automation and air treatment systems.
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
