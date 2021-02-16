import s from '../AboutUs/AboutUs.module.css';
import startUp from '../images/start-up.jpg';
import techCntrl from '../images/technical-control.jpg';
import afterSales from '../images/after-sales-service.jpg';
// import production from '../images/production.jpg';
// import mounting from '../images/mounting.jpg';
// import techSec from '../images/t-security.jpg';

export default function OurServices() {
  return (
    <div className={s.ourServicesDiv}>
      <h3 className={s.ourServicesTitle}>What we do</h3>
      <h2 className={s.ourServicesMainTitle}>Our Services</h2>
      <div className={s.ourServices}>
        <ul className={s.listOfOurServices}>
          <li className={s.itemOfOurServices}>
            <img src={startUp} alt="" className={s.itemsPhoto} />
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
            <img src={techCntrl} alt="" className={s.itemsPhoto} />
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
          {/* <li className={s.itemOfOurServices}>
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
            </li> */}
        </ul>
      </div>
      <button type="button" className={s.button}>
        All services
      </button>
    </div>
  );
}
