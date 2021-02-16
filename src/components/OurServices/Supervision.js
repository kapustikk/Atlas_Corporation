import s from './Services.module.css';
import mainPhoto from '../images/supervision.jpg';

export default function Supervision() {
  return (
    <div className={s.supervisionDiv}>
      <div className={s.firstBlock}>
        <div className={s.textBlock}>
          <h2 className={s.title}>Supervision</h2>
          <p className={s.text}>
            Our independent construction site supervision helps you complete the
            project on time, avoiding the occurrence of the risks while meeting
            all relevant regulations and quality standards. To guarantee
            top-quality execution of work, our technical supervisors carry out
            quality control procedures at each stage of the project. We have
            extensive experience and deep knowledge in the field of technical
            control, providing the following services:
          </p>
          <ul className={s.listOfItems}>
            <li>
              Project support from the assembling of metal and steel structures
              to the commissioning of the machines;
            </li>
            <li>
              Traceability in daily reports of controls and inspections and
              project progress using project management tools;
            </li>
            <li>
              Inspections of welding seams, thicknesses and dimensions of steel
              structures;
            </li>
            <li>Design review;</li>
            <li>
              Inspection of machines, equipment, conveyor systems to detect
              mechanical defects or malfunctions, assigning workers to conduct
              relative repairs or adjustments;
            </li>
            <li>
              Daily inspection of the quality of the work and the manpower at
              the construction site;
            </li>
            <li>
              Report on the progress of delivered engineering-related equipment;
            </li>
            <li>
              Supervision of workers to ensure compliance with all safety
              regulations;
            </li>
            <li>Verification of project documentation conformity. </li>
          </ul>
        </div>
        <img src={mainPhoto} alt="" className={s.photo} />
      </div>
    </div>
  );
}
