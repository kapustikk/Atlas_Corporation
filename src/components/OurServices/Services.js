import { Link, useLocation } from 'react-router-dom';
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

  return (
    <div className={s.ourServicesDiv}>
      <h2 className={s.ourServicesMainTitle}>Services</h2>
      <div className={s.ourServices}>
        <ul className={s.listOfOurServices}>
          <li className={s.itemOfOurServices}>
            <img src={supervision} alt="" className={s.itemsPhoto} />
            <h4 className={s.titleOfOurServices}>Supervision</h4>
            <p className={s.textOfOurServices}>
              Our independent technical control will allow you to complete the
              project in a timely manner, avoiding the occurrence of risks and
              observing all relevant ...
            </p>
            <Link
              className={s.linkToServices}
              to={{
                pathname: `/services/supervision`,
                state: {
                  from: location.pathname,
                },
              }}
            >
              Details
            </Link>
          </li>
          <li className={s.itemOfOurServices}>
            <img src={construction} alt="" className={s.itemsPhoto} />
            <h4 className={s.titleOfOurServices}>Construction</h4>
            <p className={s.textOfOurServices}>
              We boast vast experience in the production of bridge structures,
              lifting equipment and related structures, furnaces, industrial air
              treatment systems...
            </p>
            <Link
              className={s.linkToServices}
              to={{
                pathname: `/services/construction`,
                state: {
                  from: location.pathname,
                },
              }}
            >
              Details
            </Link>
          </li>
          <li className={s.itemOfOurServices}>
            <img src={afterSales} alt="" className={s.itemsPhoto} />
            <h4 className={s.titleOfOurServices}>After-sales service</h4>
            <p className={s.textOfOurServices}>
              We provide after-sales service in several ways, Periodic
              maintenance (periodic inspection) ...
            </p>
            <Link
              className={s.linkToServices}
              to={{
                pathname: `/services/after-sales`,
                state: {
                  from: location.pathname,
                },
              }}
            >
              Details
            </Link>
          </li>
          <li className={s.itemOfOurServices}>
            <img src={logistic} alt="" className={s.itemsPhoto} />
            <h4 className={s.titleOfOurServices}>Logistic support</h4>
            <p className={s.textOfOurServices}>
              Using free tangible assets and the high mobilization readiness of
              our specialists, we have developed a new business solution ...
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
              Details
            </Link>
          </li>
          <li className={s.itemOfOurServices}>
            <img src={assembly} alt="" className={s.itemsPhoto} />
            <h4 className={s.titleOfOurServices}>Assembly</h4>
            <p className={s.textOfOurServices}>
              Complete or partial assembling and dismantling of steel structures
              and mechanical machinery, with subsequent re-assembly and
              testing...
            </p>
            <Link
              className={s.linkToServices}
              to={{
                pathname: `/services/assembly`,
                state: {
                  from: location.pathname,
                },
              }}
            >
              Details
            </Link>
          </li>
          <li className={s.itemOfOurServices}>
            <img src={commissioning} alt="" className={s.itemsPhoto} />
            <h4 className={s.titleOfOurServices}>Commissioning & start-up</h4>
            <p className={s.textOfOurServices}>
               Our commissioning service includes checking the condition of the
              equipment, the correct connection of power supply and hydraulic
              systems, setting, starting and checking the operating
              parameters...
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
              Details
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
