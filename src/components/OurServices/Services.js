import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';
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
      <Fade clear>
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
              <p className={s.textOfOurServices}>
                {t('logisticSupport__text')}
              </p>
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
              <h4 className={s.titleOfOurServices}>
                {t('services__assembly')}
              </h4>
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
      </Fade>
      <Fade clear>
        <AskUs />
      </Fade>
    </div>
  );
}
