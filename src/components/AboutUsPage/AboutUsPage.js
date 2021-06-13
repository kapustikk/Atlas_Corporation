import React from 'react';
import { useTranslation } from 'react-i18next';
import OurCompanies from '../AboutUs/OurCompanies';
import AskUs from '../AboutUs/AskUs';
import s from '../AboutUsPage/AboutUsPage.module.css';
import image1 from '../images/aboutUs1.jpg';
import image2 from '../images/t-security.jpg';
import brochureEng from '../images/brochureEng.jpg';
import brochureItl from '../images/brochureItl.jpg';

export default function AboutUsPage() {
  const { t } = useTranslation();

  return (
    <div>
      <div className={s.aboutUsPage}>
        <div className={s.info}>
          <img src={image1} alt="" className={s.aboutUsPhoto} />
          <span className={s.textBlockOne}>
            <h1 className={s.aboutUsTitle}>{t('aboutUs__mainTitle')}</h1>
            <p className={s.textTitle}>{t('aboutUs__title')}</p>
            <h2 className={s.title}>{t('aboutUs__vision')}</h2>
            <h4 className={s.text}>{t('aboutUs__visionText')}</h4>
            <h3>{t('aboutUs__values')}</h3>
            <h4 className={s.text}>
              {t('aboutUs__valuesText')}
              <ul>
                <li>{t('aboutUs__value1')}</li>
                <li>{t('aboutUs__value2')}</li>
                <li>{t('aboutUs__value3')}</li>
                <li>{t('aboutUs__value4')}</li>
                <li>{t('aboutUs__value5')}</li>
              </ul>
            </h4>
          </span>
        </div>
        <div className={s.info}>
          <div className={s.textBlockTwo}>
            <h2 className={s.titleTwo}>{t('aboutUs__mission')}</h2>
            <h4 className={s.textTwo}>{t('aboutUs_missionText1')}</h4>
            <h4 className={s.textTwo}>{t('aboutUs_missionText2')}</h4>
            <img src={image2} alt=" " className={s.aboutUsPhoto} />
          </div>
        </div>
      </div>

      <div className={s.ourCompanies}>
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
