import AskUs from '../AboutUs/AskUs';
import s from './Services.module.css';
import mainPhoto from '../images/startUp.jpg';

export default function StartUp() {
  return (
    <div className={s.supervisionDiv}>
      <div className={s.firstBlock}>
        <div className={s.textBlock}>
          <h2 className={s.titleStartUp}>Commissioning & start up</h2>
          <p className={s.text}>
            Commissioning involves testing all the equipment to ensure that it
            functions correctly. Our commissioning service includes checking the
            condition of the equipment, the correct connection of power supply
            and hydraulic systems, setting, starting and checking the operating
            parameters, verification of the plant system's operations,
            consistency of the set pressure, temperature and flow rates, and
            also consistency with the phase state of the analysed environment.
            This work guarantees the correct long-term operation of the system
            and eliminates the difficulties in servicing the equipment.
          </p>
          <p className={s.text}>
            The company's multiple skills and expertise means it can perform
            work of varying complexity, having extensive experience in the
            industrial mechanical structure sector. We always follow our
            customers' instructions to best meet their requirements.
          </p>
        </div>
        <img src={mainPhoto} alt="" className={s.photo} />
      </div>

      <AskUs />
    </div>
  );
}
