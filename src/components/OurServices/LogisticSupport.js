import AskUs from '../AboutUs/AskUs';
import s from './Services.module.css';
import mainPhoto from '../images/logisticMain.jpg';
import logistic1 from '../images/logistic1.JPG';
import logistic2 from '../images/logistic2.jpg';
import logistic3 from '../images/logistic3.jpg';
import logistic4 from '../images/logistic4.jpeg';
import logistic5 from '../images/logistic5.JPG';
import logistic6 from '../images/logistic6.JPG';
import advantagesSvg from '../images/check-circle.svg';

export default function LogisticSupport() {
  return (
    <div className={s.supervisionDiv}>
      <div className={s.firstBlock}>
        <div className={s.textBlock}>
          <h2 className={s.title}>Logistic support</h2>
          <p className={s.text}>
            Using our acquired experience and the means at our disposal, we have
            developed new solutions for the upgrading of plant systems managed
            by a highly trained team to ensure the correct realization of the
            customer's project. The Logistic Support Service involves the
            integration of personnel, transportation, inventory, equipment to
            ensure the supply and demand cycle runs smoothly and your business
            activities continue efficiently. The solution to dealing with
            increasingly complex construction requirements is to use
            state-of-the-art equipment and qualified manpower. In fact, the lack
            of human resources and infrastructures can often become a serious
            problem even for larger enterprises.
          </p>
        </div>
        <img src={mainPhoto} alt="" className={s.photo} />
      </div>

      <div className={s.specialistsDiv}>
        <h2 className={s.title}>Specialists</h2>
        <ul className={s.specialistsList}>
          <li className={s.specialistsItem}>
            <div className={s.specialistsBlock}>
              <img
                src={logistic1}
                alt="Instalers"
                className={s.specialistsPhoto}
              />
              <div className={s.subtitleDiv}>
                <h3 className={s.subtitle}>Instalers</h3>
              </div>
            </div>
          </li>

          <li className={s.specialistsItem}>
            <div className={s.specialistsBlock}>
              <img
                src={logistic2}
                alt="Instalers"
                className={s.specialistsPhoto}
              />
              <div className={s.subtitleDiv}>
                <h3 className={s.subtitle}>Welders</h3>
              </div>
            </div>
          </li>

          <li className={s.specialistsItem}>
            <div className={s.specialistsBlock}>
              <img
                src={logistic3}
                alt="Instalers"
                className={s.specialistsPhoto}
              />
              <div className={s.subtitleDiv}>
                <h3 className={s.subtitle}>Technicians</h3>
              </div>
            </div>
          </li>

          <li className={s.specialistsItem}>
            <div className={s.specialistsBlock}>
              <img
                src={logistic4}
                alt="Instalers"
                className={s.specialistsPhoto}
              />
              <div className={s.subtitleDiv}>
                <h3 className={s.subtitle}>Pipeline installers</h3>
              </div>
            </div>
          </li>

          <li className={s.specialistsItem}>
            <div className={s.specialistsBlock}>
              <img
                src={logistic5}
                alt="Instalers"
                className={s.specialistsPhoto}
              />
              <div className={s.subtitleDiv}>
                <h3 className={s.subtitle}>Mechanics</h3>
              </div>
            </div>
          </li>

          <li className={s.specialistsItem}>
            <div className={s.specialistsBlock}>
              <img
                src={logistic6}
                alt="Instalers"
                className={s.specialistsPhoto}
              />
              <div className={s.subtitleDiv}>
                <h3 className={s.subtitle}>Locksmiths</h3>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className={s.secondBlock}>
        <h2 className={s.title}>Advantages</h2>
        <ul className={s.advantagesList}>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>
              Effective use and redistribution of fixed assets
            </p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>Transparent cost control</p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>Absence of operating costs</p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>
              Wide variety of techniques and workers
            </p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>
              Availability of the newest, latest generation equipment and
              qualified personnel
            </p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>
              Possibility to use the equipment and workers, as and when
              necessary
            </p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>Delivery to the facility</p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>
              Compliance with European quality standards
            </p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>
              Opportunity to save money and time
            </p>
          </li>
          <li className={s.advantagesItem}>
            <img src={advantagesSvg} alt="" className={s.advantagesSvg} />
            <p className={s.advantagesText}>
              Possibility to receive a complete logistic support service under a
              single contract
            </p>
          </li>
        </ul>
      </div>

      <AskUs />
    </div>
  );
}
