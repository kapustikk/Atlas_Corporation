import s from '../AboutUs/AboutUs.module.css';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.jpg';

export default function CompletedProjects() {
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
              <h4 className={s.projectTitle}>Technical control</h4>
              <p className={s.projectText}>
                Our independent technical control will allow you to complete the
                project in a timely manner, avoiding the occurrence of risks and
                observing all relevant ...
              </p>
              <button type="button" className={s.buttonToProject}>
                Details ->{' '}
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
              <h4 className={s.projectTitle}>After sales service</h4>
              <p className={s.projectText}>
                We will allow you to complete the project in a timely manner,
                avoiding the occurrence of risks and observing all relevant ...
              </p>
              <button type="button" className={s.buttonToProject}>
                Details ->{' '}
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
              <h4 className={s.projectTitle}>Technical control</h4>
              <p className={s.projectText}>
                Our independent technical control will allow you to complete the
                project in a timely manner, avoiding the occurrence of risks and
                observing all relevant ...
              </p>
              <button type="button" className={s.buttonToProject}>
                Details ->{' '}
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
              <h4 className={s.projectTitle}>Start-up overhead works</h4>
              <p className={s.projectText}>
                We will allow you to complete the project in a timely manner,
                avoiding the occurrence of risks and observing all relevant ...
              </p>
              <button type="button" className={s.buttonToProject}>
                Details ->{' '}
              </button>
            </span>
          </li>
        </ul>
        <button type="button" className={s.button}>
          All projects
        </button>
      </div>
    </div>
  );
}
