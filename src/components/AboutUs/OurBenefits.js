import { useTranslation } from 'react-i18next';
import s from '../AboutUs/AboutUs.module.css';

import component1 from '../images/component-1.svg';
import component2 from '../images/component-2.svg';
import component3 from '../images/component-3.svg';
import component4 from '../images/component-4.svg';
import component5 from '../images/component-5.svg';

export default function OurBenefits() {
  const { t } = useTranslation();

  return (
    <div className={s.benefitsDiv}>
      <div className={s.benefits}>
        {/* <h3 className={s.titleBenefits}>Why we</h3> */}
        <h2 className={s.mainTitleBenefits}>{t('benefits__title')}</h2>
        <div className={s.allBenefits}>
          <div className={s.components}>
            <h2 className={s.number}>01</h2>
            <h4 className={s.subtext}>{t('benefits__professionalism')}</h4>
            <img src={component1} alt="" className={s.benefitsSvg} />
          </div>
          <div className={s.components}>
            <h2 className={s.number}>02</h2>
            <h4 className={s.subtext}>{t('benefits__quality')}</h4>
            <img src={component2} alt="" className={s.benefitsSvg} />
          </div>
          <div className={s.components}>
            <h2 className={s.number}>03</h2>
            <h4 className={s.subtext}>{t('benefits__reliability')}</h4>
            <img src={component3} alt="" className={s.benefitsSvg} />
          </div>
          <div className={s.components}>
            <h2 className={s.number}>04</h2>
            <h4 className={s.subtext}>{t('benefits__innovation')}</h4>
            <img src={component4} alt="" className={s.benefitsSvg} />
          </div>
          <div className={s.components}>
            <h2 className={s.number}>05</h2>
            <h4 className={s.subtext}>{t('benefits__safety')}</h4>
            <img src={component5} alt="" className={s.benefitsSvg} />
          </div>
        </div>
      </div>
    </div>
  );
}
