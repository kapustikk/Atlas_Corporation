import AskUs from '../AboutUs/AskUs';
import { useTranslation } from 'react-i18next';
import s from './Services.module.css';
import mainPhoto from '../images/logisticMain.jpg';
import logistic1 from '../images/logistic1.JPG';
import logistic2 from '../images/logistic2.jpg';
import logistic3 from '../images/logistic3.jpg';
import logistic4 from '../images/logistic4.jpeg';
import logistic5 from '../images/logistic5.JPG';
import logistic6 from '../images/logistic6.JPG';
import photo1 from '../images/logistic/photo1.jpg';
import photo2 from '../images/logistic/photo2.jpg';
import photo3 from '../images/logistic/photo3.jpg';
import photo4 from '../images/logistic/photo4.jpg';
import advantagesSvg from '../images/check-circle.svg';

export default function LogisticSupport() {
  const { t } = useTranslation();

  return (
    <div className={s.supervisionDiv}>
      <div className={s.firstBlock}>
        <div className={s.textBlock}>
          <h2 className={s.title}>{t('services__logisticSupport')}</h2>
          <p className={s.text}>{t('logisticPage__text')}</p>
        </div>
        <img src={mainPhoto} alt="" className={s.photo} />
      </div>

      <div className={s.specialistsDiv}>
        <h2 className={s.title}>{t('specialists__title')}</h2>
        <ul className={s.specialistsList}>
          <li className={s.specialistsItem}>
            <div className={s.specialistsBlock}>
              <img
                src={logistic1}
                alt="Instalers"
                className={s.specialistsPhoto}
              />
              <div className={s.subtitleDiv}>
                <h3 className={s.subtitle}>{t('specialist__item1')}</h3>
              </div>
            </div>
          </li>

          <li className={s.specialistsItem}>
            <div className={s.specialistsBlock}>
              <img
                src={logistic2}
                alt="Instalers"
                className={s.specialistsPhoto}
              />
              <div className={s.subtitleDiv}>
                <h3 className={s.subtitle}>{t('specialist__item2')}</h3>
              </div>
            </div>
          </li>

          <li className={s.specialistsItem}>
            <div className={s.specialistsBlock}>
              <img
                src={logistic3}
                alt="Instalers"
                className={s.specialistsPhoto}
              />
              <div className={s.subtitleDiv}>
                <h3 className={s.subtitle}>{t('specialist__item3')}</h3>
              </div>
            </div>
          </li>

          <li className={s.specialistsItem}>
            <div className={s.specialistsBlock}>
              <img
                src={logistic4}
                alt="Instalers"
                className={s.specialistsPhoto}
              />
              <div className={s.subtitleDiv}>
                <h3 className={s.subtitle}>{t('specialist__item4')}</h3>
              </div>
            </div>
          </li>

          <li className={s.specialistsItem}>
            <div className={s.specialistsBlock}>
              <img
                src={logistic5}
                alt="Instalers"
                className={s.specialistsPhoto}
              />
              <div className={s.subtitleDiv}>
                <h3 className={s.subtitle}>{t('specialist__item5')}</h3>
              </div>
            </div>
          </li>

          <li className={s.specialistsItem}>
            <div className={s.specialistsBlock}>
              <img
                src={logistic6}
                alt="Instalers"
                className={s.specialistsPhoto}
              />
              <div className={s.subtitleDiv}>
                <h3 className={s.subtitle}>{t('specialist__item6')}</h3>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className={s.secondBlock}>
        <h2 className={s.title}>{t('advantages__title')}</h2>
        <ul className={s.advantagesList}>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>{t('advantages__logistic1')}</p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>{t('advantages__logistic2')}</p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>{t('advantages__logistic3')}</p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>{t('advantages__logistic4')}</p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>{t('advantages__logistic5')}</p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>{t('advantages__logistic6')}</p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>{t('advantages__logistic7')}</p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>{t('advantages__logistic8')}</p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>{t('advantages__logistic9')}</p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>{t('advantages__logistic10')}</p>
          </li>
        </ul>
      </div>

      <div className={s.supervisionPhotos}>
        <ul className={s.listOfImages}>
          <li className={s.itemsOfImages}>
            <img
              className={s.imagesForServices}
              src={photo1}
              alt="construction"
            />
          </li>
          <li className={s.itemsOfImages}>
            <img
              className={s.imagesForServices}
              src={photo2}
              alt="construction"
            />
          </li>
          <li className={s.itemsOfImages}>
            <img
              className={s.imagesForServices}
              src={photo3}
              alt="construction"
            />
          </li>
          <li className={s.itemsOfImages}>
            <img
              className={s.imagesForServices}
              src={photo4}
              alt="construction"
            />
          </li>
        </ul>
      </div>

      <AskUs />
    </div>
  );
}
