import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AskUs from '../AboutUs/AskUs';
import s from '../AboutUs/AboutUs.module.css';
import logistic from '../images/logistic.jpg';
import construction from '../images/constructionMainPage.jpg';
import afterSales from '../images/after-sales-service.jpg';
import commissioning from '../images/commissioningMainPage.jpg';
import assembly from '../images/assemblyMainPage.jpg';
import supervision from '../images/supervisionMainPage.jpg';

export default function OurServices() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className={s.ourServicesDiv}>
      <h2 className={s.ourServicesMainTitle}>{t('ourServices__title')}</h2>
      <div className={s.ourServices}>
        <ul className={s.listOfOurServices}>
          <li className={s.itemOfOurServices}>
            <img src={supervision} alt="" className={s.itemsPhoto} />
            <h4 className={s.titleOfOurServices}>
              {t('services__supervision')}
            </h4>
            <p className={s.textOfOurServices}>{t('supervision__text')}</p>
            <Link
              className={s.linkToServices}
              to={{
                pathname: `/services/supervision`,
                state: {
                  from: location.pathname,
                },
              }}
            >
              {t('details')}
            </Link>
          </li>
          <li className={s.itemOfOurServices}>
            <img src={construction} alt="" className={s.itemsPhoto} />
            <h4 className={s.titleOfOurServices}>
              {t('services__construction')}
            </h4>
            <p className={s.textOfOurServices}>{t('construction__text')}</p>
            <Link
              className={s.linkToServices}
              to={{
                pathname: `/services/construction`,
                state: {
                  from: location.pathname,
                },
              }}
            >
              {t('details')}
            </Link>
          </li>
          <li className={s.itemOfOurServices}>
            <img src={afterSales} alt="" className={s.itemsPhoto} />
            <h4 className={s.titleOfOurServices}>
              {' '}
              {t('services__afterSales')}
            </h4>
            <p className={s.textOfOurServices}>{t('afterSales__text')}</p>
            <Link
              className={s.linkToServices}
              to={{
                pathname: `/services/after-sales`,
                state: {
                  from: location.pathname,
                },
              }}
            >
              {t('details')}
            </Link>
          </li>
          <li className={s.itemOfOurServices}>
            <img src={logistic} alt="" className={s.itemsPhoto} />
            <h4 className={s.titleOfOurServices}>
              {t('services__logisticSupport')}
            </h4>
            <p className={s.textOfOurServices}>{t('logisticSupport__text')}</p>
            <Link
              className={s.linkToServices}
              to={{
                pathname: `/services/logistic-support`,
                state: {
                  from: location.pathname,
                },
              }}
            >
              {t('details')}
            </Link>
          </li>
          <li className={s.itemOfOurServices}>
            <img src={assembly} alt="" className={s.itemsPhoto} />
            <h4 className={s.titleOfOurServices}>{t('services__assembly')}</h4>
            <p className={s.textOfOurServices}>{t('assembly__text')}</p>
            <Link
              className={s.linkToServices}
              to={{
                pathname: `/services/assembly`,
                state: {
                  from: location.pathname,
                },
              }}
            >
              {t('details')}
            </Link>
          </li>
          <li className={s.itemOfOurServices}>
            <img src={commissioning} alt="" className={s.itemsPhoto} />
            <h4 className={s.titleOfOurServices}>
              {' '}
              {t('services__commissioning')}
            </h4>
            <p className={s.textOfOurServices}> {t('commissioning__text')}</p>
            <Link
              className={s.linkToServices}
              to={{
                pathname: `/services/commissioning-and-start-up`,
                state: {
                  from: location.pathname,
                },
              }}
            >
              {t('details')}
            </Link>
          </li>
        </ul>
      </div>

      <div className={s.guarantee}>
        <div className={s.guaranteeFirstBlock}>
          <h3 className={s.quaranteeTitle}>
            We guarantee services highest quality
          </h3>
        </div>
        <div className={s.guaranteeSecondBlock}>
          <p className={s.quaranteeText}>
            Commissioning includes testing all equipment to ensure its proper
            operation. Our services in the field of commissioning of plants
            include checking the condition of the equipment, the correct
            connection of power and hydraulic communications, tuning, starting
            and checking the parameters of the system, compliance with the set
            pressure, temperature, flow rate of air, gas or liquid, as well as
            compliance with the phase state of the analyzed Wednesday.
          </p>
          <p className={s.quaranteeText}>
            The versatility of the company allows you to perform work of various
            levels of complexity due to the extensive experience in the field of
            industrial construction. We always follow the wishes of our
            customers to satisfy their needs in the best way.
          </p>
        </div>
      </div>

      <AskUs />
    </div>
  );
}
