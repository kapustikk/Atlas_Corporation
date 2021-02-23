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
            services. Our company performs all types of assembly and
            installation exploiting effective tools and equipment. Assembly and
            commissioning is the final and most critical stage for new plant
            system installation. Our experts are ready to ensure the best
            possible commissioning service, and guarantee their presence until
            your plant system is completely up and running.
          </p>

          <p className={s.textTitle}>Our range of services includes:</p>
          <ul className={s.listOfItems}>
            <li>Installation of equipment and industrial steel structures;</li>
            <li>
              Repairs of individual machine parts and components using various
              methods: gluing, applying metal-polymer composites on a worn
              surface with subsequent machining, welding with welding
              electrodes, replacing of parts of worn pieces;
            </li>
            <li>
              Installation and commissioning of production line equipment,
              including the construction of necessary metal structures;
            </li>
            <li>
              Overhaul of the customer's equipment with possible replacement of
              worn out, damaged and obsolete bearings, guiding elements, rubber
              seals, sensors, electrical cables, electric power and electronic
              equipment;
            </li>
            <li>
              Revamping of the customer's equipment with the development and
              construction of individual units and replacement of control
              systems;
            </li>
            <li>Installation of pipelines;</li>
            <li>
              Complete or partial assembling and dismantling of steel structures
              and mechanical equipment, with subsequent re-assembly and testing;
            </li>
            <li>Assembling of pipes and relative joints;</li>
            <li>
              Assembling of fluid management systems and ventilation systems.{' '}
            </li>
          </ul>
        </div>
        <img src={mainPhoto} alt="" className={s.photo} />
      </div>

      <div className={s.secondBlock}>
        <p className={s.textTitle}>Types of metal structure assembly used:</p>
        <ul className={s.listOfTypes}>
          <li>
            Assembling of small elements: A laborious and complex process with a
            number of variables in terms of the construction parameters which,
            in the end, form a single unit;
          </li>
          <li>
            Assembling element by element: Used for the construction of
            residential and industrial buildings. Installation is carried out
            using ready-made structural elements;
          </li>
          <li>
            Installation of finished structures: This presumes assembly of the
            structures from the ground upwards, followed by the fastening of all
            the nodes at height. This type of installation is used in the
            installation of power lines, pipes and other structures.
          </li>
        </ul>
      </div>

      <AskUs />
    </div>
  );
}
