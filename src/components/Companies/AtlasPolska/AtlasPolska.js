import { useTranslation } from 'react-i18next';
import OurServices from '../../AboutUs/OurServices';
import s from '../Companies.module.css';
import mail from '../../images/mail.svg';
import AtlasPolSvg from '../../images/atlas-pol.svg';
import atlasPolPhoto from '../../images/Atlas_polska.jpg';
import atlasPolPhoto2 from '../../images/atlasPolPhoto2.jpg';

export default function AtlasCorporation() {
  const { t } = useTranslation();

  return (
    <div>
      <div className={s.companyDiv}>
        <div className={s.ItalTechnology}>
          <img
            src={atlasPolPhoto}
            alt="Atlas Corporation"
            className={s.companyPhoto}
          />
          <span className={s.textBlockOne}>
            <h1 className={s.companiesName}>Atlas Polska SP. Z O.O.</h1>
            <h4 className={s.text}>{t('atlasPol__text1')}</h4>
            <h4 className={s.text}>{t('atlasPol__text2')}</h4>
            <h4 className={s.text}>
              {t('atlasPol__text3')}
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
            <h4 className={s.text}>{t('atlasPol__text4')}</h4>
            <h4 className={s.text}>{t('atlasPol__text5')}</h4>
          </span>
          <img
            src={atlasPolPhoto2}
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
          <p>Office: Warsaw, Poland</p>
          <p className={s.telephone}>
            Warsaw :{' '}
            <a href="tel:48787862472" className={s.tel}>
              48 787862472
            </a>
          </p>
          <p className={s.telephone}>
            International :{' '}
            <a href="tel:393315725689" className={s.tel}>
              39 3315725689
            </a>
          </p>
          <p>
            <a
              href="mailto:office@info@atlaspolska-spzoo.pl"
              className={s.mail}
            >
              <img src={mail} alt="" className={s.mailSvg} />
              info@atlaspolska-spzoo.pl
            </a>
          </p>
        </span>
        <img src={AtlasPolSvg} alt="" className={s.svg} />
      </div>
    </div>
  );
}
