import React from 'react';
import AskUs from '../AboutUs/AskUs';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';
import s from './Services.module.css';
import mainPhoto from '../images/supervision.jpg';
import advantagesSvg from '../images/check-circle.svg';
import photo1 from '../images/supervision/photo1.jpg';
import photo2 from '../images/supervision/photo2.jpg';
import photo3 from '../images/supervision/photo3.jpg';
import photo4 from '../images/supervision/photo4.jpg';

export default function Supervision() {
  const { t } = useTranslation();

  return (
    <div className={s.supervisionDiv}>
      <Fade clear>
        <div className={s.firstBlock}>
          <div className={s.textBlock}>
            <h2 className={s.title}>{t('services__supervision')}</h2>
            <p className={s.text}>{t('supervisionPage__text')}</p>
            <ul className={s.listOfItems}>
              <li>{t('supervisionPage__item1')}</li>
              <li>{t('supervisionPage__item2')}</li>
              <li>{t('supervisionPage__item3')}</li>
              <li>{t('supervisionPage__item4')}</li>
              <li>{t('supervisionPage__item5')}</li>
              <li>{t('supervisionPage__item6')}</li>
              <li>{t('supervisionPage__item7')}</li>
              <li>{t('supervisionPage__item8')}</li>
              <li>{t('supervisionPage__item9')}</li>
            </ul>
          </div>
          <img src={mainPhoto} alt="" className={s.photo} />
        </div>
      </Fade>

      <Fade clear>
        <div className={s.secondBlock}>
          <h2 className={s.title}>{t('advantages__title')}</h2>
          <ul className={s.advantagesList}>
            <li className={s.advantagesItem}>
              <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
              <p className={s.advantagesText}>{t('advantages1')}</p>
            </li>
            <li className={s.advantagesItem}>
              <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
              <p className={s.advantagesText}>{t('advantages2')}</p>
            </li>
            <li className={s.advantagesItem}>
              <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
              <p className={s.advantagesText}>{t('advantages3')}</p>
            </li>
            <li className={s.advantagesItem}>
              <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
              <p className={s.advantagesText}>{t('advantages4')}</p>
            </li>
          </ul>
        </div>
      </Fade>

      <Fade clear>
        <div className={s.supervisionPhotos}>
          <ul className={s.listOfImages}>
            <li className={s.itemsOfImages}>
              <img
                className={s.imagesForServices}
                src={photo1}
                alt="supervision"
              />
            </li>
            <li className={s.itemsOfImages}>
              <img
                className={s.imagesForServices}
                src={photo2}
                alt="supervision"
              />
            </li>
            <li className={s.itemsOfImages}>
              <img
                className={s.imagesForServices}
                src={photo3}
                alt="supervision"
              />
            </li>
            <li className={s.itemsOfImages}>
              <img
                className={s.imagesForServices}
                src={photo4}
                alt="supervision"
              />
            </li>
          </ul>
        </div>
      </Fade>
      <Fade clear>
        <AskUs />
      </Fade>
    </div>
  );
}
