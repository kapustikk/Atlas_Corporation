import AskUs from '../AboutUs/AskUs';
import s from './Services.module.css';
import mainPhoto from '../images/assembly.jpg';
import photo1 from '../images/assembly/photo1.jpg';
import photo2 from '../images/assembly/photo2.jpg';
import photo3 from '../images/assembly/photo3.jpg';
import photo4 from '../images/assembly/photo4.jpg';
import photo5 from '../images/assembly/photo5.jpg';
import photo6 from '../images/assembly/photo6.jpg';

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
          <li className={s.itemsOfImages}>
            <img
              className={s.imagesForServices}
              src={photo5}
              alt="construction"
            />
          </li>
          <li className={s.itemsOfImages}>
            <img
              className={s.imagesForServices}
              src={photo6}
              alt="construction"
            />
          </li>
        </ul>
      </div>

      <AskUs />
    </div>
  );
}
