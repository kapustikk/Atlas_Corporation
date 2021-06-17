import { Link, useLocation } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Fade from 'react-reveal/Fade';

import s from '../AboutUs/AboutUs.module.css';
import aboutUs from '../images/about-us.jpg';
import OurCompanies from './OurCompanies';
import OurServices from './OurServices';
import OurBenefits from './OurBenefits';
import CompletedProjects from './CompletedProjects';
import AskUs from './AskUs';
import MapDiv from './Map';
import { useTranslation } from 'react-i18next';

import video from '../video/mainVideo.mp4';

export default function AboutUs() {
  const { t } = useTranslation();
  const location = useLocation();

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
      <Fade clear>
        <div className={s.aboutUsBlock}>
          <div className={s.aboutUs}>
            <div className={s.imageAboutUs}>
              <img src={aboutUs} alt="" width="350" />
            </div>
            <div className={s.textAboutUsDiv}>
              {/* <h3 className={s.moreAboutTitle}>More about Atlas</h3> */}
              <h2 className={s.titleAboutUs}>{t('aboutUs__mainTitle')}</h2>
              <p className={s.textTitle}>{t('aboutUs__title')}</p>
              <p className={s.text}> {t('aboutUs__text')} </p>
              <div>
                <Link
                  className={s.linkToCompanies}
                  to={{
                    pathname: `/about-us`,
                    state: {
                      from: location.pathname,
                    },
                  }}
                >
                  <button type="button" className={s.button}>
                    {t('button__learnMore')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <OurCompanies />
      <Fade clear>
        <OurServices />
      </Fade>
      <Fade clear>
        <OurBenefits />
      </Fade>
      <Fade clear>
        <CompletedProjects />
      </Fade>
      <Fade clear>
        <AskUs />
      </Fade>
      <Fade clear>
        <MapDiv />
      </Fade>
      <div></div>
    </div>
  );
}
