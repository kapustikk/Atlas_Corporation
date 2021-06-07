import { useTranslation } from 'react-i18next';
import OurServices from '../../AboutUs/OurServices';
import s from '../Companies.module.css';
import mail from '../../images/mail.svg';
import AtlasCorpSvg from '../../images/atlasMain.png';
import atlasPhoto from '../../images/atlasCorp.jpg';
import atlasPhoto2 from '../../images/atlasCorp2.jpg';

export default function AtlasCorporation() {
  const { t } = useTranslation();

  return (
    <div>
      <div className={s.companyDiv}>
        <div className={s.ItalTechnology}>
          <img
            src={atlasPhoto}
            alt="Atlas Corporation"
            className={s.companyPhoto}
          />
          <span className={s.textBlockOne}>
            <h1 className={s.companiesName}>Atlas Corporation LLC</h1>
            <h4 className={s.text}>{t('atlasCorp__text1')}</h4>
            <h4 className={s.text}>{t('atlasCorp__text2')}</h4>
            <h4 className={s.text}>
              {t('atlasCorp__text3')}
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
            <h4 className={s.text}>{t('atlasCorp__text4')}</h4>
            <h4 className={s.text}>{t('atlasCorp__text5')}</h4>
          </span>
          <img
            src={atlasPhoto2}
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
          <p>Office: Kyiv, Ukraine</p>
          <p className={s.telephone}>
            Ukraine :{' '}
            <a href="tel:380952811515" className={s.tel}>
              38 0952811515
            </a>
          </p>
          <p className={s.telephone}>
            International :{' '}
            <a href="tel:393499344027" className={s.tel}>
              39 3499344027
            </a>
          </p>
          <p>
            <a href="mailto:office@atlascorporation-llc.com" className={s.mail}>
              <img src={mail} alt="" className={s.mailSvg} />
              office@atlascorporation-llc.com
            </a>
          </p>
        </span>
        <img src={AtlasCorpSvg} alt="" className={s.svg} />
      </div>
    </div>
  );
}
