import { useTranslation } from 'react-i18next';
import OurServices from '../../AboutUs/OurServices';
import s from '../Companies.module.css';
import mail from '../../images/mail.svg';
import ItalTechSvg from '../../images/ital-technology.svg';
import italPhoto from '../../images/italPage1.jpg';
import italPhoto2 from '../../images/italPage2.jpg';

export default function ItalTechnology() {
  const { t } = useTranslation();
  return (
    <div>
      <div className={s.companyDiv}>
        <div className={s.ItalTechnology}>
          <img
            src={italPhoto}
            alt="Ital technology Srl"
            className={s.companyPhoto}
          />
          <span className={s.textBlockOne}>
            <h1 className={s.companiesName}>Ital Technology Srl</h1>
            <h4 className={s.text}>{t('italTech__text1')}</h4>
            <h4 className={s.text}>{t('italTech__text2')}</h4>
            <h4 className={s.text}>
              {t('italTech__text3')}
              <ul>
                <li>ITAL TECHNOLOGY SRL ({t('italy')})</li>
                <li>ATLAS CORPORATION LLC ({t('ukraine')})</li>
                <li>ATLAS POLSKA SP. Z O.O. ({t('warsaw')})</li>
              </ul>
            </h4>
          </span>
        </div>
        <div className={s.ItalTechnologyBlockTwo}>
          <span className={s.textBlockTwo}>
            <h4 className={s.text}>{t('italTech__text4')}</h4>
            <h4 className={s.text}>{t('italTech__text5')}</h4>
          </span>
          <img
            src={italPhoto2}
            alt="Ital technology Srl"
            className={s.companyPhoto}
          />
        </div>
      </div>

      <div className={s.ourServices}>
        <OurServices />
      </div>

      <div className={s.addressBlock}>
        <span className={s.address}>
          <p>Office: Darfo Boario Terme (BS), Italy</p>
          <p className={s.telephone}>
            Italy :{' '}
            <a href="tel:393387685160" className={s.tel}>
              39 3387685160
            </a>
          </p>
          <p className={s.telephone}>
            International :{' '}
            <a href="tel:393315725689" className={s.tel}>
              39 3315725689
            </a>
          </p>
          <p>
            <a href="mailto:info@italtechnology-srl.it" className={s.mail}>
              <img src={mail} alt="" className={s.mailSvg} />
              info@italtechnology-srl.it
            </a>
          </p>
        </span>
        <img src={ItalTechSvg} alt="" className={s.svg} />
      </div>
    </div>
  );
}
