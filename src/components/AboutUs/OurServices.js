import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import s from '../AboutUs/AboutUs.module.css';
import logistic from '../images/logistic.jpg';
import construction from '../images/constructionMainPage.jpg';
import afterSales from '../images/after-sales-service.jpg';
import commissioning from '../images/commissioningMainPage.jpg';
import assembly from '../images/assemblyMainPage.jpg';
import supervision from '../images/supervisionMainPage.jpg';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function OurServices() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className={s.ourServicesDiv}>
      {/* <h3 className={s.ourServicesTitle}>What we do</h3> */}
      <h2 className={s.ourServicesMainTitle}>{t('ourServices__title')}</h2>
      <div className={s.ourServices}>
        <Swiper
          autoplay={{ delay: 2000 }}
          className={s.swiper}
          spaceBetween={300}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          <ul className={s.listOfOurServices}>
            <SwiperSlide className={s.slides}>
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
            </SwiperSlide>

            <SwiperSlide className={s.slides}>
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
            </SwiperSlide>

            <SwiperSlide className={s.slides}>
              <li className={s.itemOfOurServices}>
                <img src={afterSales} alt="" className={s.itemsPhoto} />
                <h4 className={s.titleOfOurServices}>
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
            </SwiperSlide>

            <SwiperSlide className={s.slides}>
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
            </SwiperSlide>

            <SwiperSlide className={s.slides}>
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
            </SwiperSlide>

            <SwiperSlide className={s.slides}>
              <li className={s.itemOfOurServices}>
                <img src={commissioning} alt="" className={s.itemsPhoto} />
                <h4 className={s.titleOfOurServices}>
                  {t('services__commissioning')}
                </h4>
                <p className={s.textOfOurServices}>
                   {t('commissioning__text')}
                </p>
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
            </SwiperSlide>
          </ul>
        </Swiper>

        {/* <ul className={s.listOfOurServices}>
          <li className={s.itemOfOurServices}>
            <img src={supervision} alt="" className={s.itemsPhoto} />
            <h4 className={s.titleOfOurServices}>Supervision</h4>
            <p className={s.textOfOurServices}>
              Modernization of customer equipment with the ability to develop /
              manufacture individual components and replace control systems ...
            </p>
            <a
              href="http://localhost:3001/our-companies"
              className={s.linkToServices}
              aria-label="Start-up overhead work"
            >
              Details{' '}
            </a>
          </li>
          <li className={s.itemOfOurServices}>
            <img src={construction} alt="" className={s.itemsPhoto} />
            <h4 className={s.titleOfOurServices}>Construction</h4>
            <p className={s.textOfOurServices}>
              Our independent technical control will allow you to complete the
              project in a timely manner, avoiding the occurrence of risks and
              observing all relevant ...
            </p>
            <a
              href="http://localhost:3001/our-companies"
              className={s.linkToServices}
              aria-label="Technical control"
            >
              Details{' '}
            </a>
          </li>
          <li className={s.itemOfOurServices}>
            <img src={afterSales} alt="" className={s.itemsPhoto} />
            <h4 className={s.titleOfOurServices}>After-sales service</h4>
            <p className={s.textOfOurServices}>
              We provide after-sales service in several ways, Periodic
              maintenance (periodic inspection) ...
            </p>
            <a
              href="http://localhost:3001/our-companies"
              className={s.linkToServices}
              aria-label="After-sales service"
            >
              Details{' '}
            </a>
          </li>
          <li className={s.itemOfOurServices}>
              <img src={techSec} alt="" className={s.itemsPhoto} />
              <h4 className={s.titleOfOurServices}>
                Production and technical security
              </h4>
              <p className={s.textOfOurServices}>
                Using free tangible assets and the high mobilization readiness
                of our specialists, we have developed a new business solution
                ...
              </p>
              <a
                href="http://localhost:3001/our-companies"
                className={s.linkToServices}
                aria-label="Production and technical security"
              >
                Details{' '}
              </a>
            </li>
            <li className={s.itemOfOurServices}>
              <img src={mounting} alt="" className={s.itemsPhoto} />
              <h4 className={s.titleOfOurServices}>Mounting</h4>
              <p className={s.textOfOurServices}>
                Full or partial assembly of new and dismantling of metal
                structures and mechanical equipment with their subsequent
                restoration and adjustment ...
              </p>
              <a
                href="http://localhost:3001/our-companies"
                className={s.linkToServices}
                aria-label="Mounting"
              >
                Details{' '}
              </a>
            </li>
            <li className={s.itemOfOurServices}>
              <img src={production} alt="" className={s.itemsPhoto} />
              <h4 className={s.titleOfOurServices}>Production</h4>
              <p className={s.textOfOurServices}>
                Thanks to our services and products, we satisfy the needs of
                customers represented in various industries, such as ...
              </p>
              <a
                href="http://localhost:3001/our-companies"
                className={s.linkToServices}
                aria-label="Production"
              >
                Details{' '}
              </a>
            </li>
        </ul> */}
      </div>
      <Link
        className={s.linkToCompanies}
        to={{
          pathname: `/services`,
          state: {
            from: location.pathname,
          },
        }}
      >
        <button type="button" className={s.buttonServices}>
          All services
        </button>
      </Link>
    </div>
  );
}
