import { Link, useLocation } from 'react-router-dom';
import s from '../AboutUs/AboutUs.module.css';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.jpg';
import arrowRightForDetails from '../images/arrowRightForDetails.svg';

export default function CompletedProjects() {
  const location = useLocation();

  return (
    <div className={s.compleatedProjectsDiv}>
      <div className={s.compleatedProjects}>
        <h3 className={s.titleProjects}>Our work</h3>
        <h2 className={s.mainTitleProjects}>Completed projects</h2>
        <ul className={s.listOfProjects}>
          <li className={s.itemProject}>
            <img
              src={project1}
              alt="technical control"
              className={s.projectPhoto}
            />
            <span className={s.textProjects}>
              <p className={s.projectText}>
                Furnace assembly for aluminum billets from the foundation up to
                rock wool insulation and inox plates cladding. Assembly of the
                fans, exhaust duct and gas system in Netherlands
              </p>
              <button type="button" className={s.buttonToProject}>
                Details{' '}
                <img
                  src={arrowRightForDetails}
                  alt=""
                  className={s.arrowRightForDetails}
                />
              </button>
            </span>
          </li>
          <li className={s.itemProject}>
            <img
              src={project2}
              alt="technical control"
              className={s.projectPhoto}
            />
            <span className={s.textProjects}>
              <p className={s.projectText}>
                Maintenance of furnace pusher wagons. Teeth
                replacementrestoration. Frame cracks welding. Full re-assembly
                of the wagons
              </p>
              <button type="button" className={s.buttonToProject}>
                Details{' '}
                <img
                  src={arrowRightForDetails}
                  alt=""
                  className={s.arrowRightForDetails}
                />
              </button>
            </span>
          </li>
          <li className={s.itemProject}>
            <img
              src={project3}
              alt="technical control"
              className={s.projectPhoto}
            />
            <span className={s.textProjects}>
              <p className={s.projectText}>
                Supervision of the mechanical works, equipment installation
                supervision (ID Fans, pneumatic transport systems, blowers,
                compressors, dryers etc.), electrical works supervision.
                Equipment setup/adjustment. USA
              </p>
              <button type="button" className={s.buttonToProject}>
                Details{' '}
                <img
                  src={arrowRightForDetails}
                  alt=""
                  className={s.arrowRightForDetails}
                />
              </button>
            </span>
          </li>
          <li className={s.itemProject}>
            <img
              src={project4}
              alt="technical control"
              className={s.projectPhoto}
            />
            <span className={s.textProjects}>
              <p className={s.projectText}>
                Replacement of booster fan case, expansion joints, replacement
                of ducts including curved and straight segments, diameter 2800mm
              </p>
              <button type="button" className={s.buttonToProject}>
                Details{' '}
                <img
                  src={arrowRightForDetails}
                  alt=""
                  className={s.arrowRightForDetails}
                />
              </button>
            </span>
          </li>
        </ul>
        <Link
          className={s.linkToCompanies}
          to={{
            pathname: `/projects`,
            state: {
              from: location.pathname,
            },
          }}
        >
          <button type="button" className={s.button}>
            All projects
          </button>
        </Link>
      </div>
    </div>
  );
}
