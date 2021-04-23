import AskUs from '../AboutUs/AskUs';
import s from './Services.module.css';
import mainPhoto from '../images/assembly.jpg';

export default function Assembly() {
  return (
    <div className={s.supervisionDiv}>
      <div className={s.firstBlock}>
        <div className={s.textBlock}>
          <h2 className={s.title}>Assembly</h2>
          <p className={s.text}>
            We guarantee the best assembly, installation and maintenance
            services. Assembly and commissioning is the final and most critical
            stage for new plant system installation. Our experts are ready to
            ensure the best possible commissioning service, and guarantee their
            presence until your plant system is completely up and running.
          </p>

          <p className={s.textTitle}>Our range of services includes:</p>
          <ul className={s.listOfItems}>
            <li>Installation of machinery and industrial steel structures;</li>
            <li>
              Repairs of individual machine parts and components using various
              methods: gluing, applying metal-polymer composites on a worn
              surface with subsequent machining, welding with welding
              electrodes/mig-mag/tig, replacing of parts of worn pieces;
            </li>
            <li>
              Installation and commissioning of production line machinery,
              including the construction of necessary metal structures;
            </li>
            <li>
              Overhaul of the customer's machinery with possible replacement of
              worn out, damaged and obsolete bearings, guiding elements, rubber
              seals, sensors, electrical cables, electric power and electronic
              equipment;
            </li>
            <li>
              Revamping of the customer's machinery with the development and
              construction of individual units and replacement of control
              systems;
            </li>
            <li>Installation of pipelines.</li>
          </ul>
        </div>
        <img src={mainPhoto} alt="" className={s.photo} />
      </div>

      <div className={s.secondBlock}>
        <p className={s.textTitle}>Assembly:</p>
        <ul className={s.listOfTypes}>
          <li>
            Complete or partial assembling and dismantling of steel structures
            and mechanical machinery, with subsequent re-assembly and testing;
          </li>
        </ul>
      </div>

      <AskUs />
    </div>
  );
}
