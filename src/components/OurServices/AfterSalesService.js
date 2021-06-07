import AskUs from '../AboutUs/AskUs';
import { useTranslation } from 'react-i18next';
import s from './Services.module.css';
import mainPhoto from '../images/after-sales.jpg';
import photo1 from '../images/aftersales/photo1.jpg';
import photo2 from '../images/aftersales/photo2.jpg';
import photo3 from '../images/aftersales/photo3.jpg';
import photo4 from '../images/aftersales/photo4.jpg';
import advantagesSvg from '../images/check-circle.svg';

export default function AfterSalesService() {
  const { t } = useTranslation();

  return (
    <div className={s.supervisionDiv}>
      <div className={s.firstBlock}>
        <div className={s.textBlock}>
          <h2 className={s.title}>{t('afterSalesPage__title')}</h2>
          <p className={s.text}>{t('afterSalesPage__text')}</p>
          <ul className={s.listOfItems}>
            <li>{t('afterSalesPage__item1')}</li>
            <li>{t('afterSalesPage__item2')}</li>
            <li>{t('afterSalesPage__item3')}</li>
            <li>{t('afterSalesPage__item4')}</li>
          </ul>
        </div>
        <img src={mainPhoto} alt="" className={s.photo} />
      </div>

      <div className={s.secondBlock}>
        <h2 className={s.title}>{t('advantages__title')}</h2>
        <ul className={s.advantagesList}>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>{t('advantages__asp1')}</p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>{t('advantages__asp2')}</p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>{t('advantages__asp3')}</p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>{t('advantages__asp4')}</p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>{t('advantages__asp5')}</p>
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
