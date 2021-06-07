import { useTranslation } from 'react-i18next';
import AskUs from '../AboutUs/AskUs';
import s from './Services.module.css';
import mainPhoto from '../images/startUp.jpg';
import photo1 from '../images/commissioning/photo1.jpg';
import photo2 from '../images/commissioning/photo2.jpg';
import photo3 from '../images/commissioning/photo3.jpg';
import photo4 from '../images/commissioning/photo4.jpg';

export default function StartUp() {
  const { t } = useTranslation();

  return (
    <div className={s.supervisionDiv}>
      <div className={s.firstBlock}>
        <div className={s.textBlock}>
          <h2 className={s.titleStartUp}>{t('services__commissioning')}</h2>
          <p className={s.text}>{t('startUpPage__text1')}</p>
          <p className={s.text}>{t('startUpPage__text2')}</p>
        </div>
        <img src={mainPhoto} alt="" className={s.photo} />
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
