import React from 'react';
import OurCompanies from '../AboutUs/OurCompanies';
import AskUs from '../AboutUs/AskUs';
import s from '../AboutUsPage/AboutUsPage.module.css';
import image1 from '../images/aboutUs1.jpg';
import image2 from '../images/t-security.jpg';
import brochureEng from '../images/brochureEng.jpg';
import brochureItl from '../images/brochureItl.jpg';

export default function AboutUsPage() {
  return (
    <div>
      <div className={s.aboutUsPage}>
        <div className={s.info}>
          <img src={image1} alt="" className={s.aboutUsPhoto} />
          <span className={s.textBlockOne}>
            <h1 className={s.aboutUsTitle}>About us</h1>
            <p className={s.textTitle}>
              A new vision and approach оп knowledge and experience
            </p>
            <h2 className={s.title}>Our vision</h2>
            <h4 className={s.text}>
              Our goal is to become the best partner and the best choice for our
              customers, due to the level of reliability and the high quality of
              the services provided.
            </h4>
            <h3>Our values</h3>
            <h4 className={s.text}>
              The key drivers we implement to achieve our goals are:
              <ul>
                <li>professional competence</li>
                <li>quality</li>
                <li>reliability</li>
                <li>innovation</li>
                <li>safety</li>
              </ul>
            </h4>
          </span>
        </div>
        <div className={s.info}>
          <span className={s.textBlockTwo}>
            <h2 className={s.title}>Our mission</h2>
            <h4 className={s.text}>
              To create a customer care service, implementing projects that
              fully embrace the requirements and individual expectations,
              thereby avoiding the emergence of risks. We present ourselves as a
              referent and "general contractor" for the management of activities
              including procurement, construction, commissioning, start-up,
              management and running of industrial plants and processes.
            </h4>
            <h4 className={s.text}>
              Over 16 years of experience translate into a "know-how" capable of
              solving construction and operational problems, both on the field
              and during after sales periods, managing maintenance and
              production processes.
            </h4>
          </span>
          <img src={image2} alt=" " className={s.aboutUsPhoto} />
        </div>
      </div>

      <div>
        <OurCompanies />
      </div>

      <div className={s.brochures}>
        <h4 className={s.brochuresInfo}>Info about us</h4>
        <h2 className={s.title}>Brochures</h2>

        <div className={s.brochuresImages}>
          <div className={s.brochuresDiv}>
            <img
              src={brochureEng}
              alt="brochure in English"
              className={s.brochuresImg}
            />
            <button type="button" className={s.button}>
              <a
                href="http://atlascorporation-llc.com/Atlas-brochure-ENG-web.pdf"
                target="_blank"
                rel="noreferrer"
                className={s.link}
              >
                Download
              </a>
            </button>
          </div>
          <div className={s.brochuresDiv}>
            <img
              src={brochureItl}
              alt="brochure in Italy"
              className={s.brochuresImg}
            />
            <button type="button" className={s.button}>
              <a
                href="http://atlascorporation-llc.com/Ital-Technology-brochure-ITL.pdf"
                target="_blank"
                rel="noreferrer"
                className={s.link}
              >
                Download
              </a>
            </button>
          </div>
        </div>
      </div>

      <AskUs />
    </div>
  );
}
