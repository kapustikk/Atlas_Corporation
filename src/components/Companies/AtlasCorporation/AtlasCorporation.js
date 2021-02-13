import s from '../Companies.module.css';
import mail from '../../images/mail.svg';
import AtlasCorp from '../../images/atlasMain.png';

export default function ItalTechnology() {
  return (
    <div className={s.modalCompanyInfo}>
      <span>
        <p>Office: Kyiv, Ukraine</p>
        <p className={s.telephone}>
          Ukraine :{' '}
          <a href="tel:380952811515" className={s.tel}>
            38 0952811515
          </a>
        </p>
        <p className={s.telephone}>
          International :{' '}
          <a href="tel:393499344027" className={s.tel}>
            39 3499344027
          </a>
        </p>
        <p>
          <a href="mailto:office@atlascorporation-llc.com" className={s.mail}>
            <img src={mail} alt="" className={s.mailSvg} />
            office@atlascorporation-llc.com
          </a>
        </p>
      </span>
      <img src={AtlasCorp} alt="" className={s.svg} />
    </div>
  );
}
