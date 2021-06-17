import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';
import AskUs from '../AboutUs/AskUs';
import s from './Services.module.css';
import mainPhoto from '../images/assembly.jpg';
import photo1 from '../images/assembly/photo1.jpg';
import photo2 from '../images/assembly/photo2.jpg';
import photo3 from '../images/assembly/photo3.jpg';
import photo4 from '../images/assembly/photo4.jpg';
import photo5 from '../images/assembly/photo5.jpg';
import photo6 from '../images/assembly/photo6.jpg';

export default function Assembly() {
  const { t } = useTranslation();

  return (
    <div className={s.supervisionDiv}>
      <Fade clear>
        <div className={s.firstBlock}>
          <div className={s.textBlock}>
            <h2 className={s.title}>{t('services__assembly')}</h2>
            <p className={s.text}>{t('assemblyPage__text')}</p>

            <p className={s.textTitle}>{t('assembly__list')}</p>
            <ul className={s.listOfItems}>
              <li>{t('assembly__item1')}</li>
              <li>{t('assembly__item2')}</li>
              <li>{t('assembly__item3')}</li>
              <li>{t('assembly__item4')}</li>
              <li>{t('assembly__item5')}</li>
              <li>{t('assembly__item6')}</li>
            </ul>
          </div>
          <img src={mainPhoto} alt="" className={s.photo} />
        </div>

        <div className={s.secondBlock}>
          <p className={s.textTitle}>{t('services__assembly')}:</p>
          <ul className={s.listOfTypes}>
            <li>{t('assembly__Item')}</li>
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
