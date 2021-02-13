import s from '../AboutUs/AboutUs.module.css';
import three from '../images/03.svg';
import thirtyfour from '../images/34.svg';

export default function Map() {
  return (
    <div className={s.mapDiv}>
      <div className={s.mapText}>
        <h4 className={s.ourWorkText}>Our work</h4>
        <h2 className={s.mapMainText}>We work all over the world</h2>
        <p className={s.ourWorkDescription}>
          <img src={three} alt="" className={s.amountOurWork} />
          Central offices
        </p>
        <p className={s.ourWorkDescription}>
          <img src={thirtyfour} alt="" className={s.amountOurWork} />
          Countries in which we have gained practical experience and every year
          their number is growing
        </p>
      </div>
      <div className={s.map}></div>
    </div>
  );
}
