import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import s from '../AboutUs/AboutUs.module.css';
import aboutUs from '../images/about-us.jpg';
import OurCompanies from './OurCompanies';
import OurServices from './OurServices';
import OurBenefits from './OurBenefits';
import CompletedProjects from './CompletedProjects';
import AskUs from './AskUs';
import MapDiv from './Map';

import video from '../video/mainVideo.mp4';

export default function AboutUs() {
  return (
    <div>
      <div className={s.intro}>
        <div className={s.hero}>
          <Loader
            type="TailSpin"
            color="#fff"
            height={80}
            width={80}
            timeout={3000}
            className={s.loader}
          />
          <video src={video} className={s.video} autoPlay muted loop></video>
          {/* <div className={s.titleDiv}>
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
        </div> */}
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
            </div>
          </div>
        </div>
      </div>
      <OurCompanies />
      <OurServices />
      <OurBenefits />
      <CompletedProjects />
      <AskUs />
      <MapDiv />
    </div>
  );
}
