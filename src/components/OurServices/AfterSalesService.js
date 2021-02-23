import AskUs from '../AboutUs/AskUs';
import s from './Services.module.css';
import mainPhoto from '../images/after-sales.jpg';
import advantagesSvg from '../images/check-circle.svg';

export default function AfterSalesService() {
  return (
    <div className={s.supervisionDiv}>
      <div className={s.firstBlock}>
        <div className={s.textBlock}>
          <h2 className={s.title}>After-sales service</h2>
          <p className={s.text}>
            We provide maintenance interventions on industrial plant systems in
            several different ways:
          </p>
          <ul className={s.listOfItems}>
            <li>Routine maintenance (recurrent checks);</li>
            <li>
              Extraordinary maintenance (extraordinary repair operations);
            </li>
            <li>Scheduled maintenance (scheduled checks);</li>
            <li>
              Preventive maintenance (the work that prevents wear and tear of
              the plant systems).
            </li>
          </ul>
        </div>
        <img src={mainPhoto} alt="" className={s.photo} />
      </div>

      <div className={s.secondBlock}>
        <h2 className={s.title}>Advantages</h2>
        <ul className={s.advantagesList}>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>
              Optimisation of equipment repair costs
            </p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>
              Reduction in downtimes (increase in equipment performance)
            </p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>Reduction in human resources</p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>
              Availability of warranty obligations on the part of the contractor
            </p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>
              Improvement in the quality of products (reduction of rejects and
              products rejected due to faults in the production process)
            </p>
          </li>
        </ul>
      </div>

      <AskUs />
    </div>
  );
}
