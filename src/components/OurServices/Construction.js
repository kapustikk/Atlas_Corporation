import AskUs from '../AboutUs/AskUs';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';
import s from './Services.module.css';
import mainPhoto from '../images/construction.jpg';
import photo1 from '../images/construction/photo1.jpg';
import photo2 from '../images/construction/photo2.jpg';
import photo3 from '../images/construction/photo3.jpg';
import photo4 from '../images/construction/photo4.jpg';
import photo5 from '../images/construction/photo5.jpg';
import photo6 from '../images/construction/photo6.jpg';

export default function Construction() {
  const { t } = useTranslation();

  return (
    <div className={s.supervisionDiv}>
      <Fade clear>
        <div className={s.firstBlock}>
          <div className={s.textBlock}>
            <h2 className={s.title}>{t('services__construction')}</h2>
            <p className={s.text}>{t('constructionPage__text')}</p>
            <p className={s.text}>{t('processList')}</p>
            <ul className={s.listOfItems}>
              <li>{t('processItem1')}</li>
              <li>{t('processItem2')}</li>
              <li>{t('processItem3')}</li>
              <li>{t('processItem4')}</li>
            </ul>
          </div>
          <img src={mainPhoto} alt="" className={s.photo} />
        </div>
      </Fade>

      <Fade clear>
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
            <li className={s.itemsOfImages}>
              <img
                className={s.imagesForServices}
                src={photo5}
                alt="construction"
              />
            </li>
            <li className={s.itemsOfImages}>
              <img
                className={s.imagesForServices}
                src={photo6}
                alt="construction"
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
