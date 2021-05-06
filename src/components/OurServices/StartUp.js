import AskUs from '../AboutUs/AskUs';
import s from './Services.module.css';
import mainPhoto from '../images/startUp.jpg';
import photo1 from '../images/commissioning/photo1.jpg';
import photo2 from '../images/commissioning/photo2.jpg';
import photo3 from '../images/commissioning/photo3.jpg';
import photo4 from '../images/commissioning/photo4.jpg';

export default function StartUp() {
  return (
    <div className={s.supervisionDiv}>
      <div className={s.firstBlock}>
        <div className={s.textBlock}>
          <h2 className={s.titleStartUp}>Commissioning & start up</h2>
          <p className={s.text}>
            Commissioning involves testing all the machinery to ensure that it
            functions correctly. Our commissioning service includes checking the
            condition of the machinery, the correct connection of power supply
            and hydraulic systems, setting, starting and checking the operating
            parameters, verification of the plant system's operations,
            consistency of the set pressure, temperature and flow rates, and
            also consistency with the phase state of the analysed environment.
            This work guarantees the correct long-term operation of the system
            and eliminates the difficulties in servicing the machinery.
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
      <div className={s.supervisionPhotos}>
        <ul className={s.listOfImages}>
          <li className={s.itemsOfImages}>
            <img
              className={s.imagesForServices}
              src={photo1}
              alt="construction"
            />
          </li>
          <li className={s.itemsOfImages}>
            <img
              className={s.imagesForServices}
              src={photo2}
              alt="construction"
            />
          </li>
          <li className={s.itemsOfImages}>
            <img
              className={s.imagesForServices}
              src={photo3}
              alt="construction"
            />
          </li>
          <li className={s.itemsOfImages}>
            <img
              className={s.imagesForServices}
              src={photo4}
              alt="construction"
            />
          </li>
        </ul>
      </div>
      <AskUs />
    </div>
  );
}
